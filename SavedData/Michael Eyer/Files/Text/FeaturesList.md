# NOS Features List

NOS is one operating system serving three purposes - **first an AI Designer, second a Game Designer, third an online OS**. This is the readable, full list of what's built and what's coming. For the interactive, filterable version see the **Features** app.

*Updated 2026-05-31*
*Features: ● complete · ◑ in progress · ○ planned · ☆ wishlist*
*Subfeatures: ☑ done · ☐ planned · ☒ declined*

---

# AI Designer

*Take an idea from structure to a running, validated, data-driven design. Spine: Model → Design → Bind → Validate → Operate.*

## Model

◑ **XML editor** - hierarchical tree editor with color coding and GitHub sync
   ☑ **Tree view** - XML document as an expand/collapse tree
   ☑ **Line-number gutter** - the selected row is highlighted
   ☑ **In-place text edit** - double-click a tag or value, Tab/Enter to commit, Esc to cancel
   ☑ **Drag & drop nodes** - move nodes within and between separate open trees
   ☑ **Multi-node drag** - move several selected nodes together
   ☑ **Drag-to-reorder** - before / after / as-child drop indicators
   ☑ **Real-time search & filter** - matches tags, attributes, values, and content
   ☑ **Right-click context menu** - per-node and keyword-aware actions
   ☑ **Copy to clipboard** - copy a tag or value to the system clipboard
   ☑ **Delete nodes** - remove a node and its children
   ☑ **Save & restore** - persist to GitHub; tree state survives a reload
   ☑ **Color coding** - Visual-Studio-style element / attribute / value colors
   ☑ **XML format** - reads and writes well-formed XML
   ☑ **Options menu** - toggle word-wrap and line numbers
   ☐ **Schema-aware autocomplete** - suggest elements and attributes from the XSD
   ☐ **MathML rendering** - show equations inline in the document
   ☐ **Document diff view** - compare two versions of a document
   ☒ **Inline XSLT transforms** - out of scope

◑ **UML editor** - interactive class-diagram editor
   ☑ **Six relationship types** - association, dependency, realization, inheritance, aggregation, composition
   ☑ **Connect From Here** - right-click a class, then click a target to link
   ☑ **Multiplicity labels** - shown along relationship lines
   ☑ **Parallel-edge offset** - duplicate links auto-separate by 25px
   ☑ **Attribute & method compartments** - add, rename, and reorder in place
   ☑ **Visibility icons** - public / private / protected / package
   ☑ **Drag & drop members** - move attributes and methods across boxes
   ☑ **In-place text edit** - rename classes and members on the canvas
   ☑ **Right-click context menu** - class, member, and relationship actions
   ☑ **Undo / redo** - step backward and forward through edits
   ☑ **Copy, paste & duplicate** - clipboard for classes and members
   ☑ **Sort** - order members and namespaces
   ☑ **Delete** - remove classes, members, or relationships
   ☑ **Save & restore** - persist the diagram and restore layout on reopen
   ☑ **Import many dialects** - XMI / Enterprise / Gorp / custom UML into one graph
   ☑ **SAI XML import** - parse SAI / Gestalt into classes and relationships
   ☑ **XAML graph projection** - turn a XAML tree into a diagram
   ☑ **Typed edges** - containment / binding / resource edges for XAML diagrams
   ☑ **Namespaces panel** - group and highlight model namespaces
   ☑ **Auto-layout** - force-directed, layered-tree, grid, and fit-to-extents
   ☑ **Floating minimap** - draggable, resizable viewport rect
   ☑ **Live XML side panel** - synced to the diagram, with row selection
   ☑ **Focus subtree / context** - isolate part of the graph to cut visual noise
   ☑ **Canvas pan** - left-drag empty space to move the view
   ☑ **Box drag-select** - marquee-select multiple classes
   ☐ **XAML-aware node cards** - multi-section cards with stereotypes and badges
   ☐ **Explicit edge types** - BindsTo, UsesResource, AppliesStyle, UsesTemplate
   ☐ **XAML-backed editing** - rename and edit from the diagram
   ☐ **Template & ResourceDictionary views** - browse control and data templates
   ☐ **Generic SAI / XSD projection** - any schema into a diagram
   ☐ **Drag-and-drop AI architecture** - compose systems from symbols and drawings
   ☒ **Sequence & activity diagrams** - out of scope; class diagrams only

## Design

◑ **XAML designer** - dual-pane WPF-style visual editor (canvas and source)
   ☑ **40-plus control renderers** - drawn live on the canvas
   ☑ **50-plus control palette** - an auto-hide strip in six groups
   ☑ **Drag & drop insert** - drop a palette tile to add an element
   ☑ **Drag-to-move & 8-handle resize** - direct-manipulate elements on the canvas
   ☑ **Hierarchy tree** - auto-expands to the selection
   ☑ **Syntax-highlighted source** - click a row to select
   ☑ **Source row drag-to-reorder** - reorder elements from the source pane
   ☑ **Properties panel** - edit, add, and delete attributes live
   ☑ **Text edit boxes** - inline property fields
   ☑ **Color picker popup** - 24-color grid plus hex entry
   ☑ **Copy / cut / paste / duplicate** - node clipboard with shortcuts
   ☑ **Delete elements** - remove the selected element
   ☑ **Namespace-aware attributes** - preserves xmlns prefixes like x:
   ☑ **XAML / XML format** - reads and writes valid XAML
   ☑ **Save & restore** - persist source and restore panels on reopen
   ☑ **Canvas pan** - Shift-scroll and two-finger trackpad
   ☑ **Panel persistence** - scroll, widths, expansion, and selection restore
   ☐ **Full WPF Grid layout engine** - rows, columns, and placement
   ☐ **Style / DataTemplate / ControlTemplate** - evaluated at render time
   ☐ **Two-way source editing** - type in source and update the canvas
   ☐ **Multi-file projects** - shared resource dictionaries across documents
   ☒ **Animation timeline** - out of scope; WPF animations not modeled

● **XAML Gorp designer** - the full XAML designer plus Gorp execution
   ☑ **Gorp palette** - drag Gorp-specific tiles onto the canvas
   ☑ **One-click Execute** - run the design's Gorp logic against the backend
   ☑ **Live API status** - Executing then SUCCESS or Error
   ☑ **Result display** - shows the backend result inline

## Bind

● **Live data binding** (XAML) - bind a design to real data and preview it
   ☑ **Binding editor** - kind tabs for Binding, StaticResource, x:Static, TemplateBinding, RelativeSource, freeform
   ☑ **StaticResource autocomplete** - keys from the file's own resources
   ☑ **JSON data context** - paste a ViewModel with dotted-path resolution
   ☑ **Gorp data context** - apply Gorp data as the binding source
   ☑ **Inline computed expressions** - no external NCalc dependency
   ☑ **Preview mode** - resolves every binding to real values on the canvas
   ☑ **FallbackValue & StringFormat** - both honored in preview

## Validate

◑ **Validation** - check documents before deeper processing
   ☑ **Well-formedness check** - a fast parse-only validity pass
   ☐ **Schema validation** - Gestalt / SAI XSD checking with error and warning callbacks (in beta)
   ☐ **Whole-file Gorp validation** - wrapper schema plus schema / data reconciliation

## Operate

◑ **Gorp equation builder** - a visual MathML equation editor
   ☑ **Eleven node types** - number, variable, binary, fraction, root, negate, paren, compare, logic, if, slot
   ☑ **Slot editor** - choose the node type to insert
   ☑ **Drag & drop subtrees** - re-parent any sub-expression, deep clone with a cycle guard
   ☑ **In-place text edit** - double-click a variable or literal to change it
   ☑ **Auto-parenthesization** - on power / negate / add / subtract / multiply
   ☑ **Fraction drop zones** - numerator and denominator targets
   ☑ **Right-click context menu** - node and canvas actions
   ☑ **Undo / redo** - 50-deep history (Ctrl+Z, Ctrl+Shift+Z)
   ☑ **Delete & duplicate nodes** - remove or clone a subtree
   ☑ **Namespaces** - algorithm and model namespaces
   ☑ **Save & restore** - persist the .gorp file and restore on reopen
   ☑ **Editable backend endpoint** - point the window at any Gorp server
   ☐ **Subtree scope highlight** - dashed outline on a wrap target's descendants
   ☐ **Side drop-preview panel** - live preview of a pending drop result
   ☐ **Box-select** - marquee-select multiple nodes on the canvas

## Assist

◑ **AI chat** - multi-provider co-designer proxied through the worker
   ☑ **Three providers** - Gemini, OpenAI GPT, Anthropic Claude
   ☑ **Model dropdown** - pick the provider and model per conversation
   ☑ **Secure keys** - none stored in the browser
   ☑ **Text input box** - multi-line composer, Enter to send
   ☑ **Image attachments** - attach and remove images for the prompt
   ☑ **Collapsible long replies** - expand lengthy answers on demand
   ☑ **Copy to clipboard** - copy the whole conversation as markdown
   ☑ **Save & restore conversation** - sessions persist to GitHub
   ☑ **Error banner** - billing and quota errors auto-dismiss
   ☐ **AI-assisted diagram generation** - describe a model and get a UML or XAML draft

---

# Game Designer

*Construct games, with optional AI integration. A suite of tools, not a single editor. Today: a full card / CCG builder.*

## Cards

◑ **Card-game construction suite** - table, deck builder, and sheet slicer in one
   ☑ **Free-form table** - absolute-positioned cards you can place anywhere
   ☑ **Click to flip** - flip an exposed card face up or down
   ☑ **Peel a stack** - click a covered card to bring it to front
   ☑ **Drag & drop** - move a card or a whole selection
   ☑ **Box-select** - drag empty space to marquee-select
   ☑ **Additive multi-select** - Ctrl/Cmd+click to add or remove
   ☑ **Bring-to-front** - raise a card above the stack
   ☑ **Rotation** - rotate a single card or a whole deck
   ☑ **Right-click menus** - card, stack, pile, and table actions
   ☑ **In-place text edit** - rename the deck in place
   ☑ **Deal layouts** - Klondike, Blackjack, 5-card Poker, Fan
   ☑ **Shuffle** - randomize a deck or pile
   ☑ **Pile markers** - draw, discard, custom, with shuffle, flip, label sides, reset, see-all
   ☑ **Sheet-mode import** - slice a sprite sheet into cards
   ☑ **Live grid handles** - orange offset, lime padding, and presets
   ☑ **Live cell preview** - see the card under the cursor while slicing
   ☑ **Per-cell assignment** - set rank / suit, then confirm the deck
   ☑ **Editable headers** - name columns and rows
   ☑ **Individual-mode import** - bulk-add one image per card
   ☑ **Sort by filename** - order an imported batch naturally
   ☑ **Image format support** - decode card art (PNG / JPG / GIF / WebP / AVIF)
   ☑ **Auto-downscale & upload** - 512px long side, JPG q88
   ☑ **Thumbnail grid** - per-card thumbnails with remove buttons
   ☑ **Async sprite build** - spawned cards update in place
   ☑ **Back-image swatch** - per-deck back textures via a drop target
   ☑ **Grouped Collect Deck** - gather a deck by its per-deck id
   ☑ **Crop fields** - per-card front and back crop rectangles
   ☑ **Save deck to desktop** - exports with a 3-card composite icon
   ☑ **Drag a deck onto the table** - drop a saved deck to load it
   ☑ **Deck-icon click to deal** - open and deal at center
   ☑ **JSON deck export** - download the deck as JSON
   ☑ **View Extents** - fit the window to all cards
   ☑ **Clear-table confirm** - guard against accidental wipes
   ☑ **Last-directory memory** - remembers sheet / back / deck folders
   ☑ **Save & restore** - deck-state snapshot restores a picker-loaded deck
   ☐ **Per-card backs** - front/back filename pairing and per-card render
   ☐ **Auto-crop (bounding box)** - trim a card to its background box
   ☐ **Auto-crop (4-corner)** - manual perspective corners for a crooked scan
   ☐ **Drag-to-reorder import list** - reorder cards in individual mode
   ☐ **Transparent-PNG encode** - keep alpha instead of JPG
   ☐ **Deck template zones** - named layout zones for play areas
   ☐ **Deck types & CCG rules** - a richer rules layer
   ☐ **Hand zones** - per-player private hands with hidden cards
   ☐ **Turn & score tracking** - counters and turn order
   ☐ **Dice & tokens** - add dice, counters, and meeples
   ☐ **Game board layer** - a board image with snap regions
   ☐ **Card effect scripting** - define effects with Gorp logic
   ☒ **Auto-crop (contour dewarp)** - out of scope for first ship

○ **Tools beyond cards** - board, token, and rules construction

---

# Online OS

*An online, collaborative workspace - a Drive / 365-style OS with a suite of tools for building content together.*

## Workspace

● **App launcher** - browse, open, and pin built-in apps
   ☑ **Drag-to-dock pin** - pin an app permanently to the dock
   ☑ **Drag-to-desktop shortcut** - drop an app onto the desktop
   ☑ **Click to open or restore** - a single click launches or restores

● **Dock** - the app bar at the bottom of the screen
   ☑ **Launch icons** - click an icon to open or restore its app
   ☑ **Open / minimized indicators** - shows which apps are running
   ☑ **Drag-to-reorder** - reorganize dock icons
   ☑ **Pin / unpin** - keep an app on the dock or remove it
   ☑ **Right-click menu** - Open, Open with…, Pin, Save, Rename, Delete, Remove
   ☑ **Open with another app** - route a file to a different app
   ☑ **Ctrl+click duplicate** - clone an app instance
   ☑ **Import file** - add a file to the dock from the picker
   ☑ **Hide / show all windows** - one button minimizes or restores every window

● **Desktop** - the icon workspace and dock
   ☑ **Icon grid** - drag-to-rearrange app and file shortcuts
   ☑ **Color tint** - recolor icons via a color wheel
   ☑ **Multi-import** - import several files at once with scatter placement
   ☑ **Pin / unpin to dock** - drag icons between desktop and dock
   ☑ **Right-click menu** - import, wallpaper, and settings
   ☑ **Wallpaper** - set and persist a background image
   ☑ **Icon support** - async-loaded icons with per-instance overrides

● **Notes & docs** - a markdown editor with GitHub sync
   ☑ **Full-text editor box** - raw markdown editing
   ☑ **Edit / view modes** - raw markdown or rendered rich text
   ☑ **Markdown rendering** - headings, bold, italic, bullets, rules
   ☑ **Search & replace** - in-document find-and-replace bar
   ☑ **Word-wrap toggle** - wrap or horizontally scroll long lines
   ☑ **Save & restore** - loads remote, falls back to a bundled seed
   ☑ **Markdown links** - render and follow inline links

● **Image viewer** - display, scale, save, and export images
   ☑ **Image format support** - read and save PNG, JPG, GIF, WebP, AVIF
   ☑ **Format toggle** - cycle the save format from the title bar
   ☑ **Animated playback** - animated GIFs play in the viewer
   ☑ **Drag & drop** - drag the image to the dock, desktop, or a card table
   ☑ **Save & export** - to GitHub or download
   ☑ **Async fetch & restore** - re-fetches its image after a restart

◑ **Background gallery** - browse and apply desktop wallpapers
   ☑ **Drag-to-wallpaper** - drop a thumbnail onto the desktop
   ☑ **Hover tooltips** - name and resolution on each thumbnail
   ☐ **Animated thumbnails & wallpapers** - animated previews and live backgrounds

## Accounts & sharing

◑ **Accounts** - multi-account management over GitHub storage
   ☑ **Account activity** - recent activity across selected accounts with cache-bypass refresh
   ☑ **Switch / create / rename / delete** - each as a single atomic commit
   ☑ **QR deep-link sharing** - a QR that boots straight into a shared account
   ☑ **Per-account storage** - every account is its own GitHub folder
   ☑ **Undeletable Global account** - a shared baseline that always exists
   ☐ **Receive-side QR scan** - join by scanning, not only generating

## Utilities

● **Performance overlay** - real-time FPS and memory stats
   ☑ **FPS bar** - rolling average with color thresholds
   ☑ **Five memory bars** - heap, allocated, reserved, texture, GFX
   ☑ **Toggle from anywhere** - Ctrl/Cmd+M

● **Controls reference** - a persistent keyboard and pointer cheat-sheet (Ctrl+I)

● **Bug & request tracker** - file and track issues against features
   ☑ **BUG-#### reports** - shared cross-account storage
   ☑ **Text edit boxes** - edit title, description, and notes in place
   ☑ **Image attachments** - attach screenshots to any report
   ☑ **Filter & sort** - narrow by status and reorder
   ☑ **Delete** - remove a report with confirm
   ☑ **Feature requests** - REQ-#### siblings filed from any feature
   ☑ **Feature cross-reference** - each report links to the feature it was filed against

● **Live log & debugging** - real-time Unity log capture
   ☑ **Level filters** - info / warning / error with collapse
   ☑ **Copy & clear** - copy the log or wipe it
   ☑ **Background flash** - title flashes on new logs when unfocused

● **Screen recorder** - F11 capture with preview and gallery save

## Help & docs

● **In-context help** - an annotated screenshot per window
   ☑ **Descriptor badges** - labelled regions with hover tooltips and connectors
   ☑ **Help button everywhere** - the ? button opens that window's help

● **Features index** - this product map, as the interactive Features app
   ☑ **Hover media previews** - a window's screenshot from its chip
   ☑ **Status filtering** - by complete, beta, planned, wishlist
   ☑ **File a request or bug** - right-click any entry
   ☑ **Live counts & dates** - per-tab entry counts and updated date
   ☑ **Window links** - each entry opens its window's in-context help
   ☑ **Cross-references** - bugs and requests link back to the exact feature id

## Foundations

◑ **Online persistence & sync** - the GitHub backend, proxied through Cloudflare, no token in the client
   ☑ **Serial write queue** - eliminates conflicts on bulk imports
   ☑ **Large-file transfer** - reads and writes files over 1 MB
   ☑ **Atomic account folders** - copy / rename / delete in one commit
   ☑ **Save & restore** - every window persists and restores its content and state
   ☑ **Auto-save** - debounced layout save plus save on focus loss and tab hide
   ☑ **Delete from GitHub** - title-bar action to clear a saved copy
   ☑ **Versioning** - build-version label, with GitHub commit history as file history
   ☑ **Activity tracking** - records sessions, saves, renames, and deletes for the activity view
   ☐ **Server-side trash / soft-delete** - delete with restore
   ☐ **Atomic move / rename** - instead of copy-then-delete
   ☐ **Write-queue persistence** - a localStorage outbox that replays after reload
   ☐ **Conflict-merge UI** - reconcile cross-session edits
   ☐ **Offline mode** - queue edits and sync later

◑ **Files** - the file pipeline behind every app
   ☑ **File picker** - native and WebGL multi-file open
   ☑ **File import** - into the dock and the desktop
   ☑ **Drag-from-OS** - drop files onto a window
   ☑ **Open With** - route a file to the right app by extension
   ☑ **Save / rename / delete** - per-file actions from the title bar
   ☑ **Drop confirmation** - confirm a file or URL before it commits to GitHub
   ☑ **Image formats** - PNG / JPG / GIF / WebP / AVIF decode across the UI
   ☑ **Namespaced paths** - user / folder / file paths keep each account's files separate
   ☑ **File organization** - per-app save folders (Text, Xml, Images, and more)
   ☐ **File browser** - browse the GitHub-backed tree
   ☐ **Conflict resolution** - handle a name collision instead of overwriting

● **Dialogs & popups** - the shared modal and panel toolkit
   ☑ **Confirm dialog** - title, message, and a confirm action (e.g. delete)
   ☑ **Modal text input** - a reusable single-field prompt
   ☑ **Rename dialog** - rename a file with a live path preview
   ☑ **Popup window** - a reusable floating dialog template
   ☑ **Context menus** - right-click menus with submenus and disabled items
   ☑ **Split panes** - draggable dividers between panels
   ☑ **Color picker** - 24-color grid plus hex entry
   ☑ **Toasts** - brief, auto-fading status messages

● **Buttons & controls** - the shared control set
   ☑ **Title-bar buttons** - close, minimize, maximize, help, and per-window actions
   ☑ **Hover states** - consistent button hover and press feedback
   ☑ **Icon buttons** - texture-backed buttons with a glyph fallback
   ☑ **Segmented toggles** - multi-option switches (e.g. card source mode)
   ☑ **Tooltips** - sticky, delayed tooltips on controls

◑ **Windowing framework (WindowBase)** - the shared window support under every window
   ☑ **Close / minimize / maximize** - standard title-bar controls
   ☑ **Move & bring-to-front** - drag the title bar; click to focus
   ☑ **Edge & corner resize** - custom 8-direction cursors
   ☑ **Screen snapping** - quarter, half, and full-screen
   ☑ **State persistence** - position, size, panels, scroll
   ☑ **In-place text editing** - custom caret / selection with word and line navigation
   ☑ **Right-click title menu** - Save, Rename, Delete from GitHub
   ☑ **Help button** - opens this window's in-context help
   ☑ **Mobile keyboard path** - on-screen keyboard for WebGL touch
   ☑ **Minimize / restore all** - Esc minimizes or restores every window
   ☐ **Multiline in-place editing** - in any field
   ☐ **Pinch-to-zoom canvases** - on UML / XAML / Cards
   ☐ **Tabbed windows** - group documents into tabs
   ☐ **Window tiling presets** - snap layouts for several windows

● **Platform plumbing** - the shared services under every window
   ☑ **Image decoder** - PNG / JPG / GIF / WebP / AVIF with animated playback
   ☑ **App registry** - extension-to-app association and an Open With menu
   ☑ **Icon support** - async-loaded app and file icons with per-instance overrides
   ☑ **Desktop & dock** - drag-reorder, pin, multi-import, color tint
   ☑ **Wallpaper layer** - set, persist, right-click the background
   ☑ **Cursor manager** - 8-direction gradient resize cursors
   ☑ **WebGL bridges** - file-drop, tab-hide save, image decode, fetch-with-timeout
   ☑ **Cloudflare Worker backend** - gates all GitHub and Gorp traffic
   ☑ **Cross-platform** - any WebGL browser plus native PC / Mac / Linux / mobile builds
   ☑ **Branded loading screen** - a fade-in splash on boot

## Planned apps

○ **Global search** - find files, windows, and content across the OS
○ **Command palette** - a keyboard launcher for any action
○ **File browser** - browse the GitHub-backed file tree
○ **Trash bin** - a desktop trash with restore
○ **Settings app** - themes, density, and per-app preferences
○ **Recent files & quick-open** - jump back to recent documents
○ **Theme switch** - light / dark / high-contrast
○ **Keyboard shortcut customization** - rebind global keys
○ **Export to PDF** - export any document
○ **Drag-from-OS onto desktop** - drop files straight on the background

---

# Wishlist

*Far-out, OS-grade ambitions - where NOS goes as it grows into a full collaborative operating system.*

## Real-time collaboration
☆ **Live shared desktop** - see collaborators' cursors and windows in real time
☆ **Real-time multi-user editing** - simultaneous editing like Google Docs
☆ **Presence & cursors** - avatars showing who's viewing what
☆ **Voice & video calls** - over a shared workspace
☆ **Screen sharing** - broadcast a window to collaborators
☆ **Spectator mode** - watch design and game sessions

## Messaging & notifications
☆ **Text messaging & DMs** - message other users inside NOS
☆ **Group channels** - topic chat rooms per project
☆ **Notifications center** - a bell with notification history
☆ **Activity feed** - a timeline of changes across accounts
☆ **Mentions & comments** - on any document
☆ **Email client** - send and receive inside the OS

## Security & identity
☆ **User accounts & login** - email and OAuth
☆ **Roles & permissions** - owner / editor / viewer
☆ **End-to-end encryption** - at rest and in transit
☆ **Two-factor authentication** - secure sign-in
☆ **Single sign-on** - enterprise identity providers
☆ **Audit log** - who changed what and when
☆ **Share links** - with access expiry
☆ **Admin console** - manage org users and storage

## Platform & extensibility
☆ **File versioning & history** - browse and restore versions
☆ **App store / plugin marketplace** - install third-party apps
☆ **Plugin SDK** - build and publish your own windows
☆ **Scripting & automation** - macros and scheduled tasks
☆ **Workflow automation** - if-this-then-that triggers
☆ **Cross-device sync & handoff** - continue on another device
☆ **Mobile companion app** - native iOS and Android
☆ **Installable PWA** - offline-first desktop app
☆ **Localization** - multiple UI languages
☆ **Accessibility** - screen-reader and keyboard-only
☆ **Import from Drive / Dropbox** - bring in external files
☆ **Backup & full export** - one-click account export
☆ **Printing support** - print to a real printer
☆ **Clipboard manager** - a history of copied items

## More built-in apps
☆ **Terminal / shell** - a command line inside NOS
☆ **Code editor** - syntax-aware multi-language editing
☆ **Spreadsheet** - a grid with formulas
☆ **Presentation** - build and present slides
☆ **Whiteboard / canvas** - freeform sketching and diagrams
☆ **Calendar & scheduling** - events and reminders
☆ **Contacts** - an address book
☆ **Media player** - play audio and video
☆ **Photo manager** - albums and tagging
☆ **PDF viewer & annotator** - read and mark up PDFs
☆ **Mind-map** - branch ideas visually
☆ **Kanban / task board** - track work in columns
☆ **Project management** - tasks, milestones, timelines
☆ **Database / table app** - records with multiple views
☆ **Form builder** - build and collect responses
☆ **Map app** - geographic data and pins
☆ **Calculator** - standard and scientific
☆ **Clock & timers** - world clock, stopwatch, alarms

## Desktop experience
☆ **System tray / status bar** - clock, network, notifications
☆ **Multiple desktops** - switch between workspace sets
☆ **Window groups & sessions** - save and reopen window sets
☆ **Full theming engine** - dark, light, high-contrast
☆ **Wallpaper engine** - animated and interactive wallpapers
☆ **Desktop widgets** - clocks, notes, and stats on the background
☆ **Usage analytics dashboard** - insights into your workspace

## AI everywhere
☆ **Voice assistant** - control NOS by voice
☆ **AI agent / copilot** - operates the OS for you
☆ **Natural-language launch** - open or build by typing a request
☆ **AI summaries & insights** - summarize documents and activity

## Games as a platform
☆ **Game template marketplace** - share and sell card and game packs
☆ **Publish a playable game** - share a build from a deck
☆ **Real-time game multiplayer** - play live with others
☆ **Achievements & profiles** - user profiles with badges
☆ **Monetization & billing** - subscriptions and paid tiers
☆ **Status page & health** - public uptime
