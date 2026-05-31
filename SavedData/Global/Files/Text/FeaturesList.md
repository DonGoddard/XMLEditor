# NOS Features List

NOS is one operating system serving three purposes - **first an AI Designer, second a Game Designer, third an online OS**. This is the readable, full list of what's built and what's coming. For the interactive, filterable version see the **Features** app.

*Updated 2026-05-31 · Legend: ✓ shipped · ◔ beta · ○ planned · ☆ wishlist*

---

# AI Designer

*Take an idea from structure to a running, validated, data-driven design. Spine: Model → Design → Bind → Validate → Operate.*

## Model

**XML editor** - ✓ hierarchical tree editor with color coding and GitHub sync.
- ✓ Line-number gutter with the selected row highlighted
- ✓ *In-place node editing* - double-click a tag or value, Tab/Enter to commit, Esc to cancel
- ✓ Inter-window node drag-and-drop between separate open trees
- ✓ Multi-node drag - move several selected nodes together
- ✓ Drag-to-reorder with before / after / as-child drop indicators
- ✓ Real-time search & filter across tags, attributes, values, and content
- ✓ *Tree state restore* - expand/collapse and scroll survive a reload
- ✓ Visual-Studio-style color coding
- ✓ Options menu - toggle word-wrap and line numbers
- ✓ Keyword-aware context menus on nodes

**UML editor** - ✓ interactive class-diagram editor.
- ✓ Six relationship types - association, dependency, realization, inheritance, aggregation, composition
- ✓ Connect From Here - right-click a class, then click a target to link
- ✓ Multiplicity labels along relationship lines
- ✓ Parallel-edge offset - duplicate links auto-separate by 25px
- ✓ Attribute & method compartments - add, rename, reorder in place
- ✓ Visibility icons for public / private / protected / package
- ✓ Drag members between classes
- ✓ Import XMI / Enterprise / Gorp / custom UML into one editable graph
- ✓ SAI XML import into classes and relationships
- ✓ XAML graph projection - turn a XAML tree into a diagram
- ✓ Containment / binding / resource edges for XAML diagrams
- ✓ Auto-layout - force-directed, layered-tree, grid, and fit-to-extents
- ✓ Floating minimap with a draggable, resizable viewport rect
- ✓ Live XML side panel synced to the diagram, with row selection
- ✓ Focus subtree / context to cut visual noise
- ✓ Canvas pan by left-dragging empty space

## Design

**XAML designer** - ✓ dual-pane WPF-style visual editor (canvas and source).
- ✓ 40-plus live control renderers on the canvas
- ✓ 50-plus control palette in six auto-hide groups
- ✓ Drag-to-canvas insert with sensible defaults
- ✓ Drag-to-move and 8-handle resize
- ✓ Hierarchy tree that auto-expands to the selection
- ✓ Syntax-highlighted source with click-to-select rows
- ✓ Source row drag-to-reorder
- ✓ Properties panel - edit, add, and delete attributes live
- ✓ Color picker popup - 24-color grid plus hex
- ✓ Copy / cut / paste / duplicate with shortcuts
- ✓ Canvas pan via Shift-scroll and trackpad
- ✓ Panel persistence - scroll, widths, expansion, selection

**XAML Gorp designer** - ✓ the full XAML designer plus Gorp execution.
- ✓ Gorp palette of drag-on tiles
- ✓ One-click Execute against the backend
- ✓ Live API status (Executing → SUCCESS / Error)
- ✓ Inline result display

## Bind

**Live data binding** (XAML) - ✓ bind a design to real data and preview it.
- ✓ Binding editor with kind tabs (Binding, StaticResource, x:Static, TemplateBinding, RelativeSource, freeform)
- ✓ StaticResource autocomplete from the file's resources
- ✓ JSON data context with dotted-path resolution
- ✓ Gorp data context as a binding source
- ✓ Inline computed expressions - no external NCalc dependency
- ✓ Preview mode resolves every binding to real values on the canvas
- ✓ FallbackValue and StringFormat honored in preview

## Validate

- ◔ Schema validation - Gestalt / SAI XSD checking with error and warning callbacks
- ✓ Well-formedness check - a fast parse-only validity pass

## Operate

**Gorp equation builder** - ✓ a visual MathML equation editor.
- ✓ Eleven node types - number, variable, binary, fraction, root, negate, paren, compare, logic, if, slot
- ✓ Slot editor to choose what to insert
- ✓ Drag existing subtrees with deep clone and a cycle guard
- ✓ Auto-parenthesization on power / negate / add / subtract / multiply
- ✓ Fraction numerator / denominator drop zones
- ✓ 50-deep undo / redo
- ✓ .gorp file format - MathML plus an inputs block, round-tripped via GitHub
- ✓ Editable backend endpoint

## Assist

**AI chat** - ✓ multi-provider co-designer proxied through the worker.
- ✓ Three providers - Gemini, OpenAI GPT, Anthropic Claude
- ✓ Model dropdown per conversation
- ✓ Secure keys - none stored in the browser
- ✓ Collapsible long replies
- ✓ Copy chat as markdown
- ✓ Auto-dismissing error banner

## Planned (AI Designer)

- ○ Full WPF Grid layout engine (rows, columns, placement)
- ○ Style / DataTemplate / ControlTemplate evaluation at render time
- ○ UML XAML-aware node cards with stereotypes and badges
- ○ Explicit UML edge types (BindsTo, UsesResource, AppliesStyle, UsesTemplate)
- ○ XAML-backed UML editing from the diagram
- ○ Template & ResourceDictionary views
- ○ Generic SAI / XSD graph projection
- ○ Gorp subtree scope highlight, side drop-preview, and box-select
- ○ MathML render from XML
- ○ Whole-file Gorp validation
- ○ Drag-and-drop AI architecture from symbols and drawings
- ○ XML schema-aware autocomplete
- ○ XAML two-way source editing
- ○ Multi-file XAML projects with shared resource dictionaries
- ○ AI-assisted diagram generation
- ○ Document diff view across versions

---

# Game Designer

*Construct games, with optional AI integration. A suite of tools, not a single editor. Today: a full card / CCG builder.*

## Cards

**Card-game construction suite** - ✓ table, deck builder, and sheet slicer in one.
- ✓ Free-form table of absolute-positioned cards
- ✓ Click to flip an exposed card
- ✓ Peel a stack - click a covered card to bring it to front
- ✓ Drag to move a card or a selection
- ✓ Box-select by dragging empty space
- ✓ Additive multi-select with Ctrl/Cmd+click
- ✓ Bring-to-front
- ✓ Per-card and per-deck rotation
- ✓ Deal layouts - Klondike, Blackjack, 5-card Poker, Fan
- ✓ Shuffle a deck or pile
- ✓ Pile markers - draw, discard, custom - with shuffle, flip, label sides, reset, see-all
- ✓ Sheet-mode import - slice a sprite sheet into cards
- ✓ Live grid handles (orange offset, lime padding) and presets
- ✓ Live cell preview while slicing
- ✓ Per-cell rank / suit assignment, then confirm the deck
- ✓ Editable column / row headers
- ✓ Individual-mode import - bulk-add one image per card
- ✓ Sort by filename
- ✓ Auto-downscale and upload (512px, JPG q88)
- ✓ Per-card thumbnail grid with remove buttons
- ✓ Async sprite build - spawned cards update in place
- ✓ Editable deck name
- ✓ Back-image swatch and per-deck back textures
- ✓ Grouped Collect Deck by per-deck id
- ✓ Per-card front / back crop fields
- ✓ Save deck to desktop with a 3-card composite icon
- ✓ Drag a saved deck onto the table to load it
- ✓ Deck-icon click to deal at center
- ✓ JSON deck export
- ✓ View Extents to fit the window to all cards
- ✓ Clear-table confirm
- ✓ Last-directory memory for sheet / back / deck folders
- ✓ Deck-state snapshot restore

## Planned (Game Designer)

- ○ Per-card backs (front/back filename pairing and per-card render)
- ○ Auto-crop ladder - bounding box, 4-corner, then contour dewarp
- ○ Drag-to-reorder the import list
- ○ Transparent-PNG encode option
- ○ Deck template zones
- ○ Deck types and CCG rules
- ○ Hand zones with hidden cards
- ○ Turn and score tracking
- ○ Dice and tokens
- ○ Game board layer with snap regions
- ○ Card effect scripting with Gorp logic
- ☆ Game-construction tools beyond cards (board / token / rules)

---

# Online OS

*An online, collaborative workspace - a Drive / 365-style OS with a suite of tools for building content together.*

## Workspace

- ✓ **App launcher** - browse, open, and pin built-in apps; drag to dock or desktop
- ✓ **Notes & docs** - markdown editor with edit/view modes, search & replace, word-wrap, and sync
- ✓ **Image viewer** - read & save five formats (PNG, JPG, GIF, WebP, AVIF), format toggle, animated playback, drag-out
- ✓ **Background gallery** - browse and drag images to set the wallpaper

## Accounts & sharing

- ✓ **Account activity** - recent activity across selected accounts with cache-bypass refresh
- ✓ **Multi-account management** - switch, create, rename, delete, each as a single atomic commit
- ✓ **QR deep-link sharing** - a QR that boots straight into a shared account
- ✓ **Undeletable Global account** as a shared baseline

## Utilities

- ✓ **Performance overlay** - FPS and five memory bars; Ctrl/Cmd+M from anywhere
- ✓ **Controls reference** - a persistent keyboard / pointer cheat-sheet (Ctrl+I)
- ✓ **Bug reports** - BUG-#### reports with shared storage, image attachments, filter & sort
- ✓ **Feature requests** - REQ-#### siblings filed from any feature
- ✓ **Live log** - real-time Unity log capture with level filters, copy, and background flash
- ✓ **Screen recorder** - F11 capture with preview and gallery save

## Help & docs

- ✓ **In-context help** - an annotated screenshot per window with descriptor badges and a ? button
- ✓ **Features index** - this product map with hover previews, status filtering, and right-click to file a request or bug

## Foundations (shared plumbing)

- ✓ **Online persistence & sync** - GitHub-backed, proxied through Cloudflare, no token in the client
- ✓ Serial write queue eliminates conflicts on bulk imports
- ✓ Large-file transfer for files over 1 MB
- ✓ Atomic account folders - copy / rename / delete in one commit
- ✓ **Windowing framework** - drag, snap, resize, minimize, maximize, persist
- ✓ Edge & corner resize with custom 8-direction cursors
- ✓ Quarter / half / full-screen snapping
- ✓ State persistence - position, size, panels, scroll
- ✓ In-place text editing with custom caret / selection and word & line navigation
- ✓ Mobile on-screen keyboard path for WebGL touch
- ✓ File import - native and WebGL multi-file picker into dock and desktop
- ✓ Image decoder - PNG / JPG / GIF / WebP / AVIF with animated-GIF playback
- ✓ App registry - extension-to-app association and an Open With menu
- ✓ Desktop & dock - drag-reorder, pin, multi-import, color tint
- ✓ Wallpaper layer - set, persist, right-click the background
- ✓ Shared managers - cursor, tooltip, context-menu, modal-input
- ✓ WebGL bridges - file-drop, tab-hide save, image decode, fetch-with-timeout
- ✓ Cloudflare Worker backend gating all GitHub and Gorp traffic
- ✓ Cross-platform - any WebGL browser plus native PC / Mac / Linux / mobile builds
- ✓ Branded loading screen on boot

## Planned (Online OS)

- ○ Server-side trash / soft-delete with restore
- ○ Atomic move / rename (instead of copy-then-delete)
- ○ Write-queue persistence (localStorage outbox that replays after reload)
- ○ Conflict-merge UI for cross-session edits
- ○ Multiline in-place editing in any field
- ○ Drag-from-OS onto the desktop background
- ○ Batch-import progress UI
- ○ Animated-GIF gallery thumbnails and live wallpapers
- ○ Pinch-to-zoom on UML / XAML / Cards canvases
- ○ Receive-side QR scan (join, not just generate)
- ○ Global search across files, windows, and content
- ○ Command palette - a keyboard launcher for any action
- ○ Recent files & quick-open
- ○ Trash bin app
- ○ Settings app with themes, density, and per-app preferences
- ○ Light / dark theme switch
- ○ Window tiling presets
- ○ File browser app over the GitHub-backed tree
- ○ Tabbed windows
- ○ Keyboard shortcut customization
- ○ Export to PDF
- ○ Offline mode that queues edits and syncs later

---

# Wishlist

*Far-out, OS-grade ambitions - where NOS goes as it grows into a full collaborative operating system.*

## Real-time collaboration
- ☆ Live shared desktop - see collaborators' cursors and windows in real time
- ☆ Real-time multi-user editing like Google Docs
- ☆ Presence & cursors - avatars showing who's viewing what
- ☆ Voice & video calls over a shared workspace
- ☆ Screen sharing - broadcast a window to collaborators
- ☆ Spectator mode for design and game sessions

## Messaging & notifications
- ☆ Text messaging & DMs inside NOS
- ☆ Group channels per project
- ☆ Notifications center with history
- ☆ Activity feed timeline across accounts
- ☆ @mentions & comments on any document
- ☆ Built-in email client

## Security & identity
- ☆ User accounts & login (email and OAuth)
- ☆ Roles & permissions (owner / editor / viewer)
- ☆ End-to-end encryption at rest and in transit
- ☆ Two-factor authentication
- ☆ Single sign-on for enterprises
- ☆ Audit log of who changed what and when
- ☆ Share links with access expiry
- ☆ Admin console for org users and storage

## Platform & extensibility
- ☆ File versioning & history with restore
- ☆ App store / plugin marketplace
- ☆ Plugin SDK to build and publish windows
- ☆ Scripting & automation (macros, scheduled tasks)
- ☆ Workflow automation (if-this-then-that)
- ☆ Cross-device sync & handoff
- ☆ Mobile companion app
- ☆ Installable offline-first PWA
- ☆ Localization (multiple languages)
- ☆ Accessibility (screen-reader, keyboard-only)
- ☆ Import from Drive / Dropbox
- ☆ Backup & full-account export
- ☆ Printing support
- ☆ Clipboard manager

## More built-in apps
- ☆ Terminal / shell
- ☆ Code editor
- ☆ Spreadsheet with formulas
- ☆ Presentation / slides
- ☆ Whiteboard / canvas
- ☆ Calendar & scheduling
- ☆ Contacts / address book
- ☆ Media player
- ☆ Photo manager
- ☆ PDF viewer & annotator
- ☆ Mind-map
- ☆ Kanban / task board
- ☆ Project management
- ☆ Database / table app
- ☆ Form builder
- ☆ Map app
- ☆ Calculator
- ☆ Clock & timers

## Desktop experience
- ☆ System tray / status bar
- ☆ Multiple desktops / workspaces
- ☆ Window groups & sessions
- ☆ Full theming engine
- ☆ Wallpaper engine (animated, interactive)
- ☆ Desktop widgets
- ☆ Usage analytics dashboard

## AI everywhere
- ☆ Voice assistant
- ☆ AI agent / copilot that operates the OS
- ☆ Natural-language launch and build
- ☆ AI summaries & insights

## Games as a platform
- ☆ Marketplace for game templates
- ☆ Publish a playable game from a deck
- ☆ Real-time game multiplayer
- ☆ Achievements & profiles
- ☆ Monetization & billing
- ☆ Public status page & health
