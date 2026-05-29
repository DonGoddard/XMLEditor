# NOS Features

NOS is one operating system serving three purposes. Each tab below is its own value story.
Entries link to the window that delivers them ([[Window]]) and carry a status badge.
Markers: `[[TypeName]]` link · `{status:...}` badge · `{media:...}` hover preview · `{id:...}` permanent id (linked bugs/requests track it).

**At a glance:** 20 windows · live counts per tab below · updated 2026-05-29

---

## AI Design
{meta: updated=2026-05-29}

*Model systems for AI: take an idea from structure to a running, validated, data-driven design.*
**Spine: Model → Design → Bind → Validate → Operate.**

### Model
- [[XmlWindow]] **Author & inspect XML** — tree editor with line numbers, drag-and-drop nodes, validation. {status:Stable} {media:XmlWindow} {id:feat-001}
- [[XmlWindow]] **Inter-window node drag-and-drop** — drag XML nodes between open windows to compose documents. {status:Stable} {id:feat-041}
- [[XmlWindow]] **Tree state restore** — expand/collapse state and scroll position survive reload. {status:Stable} {id:feat-042}
- [[UmlWindow]] **Model a domain visually** — interactive UML class diagrams, SAI/Enterprise/Gorp import, minimap, focus/subtree isolation. {status:Stable} {media:UmlWindow} {id:feat-002}
- [[UmlWindow]] **Import from XMI / Enterprise / Gorp / SAI** — parse several UML dialects into one editable graph. {status:Stable} {id:feat-043}
- [[UmlWindow]] **XAML → graph projection** — turn a XAML tree into a diagram with containment, binding, and resource edges. {status:Stable} {id:feat-044}
- [[UmlWindow]] **Auto-layout** — force-directed, layered-tree, grid, and fit-to-extents arrangements. {status:Stable} {id:feat-045}
- [[UmlWindow]] **Floating minimap** — color-matched overview with a draggable, resizable viewport rect. {status:Stable} {id:feat-046}
- [[UmlWindow]] **Live XML side panel** — split-pane source synced to the diagram, with row selection and scroll. {status:Stable} {id:feat-047}
- [[UmlWindow]] **Focus mode** — isolate a subtree or a node's context to cut visual noise. {status:Stable} {id:feat-048}

### Design
- [[XamlWindow]] **Design UI like WPF** — drag ~50 WPF controls onto a canvas, edit properties, dual-pane source, hierarchy tree. {status:Stable} {media:XamlWindow} {id:feat-003}
- [[XamlWindow]] **~40 WPF control renderers** — buttons, panels, text, shapes and more drawn live on the canvas. {status:Stable} {id:feat-049}
- [[XamlWindow]] **Drag-to-move & 8-handle resize** — direct-manipulate elements on the canvas. {status:Stable} {id:feat-050}
- [[XamlWindow]] **Source row drag-to-reorder** — reorder elements from the source pane with a drop indicator. {status:Stable} {id:feat-051}
- [[XamlWindow]] **Hierarchy tree** — collapsible element tree that auto-expands to the current selection. {status:Stable} {id:feat-052}
- [[XamlWindow]] **Color picker popup** — 24-color grid plus hex entry, applied straight to properties. {status:Stable} {id:feat-053}
- [[XamlWindow]] **Copy / cut / paste / duplicate** — full node-level clipboard with keyboard shortcuts. {status:Stable} {id:feat-054}
- [[XamlGorpWindow]] **Gorp-flavored design** — XAML designer with a Gorp palette and Execute/Toggle/Layout actions. {status:Stable} {id:feat-004}

### Bind
- [[XamlWindow]] **Live data binding** — Binding pills, JSON/Gorp data context, computed expressions, Preview mode resolves bindings to real values. {status:Stable} {id:feat-005}
- [[XamlWindow]] **Data context panel** — apply JSON or Gorp data and flip into a live Preview that resolves every binding. {status:Stable} {id:feat-055}
- [[XamlWindow]] **Inline computed expressions** — evaluate computed fields with no external NCalc dependency. {status:Stable} {id:feat-056}

### Validate
- [[XmlWindow]] **Schema validation** — Gestalt/SAI XSD checking with error/warning callbacks. {status:Beta} {id:feat-006}
- [[XmlWindow]] **Well-formedness check** — fast parse-only pass that flags malformed XML before deeper validation. {status:Stable} {id:feat-057}
- *Whole-file Gorp validation* — a wrapper schema over the Gorp document plus schema/data reconciliation. {status:Planned} {id:feat-007}

### Operate
- [[GorpEquationWindow]] **Build math & logic** — visual MathML equation builder (11 node types), undo stack, runs against the Gorp server. {status:Stable} {media:GorpEquationWindow} {id:feat-008}
- [[GorpEquationWindow]] **11 expression node types** — number, variable, binary (+ − × ^), fraction, root, negate, paren, compare, logic, if. {status:Stable} {id:feat-058}
- [[GorpEquationWindow]] **Drag existing subtrees** — pick up and re-parent any sub-expression with deep-clone and cycle guards. {status:Stable} {id:feat-059}
- [[GorpEquationWindow]] **50-deep undo / redo** — Ctrl+Z / Ctrl+Shift+Z across every edit. {status:Stable} {id:feat-060}
- [[GorpEquationWindow]] **.gorp file format** — saves MathML plus an inputs block; round-trips through GitHub. {status:Stable} {id:feat-061}

### Assist *(cross-purpose; home tab AI Design)*
- [[ChatWindow]] **AI co-designer** — multi-provider chat (Gemini / OpenAI / Anthropic) proxied through the worker. {status:Stable} {media:ChatWindow} {id:feat-009} → also aids Game Design & OS.

### Next
- Full WPF Grid layout engine (rows/columns/placement) — currently a flat-column approximation. {status:Planned} {id:feat-010}
- Style / DataTemplate / ControlTemplate evaluation at render time. {status:Planned} {id:feat-011}
- Gorp interaction polish: subtree scope highlight, side drop-preview panel, box-select. {status:Planned} {id:feat-012}
- [[UmlWindow]] XAML-aware node cards — multi-section cards with stereotypes and badges. {status:Planned} {id:feat-062}
- [[UmlWindow]] Explicit binding / resource / style / template edge types. {status:Planned} {id:feat-063}
- [[UmlWindow]] XAML-backed editing — rename, add/remove children, and change properties from the diagram. {status:Planned} {id:feat-064}
- [[UmlWindow]] Template & ResourceDictionary views. {status:Planned} {id:feat-065}
- [[UmlWindow]] Generic SAI / XSD graph projection. {status:Planned} {id:feat-066}

---

## Game Design
{meta: updated=2026-05-29}

*Construct games, with optional AI integration. A suite of tools, not a single editor.*

### Cards
- [[CardsWindow]] **Card-game construction suite** — table editor, deck builder, sheet-grid slicer with live grid handles, per-deck back textures, card ops, JSON deck export. {status:Stable} {media:CardsWindow} {id:feat-013}
- [[CardsWindow]] **Sheet-mode deck import** — slice a printed sheet into cards with live grid, offset, and padding handles. {status:Stable} {id:feat-067}
- [[CardsWindow]] **Individual-mode import** — bulk-add images, sort by filename, downscale and upload per card. {status:Stable} {id:feat-068}
- [[CardsWindow]] **Pile markers** — draw / discard / custom piles with shuffle, flip, label sides, and reset. {status:Stable} {id:feat-069}
- [[CardsWindow]] **Deal layouts** — Klondike, Blackjack, 5-card Poker, and Fan deals. {status:Stable} {id:feat-070}
- [[CardsWindow]] **Save deck to desktop** — exports a deck with a stacked 3-card composite icon. {status:Stable} {id:feat-071}
- [[CardsWindow]] **Drag a .deck onto the table** — drop a saved deck icon to load and deal at center. {status:Stable} {id:feat-072}
- [[CardsWindow]] **Card ops** — per-card rotation, flip, multi-select drag, bring-to-front. {status:Stable} {id:feat-073}
- [[CardsWindow]] **Editable deck name & back swatch** — rename in place and drop an image as the deck back. {status:Stable} {id:feat-074}

### Next
- Additional game-construction tools beyond cards (board/token/rules). {status:Wishlist} {id:feat-014}
- Deck types & richer CCG rules. {status:Planned} {id:feat-015}
- [[CardsWindow]] Per-card backs — front/back filename pairing and PerCard render. {status:Planned} {id:feat-075}
- [[CardsWindow]] Auto-crop ladder — background-bbox, manual 4-corner, then contour + perspective warp. {status:Planned} {id:feat-076}
- [[CardsWindow]] Deck template zones. {status:Wishlist} {id:feat-077}

---

## OS
{meta: updated=2026-05-29}

*An online, collaborative workspace — a Drive/365-style OS with a suite of tools for building content together.*

### Workspace
- [[AppGalleryWindow]] **App launcher** — browse built-in apps, drag to dock, click to open. {status:Stable} {media:AppGalleryWindow} {id:feat-016}
- [[NotesWindow]] **Notes & docs** — markdown editor with edit/view modes, search & replace, GitHub sync. {status:Stable} {media:NotesWindow} {id:feat-017}
- [[ImageWindow]] **Image viewer** — async image fetch, animated-image support, format toggle. {status:Stable} {media:ImageWindow} {id:feat-018}
- [[ImageWindow]] **Five image formats** — read and save PNG, JPG, GIF, WebP, and AVIF. {status:Stable} {id:feat-078}
- [[GalleryWindow]] **Background gallery** — browse and drag images to set the desktop wallpaper. {status:Stable} {media:GalleryWindow} {id:feat-019}

### Accounts & sharing
- [[AccountActivityWindow]] **Account activity** — per-account activity view over GitHub-backed storage. {status:Stable} {id:feat-020}
- [[AccountActivityWindow]] **Multi-account management** — switch, create, rename, and delete accounts atomically in a single commit. {status:Stable} {id:feat-079}
- [[AccountActivityWindow]] **QR deep-link sharing** — generate a QR link that boots straight into a shared account. {status:Stable} {id:feat-080}
- *Real-time multi-user* — simultaneous editing across accounts, like Google Docs. {status:Wishlist} {id:feat-021}

### Utilities
- [[PerformanceWindow]] **Performance overlay** — FPS + memory stats, color-coded; Ctrl/Cmd+M. {status:Stable} {media:PerformanceWindow} {id:feat-022}
- [[InputControlsWindow]] **Keyboard & cursor reference** — the global keybinding map. {status:Stable} {id:feat-023}
- [[BugReportWindow]] **Bug reports** — file BUG-#### reports with attachments to shared storage. {status:Stable} {id:feat-024}
- [[DebugLogWindow]] **Live log** — real-time Unity log capture. {status:Stable} {media:DebugLogWindow} {id:feat-025}
- [[DebugLogWindow]] **Log filtering** — info / warning / error toggles with collapse. {status:Stable} {id:feat-081}
- *Feature requests* — REQ-#### sibling of bug reports, openable from any Features entry. {status:Stable} {id:feat-026}

### Help & docs
- [[HelpWindow]] **In-context help** — annotated screenshot, descriptor tags with hover tooltips, key bindings; per window via the **?** button. {status:Stable} {id:feat-027}
- [[FeaturesWindow]] **This index** — the three-purpose product map with hover previews, links, requests, and a changelog. {status:Stable} {id:feat-028}

### Foundations *(shared plumbing under every purpose)*
- [[GitHubUploader]] **Online persistence & sync** — serial write queue, conflict-retry, proxied through Cloudflare (no token in client). {status:Stable} {id:feat-029}
- [[GitHubUploader]] **Serial write queue** — one write at a time eliminates SHA conflicts on bulk imports. {status:Stable} {id:feat-082}
- [[GitHubUploader]] **Large-file transfer** — reads and writes files over 1 MB via the Git Data API blob path. {status:Stable} {id:feat-083}
- [[GitHubUploader]] **Atomic account folders** — copy, rename, and delete a whole account in one commit. {status:Stable} {id:feat-084}
- [[WindowBase]] **Windowing framework** — drag/snap/resize/minimize, state persistence, in-place editing, per-window help. {status:Stable} {id:feat-030}
- [[WindowBase]] **In-place text editing** — custom caret and selection rendering, word/line navigation, mobile keyboard path. {status:Stable} {id:feat-085}
- *File import* — native + WebGL multi-file picker into dock and desktop. {status:Stable} {id:feat-031}
- *Image decoder* — PNG / JPG / GIF / WebP / AVIF with animated-GIF playback across the whole UI. {status:Stable} {id:feat-086}
- *App registry* — extension-to-app association with an "Open With" menu and persisted dock. {status:Stable} {id:feat-087}
- *Desktop & dock* — drag-reorder, pin/unpin, multi-import, color tint, drag between desktop and dock. {status:Stable} {id:feat-088}
- *Managers* — cursor, tooltip, context-menu, and modal-input services shared by every window. {status:Stable} {id:feat-089}
- *Screen recorder* — F11 capture with preview and gallery save. {status:Stable} {id:feat-090}
- *WebGL bridges* — browser file-drop, tab-hide save, image decode, and fetch-with-timeout. {status:Stable} {id:feat-091}
- *Cloudflare Worker* — gates and proxies all GitHub and Gorp traffic so no token lives in the client. {status:Stable} {id:feat-092}

### Next
- Real-time multi-user collaboration. {status:Wishlist} {id:feat-032}
- Server-side trash / soft-delete + atomic Move/Rename. {status:Planned} {id:feat-033}
- Write-queue persistence (localStorage outbox) across reloads. {status:Planned} {id:feat-034}
- Multiline in-place text editing. {status:Planned} {id:feat-035}
- Drag-from-OS onto the desktop background + batch-import progress UI. {status:Planned} {id:feat-036}
- [[GalleryWindow]] Animated-GIF gallery thumbnails and wallpapers. {status:Planned} {id:feat-093}
- Pinch-to-zoom on canvas surfaces (UML / XAML / Cards). {status:Planned} {id:feat-094}
- Receive-side QR scan flow (today it only generates). {status:Planned} {id:feat-095}
- Conflict-merge UI for cross-session edits. {status:Planned} {id:feat-096}

---

## Wishlist

- In-app annotation editor (drag-to-place help badges) instead of hand-authored markers. {id:feat-037}
- Exported one-page product summary (markdown/PDF) for sharing with businesses. {id:feat-038}
- "What's new" auto-generated from change.md dates. {id:feat-039}
- Conflict-merge UI for cross-session edits. {id:feat-040}

---

*Changelog (for the technically curious): a small button in this window opens the full change log.*
