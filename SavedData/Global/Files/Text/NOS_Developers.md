# NOS Developers Manual

Front door for anyone working ON NOS (as opposed to *in* it - that's
`NOS_Manual.md`). This doc owns operations, conventions, and the tools index.
It deliberately does NOT restate architecture or history - it links to them.

{meta: synced-through=2026-08-08}

## 0. Reading order for a new developer

1. This file, top to bottom (~10 min).
2. `Assets/CLAUDE.md` - the architecture map: every system, every script, the
   full window inventory. The single best orientation document.
3. `change.md` (project root) - the complete change history, newest first.
   Skim the last month to learn the current focus.
4. `Assets/UFOS/Scripts/Plans/` - deep-dive plan docs and code audits
   (latest audit: `CodeAudit-2026-08-03.md`, ~130 findings).
5. `NOS_Manual.md` §8 - the vocabulary. Domain terms (SAI, Gorp, Gestalt) are
   defined there once.

## 1. System map

```
Unity 6 client (WebGL / UI Toolkit)
  │  all network I/O, no credentials in client
  ▼
Cloudflare Worker  xml-editor-ai.idongoddard.workers.dev   [source: WorkerLive/]
  ├─ provider:"github" ──► GitHub Contents/Git-Data API ──► DonGoddard/XMLEditor (PUBLIC repo)
  │                          └─ SavedData/** = all user data, layouts, help, reports
  ├─ provider:"openai|anthropic|gemini" ──► AI chat APIs
  ├─ POST /gorp ──► GORP_TUNNEL_URL (cloudflared tunnel) ──► Nexus.ApiService :5348 (Gorp server)
  ├─ POST /alert, /report, /report-delete ──► Discord webhook (NOS server, #alerts) + SavedData/Reports/
  ├─ GET /health, /whoami ──► credential/status checks
  └─ cron 0 15 * * * ──► daily credential health check ──► Discord on failure/expiry
```

Key properties: the Worker holds ALL credentials (as write-only Secrets); the
Worker always returns HTTP 200 on proxied calls, so **clients must parse
response bodies for errors** (`"status":"4xx"`, `Bad credentials`, worker
exception shapes); the data repo is **public** - identifying diagnostic data
(IP, screenshots) must never be written to it (Discord-only rule).

## 2. Repos, environments, sources of truth

| Thing | Location | Notes |
|---|---|---|
| Unity project | `~/Unity/Projects/NOS/` | Client code under `Assets/UFOS/` |
| Data + deployed build | github.com/DonGoddard/XMLEditor | PUBLIC. `SavedData/**` = data; build hosted via Pages |
| Worker source of truth | `WorkerLive/` (worker.js, wrangler.toml, rotate-keys.sh) | Deploy from here ONLY. The copy in `Assets/UFOS/Backend/worker.js` is a reference snapshot |
| Cloudflare account | idongoddard@gmail.com (`2a3e696f…`) | An Apple-relay Cloudflare account also exists with nothing in it - wrong-login trap |
| Gorp server | Nexus.ApiService (VS project), localhost:5348 behind a cloudflared tunnel | See `Assets/UFOS/Backend/Cloudflare.md`, `NetworkChecks.md` |
| Alerting | Discord server "NOS", #alerts channel, webhook in `DISCORD_WEBHOOK_URL` secret | Alerts @mention Don (id 496794734065614851) |

## 3. Worker ops runbook

**Deploy:**
```
cd WorkerLive && npx wrangler deploy
```
- Bump `WORKER_VERSION` in worker.js on every change (verify after deploy via
  `/whoami`).
- **Never remove `keep_vars = true`** from wrangler.toml while any dashboard
  var exists - without it a deploy silently deletes them (`GORP_TUNNEL_URL` is
  still a plain-text var by design; all credentials are Secrets and survive
  regardless).
- Deploy propagation can lag a few seconds; re-test before diagnosing.

**Secrets** (all `secret_text`, write-only): `GITHUB_TOKEN`, `OPENAI_KEY`,
`ANTHROPIC_KEY`, `GEMINI_KEY`, `DISCORD_WEBHOOK_URL`. Rotation:
```
cd WorkerLive && ./rotate-keys.sh [KEY_NAME ...]     # prompts per key, verifies via /health
```
- **GITHUB_TOKEN policy (Don's deliberate choice):** 90-day expiring
  fine-grained PAT (repo XMLEditor, Contents R/W) as a blast-radius limiter.
  Current expiry: **Nov 6, 2026**. The daily cron warns Discord starting 14
  days out. If GitHub sync dies near that date, assume expiry first.
  Reference outage + diagnosis: change.md 2026-08-07.

**Health:** `GET /health` - auth-only checks of all four provider credentials,
zero token spend, no alerts. First stop for "NOS won't load" or "chat is
broken". The cron (daily 15:00 UTC ≈ 8am PT) runs the same checks and
Discord-pings on any dead credential (re-pings daily until fixed).

**Alert/report pipeline:**
- `POST /alert` - anonymous ops ping (signature, context, version, platform).
  Client sends once per session per signature; Worker throttles Discord to one
  ping per signature per 6h with a repeat counter in KV (`NOS_ALERTS`).
- `POST /report` - consent-gated rich diagnostics (see §5 of the client-side
  notes below). Stores technical-only JSON in `SavedData/Reports/` + maintains
  `index.json` (Worker is the index's ONLY writer); IP/geo/screenshot go to
  Discord ONLY. Caps: context 500 / logs 12KB / screenshot 900KB b64 /
  30 stored per day. `test-` signature prefix bypasses the ping throttle.
- `POST /report-delete` - deletes one report + deindexes; filename regex-guarded
  to `Reports/*.json`.

**Gorp routing:** client → Worker `/gorp` → `GORP_TUNNEL_URL` → cloudflared
tunnel → Nexus.ApiService. When Gorp execution fails, check in order: tunnel
process running, ApiService running, `GORP_TUNNEL_URL` current (it changes when
the tunnel is recreated - update the var, no code deploy needed).

## 4. Client build & deploy

- WebGL build committed to the XMLEditor repo (same repo as data) and served
  via GitHub Pages; `.nojekyll` required.
- **Atomic deploys only**: a partial upload leaves mismatched `.wasm`/`.data`
  and the deployed build dies out-of-memory at boot. Use the Git Build
  Committer's Force Full Upload when in doubt (see change.md 2026-05-08→10).
- Version stamping is automatic (`GamePrePostCompile` / `GamePrePostBuild` →
  `GameSettings.compileBuildVersion`, displayed top-right in the app).
- Editor-vs-build principle: **no divergent behavior between editor and
  build.** Data round-trips through GitHub identically in both; reset happens
  by explicitly deleting from GitHub, not by clearing local state.

## 5. Conventions & hard-won gotchas

Style:
- No underscore prefixes on fields - plain camelCase everywhere.
- Every code change gets a `change.md` entry (project rule).
- Big windows are partial classes split by concern (`XamlWindow.Parse.cs`,
  `.Rendering.cs`, ...). Follow the pattern when a window grows.
- Code-built overlay UI (no prefab) is a legitimate pattern - see
  `HelpWindow`, `DiagnosticsPanel`.

UI Toolkit:
- **Never put literal angle-bracket text in Labels/tooltips** - UITK parses
  rich text; you get twitching + recursive-layout warnings.
- **Never use default ScrollView scrollbars** - NOS thin style: 10px scroller,
  `min-width` set (the theme's ~14px min-width silently beats a plain
  `width`), buttons hidden, #1a1a1a track, #555 thumb. Reference:
  `UmlWindow.uss` or `DiagnosticsPanel.StyleThinScroller`.
- Drag-and-drop and layout patterns: use `GlobalDragState`; capture pointers;
  see existing windows before inventing new mechanics.

Unity:
- MonoBehaviour singletons MUST null their `Instance` in `OnDestroy` -
  Unity's destroyed-object equality makes `?.` insufficient.
- `XmlDocument.LoadXml(string)` is not BOM-tolerant - strip leading U+FEFF.
- Load images via `ImageDecoder.LoadAnyImageAsync` + `BindAnimated` -
  `UnityWebRequestTexture` only decodes the first frame of animated images.
- All user-supplied filenames go through `GitHubUploader.SanitizePathComponent`
  (plain space-replace misses U+202F, which macOS puts in screenshot names).

GitHub I/O:
- All writes are serialized through `GitHubUploader`'s write queue -
  concurrent Contents-API PUTs collide on repo HEAD. Never bypass it.
- Binaries over 250KB route through the Git Data API path (the Worker→GitHub
  leg drops large Contents-API bodies); text over 900KB likewise.
- Never persist a path (attachment, icon) to JSON before its upload confirms -
  the deferred-commit pattern in `BugReportWindow` is the reference.
- Auth failures (401) are permanent until rotation: `IsAuthFailure` /
  `AUTHFAIL` short-circuit retries and raise one persistent toast + ops alert.

Error reporting (client):
- `ErrorReporter.Report(signature, context)` is the single entry point; it is
  consent-gated and session-deduped per signature. Wired sites: `github-401`,
  `exception-{Type}` (auto), `github-save-failed`, `gorp-unreachable`. New
  failure modes should call it rather than inventing new channels.
- Reserved global shortcuts (don't claim): Cmd/Ctrl+F, Alt/Option+F,
  Cmd/Ctrl+S/W/M/D, F11.

Debugging principle: when behavior looks "random" or "inconsistent", stop
guessing - add instrumentation, check actual disk/network state (curl the
Worker, list the repo), and find a working analogue elsewhere in the codebase.

## 6. Tools index

| Tool | Where | Use |
|---|---|---|
| Capture Window Screenshots | Tools › UFOS (Cmd+Ctrl+Opt+Shift+C, Play Mode) | Regenerates per-window `.nosh` help bundles |
| Send Test Report | desktop right-click → Diagnostics | Fires the full consent→report→Discord pipeline; repeatable |
| `/health` | `curl https://xml-editor-ai.idongoddard.workers.dev/health` | All-provider credential check |
| `/whoami` | same host | Deployed worker version + OpenAI reachability |
| rotate-keys.sh | `WorkerLive/` | Guided secret rotation + verification |
| Debug: Upload Test File | GitHubUploader inspector context menu | End-to-end write-path test |
| DebugLogWindow | in-app | Live log capture |
| PerformanceWindow | Cmd/Ctrl+M | FPS + memory |
| UIManager.Debug | `UIManager.Debug.cs` | Status bar + UI hit-detection visualization |
| Screen recorder | F11 (WebGL) | MP4 + mic → SavedData/Recordings |
| Generate Background Manifest | Tools › UFOS | Rebuilds wallpaper manifest |

## 7. The documentation system

Four tiers, one runbook: `Assets/UFOS/Scripts/UpdateHelpFeatures.md` defines
them all. Summary:

| Tier | File | Audience | Trigger |
|---|---|---|---|
| 1 | `NOS_Help.md` → `.nosh` per window | users (the ? button) | "update help" + capture script |
| 2 | `Features.md` | users (Features window) | "update features" |
| 3 | `NOS_Manual.md` | users (narrative + glossary) | "update docs" |
| 3 | `NOS_Developers.md` (this file) | developers | "update docs" |

Maintenance contract: manuals hold slow-moving facts only and link to tiers
1-2 for detail (single-source rule); `change.md` is the update queue, consumed
from each manual's `{meta: synced-through=...}` marker forward; the glossary is
append-only. Full procedure: runbook §9.

## 8. History & incident references

- **2026-08-07 outage** (GitHub token expiry, full diagnosis → alerting
  pipeline built): change.md entries of 2026-08-07/08.
- **Code audits**: `Assets/UFOS/Scripts/Plans/CodeAudit-2026-08-03.md` (latest,
  ~130 findings, largely unaddressed), plus 2026-04-15 and 2026-05-07.
- **Deployed-build OOM postmortem** (non-atomic upload): change.md ~2026-05-08.
- **Collab/multi-user plan** (paused on Workers Paid plan for Durable
  Objects): `Plans/CollabSessionPlan-2026-06-03.md`, `Backend/CollabBackend.md`.
