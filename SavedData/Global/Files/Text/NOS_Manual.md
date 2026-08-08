# NOS Manual

The human guide to NOS - what it is, how to use it, and how to keep it healthy.
For per-window reference, click the **?** in any window's title bar. For the full
capability list, open the **Features** window.

{meta: synced-through=2026-08-08}

---

## 1. What is NOS

NOS (Nexus Operating System) is a desktop operating system that runs in your web
browser. It looks and feels like a familiar desktop - a dock of apps, draggable
windows, a wallpapered desktop with icons - but everything you make in it is
saved to the cloud automatically, so your whole workspace follows you to any
machine.

NOS is one OS serving three purposes:

1. **AI Design** (the primary purpose) - model systems for AI. Author and
   inspect XML, draw UML domain models, design XAML interfaces visually, bind
   them to data, validate against schemas, and execute Gorp workflows. The
   spine: Model → Design → Bind → Validate → Operate.
2. **Game Design** - game construction tools. Today that means the Cards
   suite: a card-table editor, deck builder, and sheet tools for designing
   card and CCG games.
3. **OS** - an online collaborative workspace: files, notes, chat, images, and
   accounts in one persistent desktop, in the spirit of Drive or 365.

## 2. Getting started

Open NOS in a browser (Chrome, Safari, Edge, or Firefox). After the loading
screen you'll see the desktop, the dock at the bottom, and the version number
in the top corner.

- **Click a dock icon** to open that app's window.
- **Drag windows** by their title bars; drag edges/corners to resize; use the
  title-bar buttons to minimize or close. Windows remember their positions,
  sizes, and content between visits.
- **Right-click is everywhere.** The desktop background, dock icons, window
  contents, and most items have context menus. On a phone or tablet,
  **long-press** acts as right-click.
- **The ? button** in any window's title bar opens that window's help: an
  annotated screenshot, an overview, and its shortcuts.
- **App Gallery** (in the dock) is the catalog of every built-in app - open
  apps from there, or drag them into the dock to pin them.

A few global shortcuts worth knowing on day one (the **Input Controls** window
lists everything):

| Keys | Action |
|---|---|
| Cmd/Ctrl+S | Save the focused window's file |
| Cmd/Ctrl+F | Search within the focused window |
| Alt/Option+F | Maximize / restore the focused window |
| Cmd/Ctrl+M | Toggle the performance overlay (FPS + memory) |
| F11 | Start / stop screen recording (saved to your cloud files) |
| Ctrl+Click a dock icon | Duplicate that dock icon |

## 3. Core concepts

**Desktop and dock.** The desktop holds icons (files and apps you've placed
there) and your wallpaper; the dock holds your pinned apps. Both are part of
your saved layout: rearrange them and they'll be the same tomorrow. Drag icons
between desktop and dock; right-click the desktop for wallpaper, import, icon
layout, and diagnostics options.

**Apps and windows.** An app (XML editor, Notes, Chat...) opens as a window.
Some apps can hold a file (an XML document, an image, a notes file) - the dock
icon then represents that file, and you can have several icons of the same app
holding different files.

**Files and the cloud.** NOS has no local hard drive. Every file you save,
every icon you place, every window position lands in NOS's cloud storage - the
SavedData folder of a GitHub repository - within moments. There is no "sync
button" - saving is automatic and continuous. Two facts to know and plan
around:

- *Your files are publicly viewable.* SavedData lives in a **public GitHub
  repository**: anyone can browse it directly on GitHub, no NOS account
  needed. Treat NOS files accordingly - it's a workspace, not a vault.
- *Confirmed deletes are permanent.* Deleting in NOS asks you to confirm;
  once you confirm, the file is removed from storage immediately. There is no
  trash can and no undo.

**Accounts.** NOS supports named user accounts, each with its own folder of
files and its own desktop layout. Some things are shared across all accounts on
purpose - the bug tracker is one, so every user sees the same project bug list.

## 4. Everyday workflows

**Open a file** - click its dock or desktop icon, or open the app and load
from within it.

**Save** - Cmd/Ctrl+S in the window. The first save opens a rename dialog to
pick the filename; after that, saves are one keystroke. Many windows also
auto-save state (scroll position, panel sizes, selection) continuously.

**Import files from your computer** - right-click the dock ("Import File...")
or the desktop ("Import Files..." - supports multiple), or drag files from
your computer straight onto NOS. Imported files upload to your cloud folder
and appear as icons.

**Get files out** - windows with documents offer export/download actions that
save through your browser's downloads.

**Change the wallpaper** - open the Gallery window and drag an image onto the
desktop, or right-click the desktop for gradient and scale options.

**Record your screen** - press F11 to start and stop. Recordings (MP4, with
microphone) save to your cloud files. Web version only.

**Chat with an AI** - the Chat window speaks to Gemini, OpenAI, and Anthropic
models; pick the model from its dropdown.

## 5. The windows at a glance

Click **?** in any window for its full reference. One line each:

| Window | What it's for |
|---|---|
| XML | Tree-based XML editor with color coding, search, drag-and-drop between windows |
| UML | Interactive class-diagram editor; imports SAI/Enterprise models; minimap; can project diagrams into XAML |
| XAML | Visual WPF interface designer: canvas + source, hierarchy, properties, bindings, live data preview |
| XAML Gorp | The XAML designer flavored for Gorp: execute buttons and Gorp palette |
| Gorp Equation | Visual math/logic equation builder; executes on the Gorp server; saves .gorp files |
| Notes | Markdown editor with edit/view modes and search-and-replace |
| Chat | Multi-provider AI chat |
| Gallery | Wallpaper image gallery; drag to set |
| App Gallery | Catalog of all built-in apps; drag to dock |
| Images | Image viewer for files you import or open |
| Cards | Card-game construction suite: table, decks, sheets |
| Bug Report | Shared project bug/request tracker; also lists auto-filed diagnostic reports |
| Features | The live capability index of NOS with status badges |
| Performance | FPS and memory overlay (Cmd/Ctrl+M) |
| Debug Log | Live application log viewer |
| Input Controls | Keyboard and mouse reference |

## 6. Keeping your NOS healthy (user maintenance)

**Saving and sync.** Layout changes (moving windows, icons, wallpaper) save
automatically a moment after you make them; document content saves when you
press Cmd/Ctrl+S. Closing the browser tab triggers a final save. If you work in
two browser tabs at once, the last one to save wins - avoid parallel editing
of the same file.

**Resetting.** There is no hidden local state to clear: NOS *is* its cloud
storage. To reset something, delete it explicitly - remove the file from
within NOS (or its icon), and the stored copy is deleted. Fresh visits rebuild
everything from storage, so what's in storage is the truth.

**Reading the toasts.** NOS reports problems as banner messages at the top of
the screen:

| Toast | Meaning | What to do |
|---|---|---|
| "Could not load your saved layout from GitHub" + Retry | Storage was unreachable (network hiccup or outage) | Check your connection, press Retry |
| "GitHub sync is offline: the server's access token expired..." | A server-side credential problem; nothing on your end | Tell the operator (the alert has already pinged them automatically) |
| "Rate limit exceeded" | Very rapid operations hit the per-minute cap | Wait a minute |
| "Diagnostic report sent / stored" | An error report went out (see below) | Nothing needed |

**Diagnostics and Privacy.** When NOS hits an error it can send a diagnostic
report so problems get fixed. This is entirely under your control:
right-click the desktop → **Diagnostics** → **Privacy Settings**. You choose
the mode (send nothing / ask each time / send automatically) and exactly which
data categories a report may include - system info, browser info, recent log
lines, network address, screenshot. The identifying items (network address,
screenshot) default to **off** and are delivered only to the operator's private
alert channel, never to shared storage. In "ask each time" mode you see the
exact report - including the actual screenshot - before anything sends, and
nothing sends without the agreement box checked. **Send Test Report** in the
same menu fires a harmless test through the whole pipeline.

Auto-filed reports appear in the Bug Report window's **Auto** tab, where they
can be promoted into real bug entries or deleted.

## 7. Troubleshooting quick answers

- **A window won't load its file** - check the toasts; a Retry usually means a
  network blip. Reopening the window re-fetches from storage.
- **Something looks stuck after lots of fast changes** - the rate limiter may
  have engaged; give it a minute.
- **The desktop came back different than I left it** - the layout saves a
  moment after changes; closing the tab within a second of a change can lose
  that change. The tab-close save catches most of this.
- **I deleted something by mistake** - confirmed deletes are permanent in NOS
  itself. The underlying storage keeps history that the operator can recover
  from in a pinch - ask quickly.
- **Something crashed or errored** - if you've enabled diagnostics, a report
  has likely already been offered or sent. Filing a bug in the Bug Report
  window with a screenshot attachment is the manual alternative.

## 8. Vocabulary

- **App** - a program in NOS (XML editor, Notes, Chat...). Lives in the App
  Gallery; opens as a window; can be pinned to the dock.
- **App Gallery** - the catalog window of every built-in app.
- **Auto report** - a diagnostic report filed automatically (with your
  consent) when NOS hits an error. Visible in Bug Report → Auto tab.
- **BUG-#### / REQ-####** - permanent IDs for bugs and feature requests in the
  Bug Report window. Never reused, even after deletion.
- **Cards suite** - the game-construction toolset: card table, deck editor,
  sheets.
- **Dock** - the bar of app icons at the bottom of the screen.
- **Desktop** - the wallpapered surface behind everything; holds icons and
  hosts the main right-click menu.
- **Features index** - the live, categorized list of NOS capabilities with
  status badges, shown in the Features window.
- **Gestalt** - part of the SAI schema family used for domain models and
  templates (see SAI).
- **Gorp** - NOS's workflow and equation execution system. Equations and
  workflows authored in NOS are sent to a Gorp server, which computes results
  and returns them.
- **.gorp file** - a saved Gorp equation: standard MathML plus the equation's
  input values.
- **Magic Portal** - the default route from NOS to the Gorp server (used when
  no custom endpoint is set). The name shown in the Gorp Equation window's
  endpoint field.
- **NOS** - Nexus Operating System, this product.
- **Nosh (.nosh)** - the packaged help format: a window's help text plus its
  annotated screenshot, bundled per window.
- **SAI** - the canonical XML model format family NOS reads and writes
  (Enterprise organization models, Gorp workflows, and related schemas). NOS
  fits its editors to the SAI shape - it never reshapes SAI files.
- **SavedData** - the cloud storage folder that holds everything NOS persists:
  your files, icons, layouts, help bundles, recordings, and reports.
- **Toast** - a temporary banner message at the top of the screen.
- **UML** - class-diagram modeling, as done in the UML window.
- **Window** - a draggable, resizable app frame with a title bar; remembers
  its position and contents.
- **Worker** - the cloud proxy that sits between NOS and its storage/AI
  services, keeping all credentials server-side. Users never interact with it
  directly.
- **XAML** - the WPF-style interface markup that the XAML window edits
  visually.
- **XMI** - a standard XML interchange format for UML models; one of the
  formats the UML window imports.
- **UFO Studios (UFOS)** - the studio behind NOS.

## 9. Where to learn more

- **Per-window details**: the ? button in each window.
- **Everything NOS can do**: the Features window.
- **Keyboard and mouse**: the Input Controls window.
- **For developers**: `NOS_Developers.md`, next to this file.
