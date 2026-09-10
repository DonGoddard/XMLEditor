# NOS Manual

The human guide to NOS - what it is, how to use it, and how to keep it healthy.
For per-window reference, click the **?** in any window's title bar. For the full
capability list, open the **Features** window.

{meta: synced-through=2026-09-10}

---

## 1. What is NOS

NOS (Nexus Operating System) is a desktop operating system that runs in your web
browser. It looks and feels like a familiar desktop - a dock of apps, draggable
windows, a wallpapered desktop with icons - but everything you make in it is
saved to the cloud automatically, so your whole workspace follows you to any
machine.

NOS is one OS serving three purposes:

1. **AI Design** (the primary purpose) - model systems for AI. Design a
   system in the **AI Designer** (data, models and algorithms wired on one
   canvas and sent to the AI service with one click), author and inspect XML,
   draw UML domain models, design XAML interfaces visually, bind them to
   data, validate against schemas, and execute Gorp equations. The spine:
   Model → Design → Bind → Validate → Operate.
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

**Design an AI system** - open the AI Designer. Click **Data**, **Model** or
**Algorithm** on the left to drop a box, right-click an algorithm to choose
its Input and Output models, and press **Run**: the design goes to the AI
service and the reply comes back as a node on the same canvas. **Check**
lists problems without touching the network; right-click an operation and
choose **Test…** to try it against the math service with real values. The
dropdown on the run bar switches between the Class, Sequence, Activity and
State Machine views of the same design. The XML panel's **Wire** button
shows exactly what Run sends.

**Start a fresh document** - **New Diagram** (or **New AI Design**) on a
window's menu clears the canvas and binds a new file, so the next save cannot
write over the document you had open. **Open Saved…** lists that app's folder
in your account; **Open Starter Sample** opens the bundled example as a new
document.

**Set a unit on a value** - right-click a variable in a UML or AI design and
choose **Set Unit**. The picker composes a unit from prefix, unit and power
lists, so an impossible unit cannot be built; click the unit chip next to a
name to change it later. Equations carry units too, and a comparison of
seconds against kilograms is flagged before anything is sent.

**See your glucose** - the CGM window connects to a Dexcom account (press
**Connect**, sign in on the page that opens) and shows your latest reading,
the last few hours against your target range, and the usual summary numbers.

**Brand the OS** - Content Creators and Admins open **Brand Studio**
(Cmd/Ctrl+B) to rename the OS, recolor it, skin its chrome, choose fonts and
icons, and decide which apps people see. Edits preview live; **Publish**
makes them everyone's.

## 5. The windows at a glance

Click **?** in any window for its full reference. One line each:

| Window | What it's for |
|---|---|
| XML | Tree-based XML editor with color coding, search, drag-and-drop between windows; keeps comments |
| UML | Interactive class-diagram editor; imports SAI/Enterprise models; minimap; units and collapse policies on members; can project diagrams into XAML |
| AI Designer | Design an AI system as data, models and algorithms on one canvas; Run sends it to the AI service; Check, Test, and four views of the same design |
| XAML | Visual WPF interface designer: canvas + source, hierarchy, properties, bindings, live data preview |
| XAML Gorp | The XAML designer flavored for Gorp: execute buttons and Gorp palette |
| Gorp Equation | Visual math/logic equation builder; executes on the Gorp server; saves .gorp files |
| Notes | Markdown editor with edit/view modes and search-and-replace |
| Chat | Multi-provider AI chat |
| Gallery | Wallpaper image gallery; drag to set |
| App Gallery | Catalog of all built-in apps; drag to dock |
| Images | Image viewer for files you import or open |
| Video | Plays one recording from the Gallery, with loop, speed and volume |
| CGM | Continuous glucose monitor dashboard read from a Dexcom account |
| Brand Studio | The brand editor (Content Creators and Admins): name, colors, skins, fonts, icons, app visibility |
| Cards | Card-game construction suite: table, decks, sheets |
| Bug Report | Shared project bug/request tracker; also lists auto-filed diagnostic reports |
| Features | The live capability index of NOS with status badges |
| Ledger | The build history of NOS as a spreadsheet: every implementation ever made, filterable and sortable, with statistics and a day-by-day playback. Reopens exactly as you left it - tab, filters, sort, open sections, scroll position and playback point |
| Performance | FPS and memory overlay (Cmd/Ctrl+M) |
| Debug Log | Live application log viewer |
| Input Controls | Keyboard and mouse reference |
| Collab Video Test | An engineering bench for the shared-screen experiment; numbers, not polish |

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

**Your activity history.** NOS keeps a running log of what happens in your
account - sessions opened and closed, apps opened, files saved and renamed,
wallpapers set - and shows it in the **Account Activity** window. It records
activity only: never the contents of your files, never your chat messages. The
log trims itself, moving older stretches into monthly archives so the current
one stays quick to load. If those archives grow larger than you'd like,
**Compact archives** on the Logs tab shrinks them by combining repeated
server-request entries into one line per minute. Your totals stay exactly the
same; only the minute-by-minute detail of those requests is reduced. It never
touches the current log. Note that when you're not signed in to a named
account, this activity is recorded under **Global** rather than under your name.

**Reading the toasts.** NOS reports problems as banner messages at the top of
the screen:

| Toast | Meaning | What to do |
|---|---|---|
| "Could not load your saved layout from GitHub" + Retry | Storage was unreachable (network hiccup or outage) | Check your connection, press Retry |
| "GitHub sync is offline: the server's access token expired..." | A server-side credential problem; nothing on your end | Tell the operator (the alert has already pinged them automatically) |
| "Rate limit exceeded" | Very rapid operations hit the per-minute cap | Wait a minute |
| "Diagnostic report sent / stored" | An error report went out (see below) | Nothing needed |
| "...saved by a newer version of NOS. It will not be saved here" | Your layout or the account index was written by a newer build than the one you are running, so this build shows it but will not overwrite it | Reload the page to get the current build; if it persists, clear the site data |
| "Not saved on close" (in the log) | An XML window was showing the bundled sample because its file could not be fetched, so closing it did not save the sample over your file | Reopen the window once the connection is back |

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
- **Saves are refused and a toast mentions a newer version** - the file was
  written by a newer build than the one your browser is running. Reload to
  pick up the current build.
- **Run in the AI Designer works for the developer but fails in the browser**
  - a typed endpoint address goes to the server directly, which browsers
  block. Clear the address to return to the Magic Portal.
- **Replace in Notes says to clear the status filter** - with a filter on,
  Replace edits only the lines you can see; the lines it hid stay as they
  were. If a visible line cannot be matched back to the note, it refuses
  rather than guess.

## 8. Vocabulary

- **Activity view** - one of the AI Designer's views: the values flowing into each algorithm, its operations, and what comes out, each value carrying its unit.
- **AI Designer** - the window where an AI system is designed as **Data**, **Model** and **Algorithm** boxes wired on one canvas and sent to the AI service with **Run**.
- **Algorithm** - the construct that does the work in an AI design: one Input model, one Output model, its operations, and the flow that runs them.
- **App** - a program in NOS (XML editor, Notes, Chat...). Lives in the App
  Gallery; opens as a window; can be pinned to the dock.
- **App Gallery** - the catalog window of every built-in app.
- **Auto report** - a diagnostic report filed automatically (with your
  consent) when NOS hits an error. Visible in Bug Report → Auto tab.
- **Brand Studio** - the window where a Content Creator or Admin renames, recolors, skins and re-icons the OS and chooses which apps people see; **Publish** makes the brand everyone's.
- **BUG-#### / REQ-####** - permanent IDs for bugs and feature requests in the
  Bug Report window. Never reused, even after deletion.
- **Cards suite** - the game-construction toolset: card table, deck editor,
  sheets.
- **CGM** - continuous glucose monitor; the CGM window shows readings from a Dexcom account.
- **Check** - the AI Designer's offline pass over a design: bad units, incompatible comparisons, clashing names, unwired algorithms, each finding clickable.
- **Collapse** - the policy that says how repeated observations of a value are merged (earliest, latest, sum, vote...). Set from a variable's right-click menu; shown as a small chip.
- **Compose** - the fix the AI Designer offers when two models are wired to one Input port: it builds one model that references both, so the algorithm keeps exactly one input.
- **D-SI unit** - the way NOS writes a unit of measure in a file (a spelling standard from the German metrology institute). On screen it reads as maths, such as km/h; the D-SI spelling appears on hover and in the file.
- **Data** - the construct holding real values in an AI design; a data box is an *instance* of a model.
- **Delegate** - a step in an algorithm's flow that calls another algorithm; drawn as a dashed arrow the designer derives, never one you draw.
- **Desktop** - the wallpapered surface behind everything; holds icons and
  hosts the main right-click menu.
- **Dexcom** - the glucose-monitor service the CGM window signs into. NOS keeps the link handle on your device, never in a shared file.
- **Dock** - the bar of app icons at the bottom of the screen.
- **Features index** - the live, categorized list of NOS capabilities with
  status badges, shown in the Features window.
- **Gestalt** - part of the SAI schema family used for domain models and
  templates (see SAI).
- **Gorp** - NOS's workflow and equation execution system. Equations and
  workflows authored in NOS are sent to a Gorp server, which computes results
  and returns them.
- **.gorp file** - a saved Gorp equation: standard MathML plus the equation's
  input values, each with its unit.
- **.help file** - the packaged help for one window: its help text plus its
  annotated screenshot. (Earlier builds called this format .nosh.)
- **Info badge** - the small *i* at the right edge of a member row in a diagram; click it to read the member's comment, rules and extras in a panel.
- **Instance** - a data box's relationship to its model: the data is one instance of that shape. Drawn as a dashed arrow the designer derives.
- **Ledger** - the window that reads the tape and shows it four ways: a sortable
  sheet, a per-system breakdown, statistics, and a playback of the project being
  built day by day.
- **Magic Portal** - the default route from NOS to the Gorp and AI services,
  through the Worker. It is what the endpoint field shows when no custom
  address is set. A typed address goes to the server directly, which works
  only for a developer, not in a browser.
- **Model** - the construct that describes the shape of data in an AI design: named variables with types and units, and the operations that act on them.
- **NOS** - Nexus Operating System, this product.
- **Nosh (.nosh)** - the old name of the packaged help format; see **.help file**.
- **Port** - the small circle on an algorithm box where an Input or Output wire lands, instead of the whole box.
- **Reference** - a variable that points at another model (its *of*). Drawn as a solid arrow from that row.
- **SAI** - the canonical XML model format family NOS reads and writes
  (Enterprise organization models, Gorp workflows, and related schemas). NOS
  fits its editors to the SAI shape - it never reshapes SAI files.
- **SavedData** - the cloud storage folder that holds everything NOS persists:
  your files, icons, layouts, help bundles, recordings, and reports.
- **Sequence view** - one of the AI Designer's views: the design read as an order of calls, derived from the Input and Output wiring rather than drawn.
- **Starter sample** - the bundled example design that **Open Starter Sample** opens as a new document.
- **State Machine view** - one of the AI Designer's views: a pane under the canvas showing the selected construct's flow as states and guarded transitions. Right-click in it to author; the step bar walks the flow with values you type.
- **Step** - asking the State Machine view "given these values, where does the flow go next"; answered locally, no server involved.
- **Tape** - the chronological record of every feature, fix, adjustment,
  infrastructure change and documentation pass ever made to NOS, one line each.
  The Ledger window reads it.
- **Test panel** - opened from an operation's right-click menu in the AI Designer: an expression, its input values and an expected result, run against the math service.
- **Toast** - a temporary banner message at the top of the screen.
- **UFO Studios (UFOS)** - the studio behind NOS.
- **UML** - class-diagram modeling, as done in the UML window.
- **Unit chip** - the small unit shown beside a variable's name in a diagram or an equation; click it to change the unit. Orange means the declared unit does not parse.
- **Version (of a file)** - the number a layout or account file carries saying which build wrote it. A file from a newer build opens read-only in an older one, so nothing is lost.
- **Window** - a draggable, resizable app frame with a title bar; remembers
  its position and contents.
- **Wire** - the XML panel's third mode in the AI Designer: the exact text a Run sends, read-only.
- **Worker** - the cloud proxy that sits between NOS and its storage/AI
  services, keeping all credentials server-side. Users never interact with it
  directly.
- **xaiml** - the labelled wrapper NOS puts around anything it sends to the AI service, so the service knows what it is receiving.
- **XAML** - the WPF-style interface markup that the XAML window edits
  visually.
- **XMI** - a standard XML interchange format for UML models; one of the
  formats the UML window imports.
- **xmlIT / gorpIT** - the two backend services: xmlIT receives whole AI designs, gorpIT computes equations and single operations.

## 9. Where to learn more

- **Per-window details**: the ? button in each window.
- **Everything NOS can do**: the Features window.
- **Keyboard and mouse**: the Input Controls window.
- **For developers**: `NOS_Developers.md`, next to this file.
