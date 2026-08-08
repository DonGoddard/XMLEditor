# NOS Features

NOS is one operating system serving three purposes - first an AI Designer, second a Game Designer, third an online OS. Every tab below is its own value story; chips link to the window that delivers a feature, dots show status. {meta: updated=2026-08-08}

---

## AI Design
{meta: updated=2026-05-31}

*Model systems for AI: take an idea from structure to a running, validated, data-driven design. Spine: Model → Design → Bind → Validate → Operate.*

### Model
- [[XmlWindow]] **Author & inspect XML** - hierarchical tree editor with color coding and GitHub sync. {status:Stable} {media:XmlWindow} {id:feat-001}
- **Line-number gutter** - sequential line numbers with the selected row highlighted. {status:Stable} {id:feat-002}
- **In-place node editing** - double-click a tag or value, Tab/Enter to commit, Esc to cancel. {status:Stable} {id:feat-003}
- **Inter-window node drag-and-drop** - drag XML nodes between separate open trees. {status:Stable} {id:feat-004}
- **Multi-node drag** - move several selected nodes together. {status:Stable} {id:feat-005}
- **Drag-to-reorder** - before / after / as-child drop indicators while dragging. {status:Stable} {id:feat-006}
- **Real-time search & filter** - matches tag names, attribute keys, values, and leaf content. {status:Stable} {id:feat-007}
- **Tree state restore** - expand/collapse state and scroll survive a reload. {status:Stable} {id:feat-008}
- **Visual-Studio color coding** - familiar element / attribute / value coloring. {status:Stable} {id:feat-009}
- **Options menu** - toggle word-wrap and the line-number gutter. {status:Stable} {id:feat-010}
- **Context menus on nodes** - add child, delete, and keyword-aware actions. {status:Stable} {id:feat-011}
- [[UmlWindow]] **Model a domain visually** - interactive UML class-diagram editor. {status:Stable} {media:UmlWindow} {id:feat-012}
- **Six relationship types** - association, dependency, realization, inheritance, aggregation, composition. {status:Stable} {id:feat-013}
- **Connect From Here** - right-click a class then click a target to draw a relationship. {status:Stable} {id:feat-014}
- **Multiplicity labels** - 1, 0..*, and more along relationship lines. {status:Stable} {id:feat-015}
- **Parallel-edge offset** - duplicate links between two classes auto-separate by 25px. {status:Stable} {id:feat-016}
- **Attribute & method compartments** - add, rename, and reorder members in place. {status:Stable} {id:feat-017}
- **Visibility icons** - plus, minus, hash, and tilde for public/private/protected/package. {status:Stable} {id:feat-018}
- **Drag members between classes** - move attributes and methods across boxes. {status:Stable} {id:feat-019}
- **Import XMI / Enterprise / Gorp / custom UML** - many dialects parsed into one editable graph. {status:Stable} {id:feat-020}
- **SAI XML import** - parse SAI / Gestalt files into classes and relationships. {status:Stable} {id:feat-021}
- **XAML graph projection** - turn a XAML tree into a diagram. {status:Stable} {id:feat-022}
- **Containment / binding / resource edges** - typed edges for XAML-derived diagrams. {status:Stable} {id:feat-023}
- **Force-directed layout** - Fruchterman-Reingold auto-arrangement. {status:Stable} {id:feat-024}
- **Layered-tree layout** - BFS hierarchy arrangement. {status:Stable} {id:feat-025}
- **Grid layout** - snap classes onto a regular grid. {status:Stable} {id:feat-026}
- **Fit-to-extents** - frame every box in view. {status:Stable} {id:feat-027}
- **Floating minimap** - color-matched overview of the whole diagram. {status:Stable} {id:feat-028}
- **Minimap viewport drag & resize** - pan and 8-direction-resize the viewport rect. {status:Stable} {id:feat-029}
- **Live XML side panel** - split-pane source synced to the diagram. {status:Stable} {id:feat-030}
- **Panel row selection & scroll** - click a source row to jump to that element. {status:Stable} {id:feat-031}
- **Focus subtree / context** - isolate part of the graph to cut visual noise. {status:Stable} {id:feat-032}
- **Canvas pan** - left-drag empty space to move the view. {status:Stable} {id:feat-033}

### Design
- [[XamlWindow]] **Design UI like WPF** - dual-pane visual XAML designer (canvas and source). {status:Stable} {media:XamlWindow} {id:feat-034}
- **40-plus live control renderers** - buttons, panels, text, and shapes drawn on the canvas. {status:Stable} {id:feat-035}
- **50-plus control palette** - an auto-hide strip grouped into six categories. {status:Stable} {id:feat-036}
- **Drag-to-canvas insert** - drop a palette tile to add an element with sensible defaults. {status:Stable} {id:feat-037}
- **Drag-to-move** - reposition elements via Canvas.Left / Top. {status:Stable} {id:feat-038}
- **8-handle resize** - corner and edge resize with a minimum-size clamp. {status:Stable} {id:feat-039}
- **Hierarchy tree** - collapsible element tree that auto-expands to the selection. {status:Stable} {id:feat-040}
- **Syntax-highlighted source** - five-color tokenizer, click a row to select. {status:Stable} {id:feat-041}
- **Source row drag-to-reorder** - reorder elements from the source pane with a drop indicator. {status:Stable} {id:feat-042}
- **Properties panel** - edit, add, and delete any attribute live. {status:Stable} {id:feat-043}
- **Color picker popup** - 24-color grid plus hex entry, applied straight to properties. {status:Stable} {id:feat-044}
- **Copy / cut / paste / duplicate** - node-level clipboard with keyboard shortcuts. {status:Stable} {id:feat-045}
- **Canvas pan** - Shift-scroll and two-finger trackpad panning. {status:Stable} {id:feat-046}
- **Panel persistence** - scroll, widths, expansion, and selection all restore. {status:Stable} {id:feat-047}
- [[XamlGorpWindow]] **Gorp-flavored designer** - the full XAML designer plus Gorp execution. {status:Stable} {id:feat-048}
- **Gorp palette** - drag Gorp-specific tiles onto the canvas. {status:Stable} {id:feat-049}
- **One-click Execute** - run the design's Gorp logic against the backend. {status:Stable} {id:feat-050}
- **Live API status** - Executing then SUCCESS or Error indicator. {status:Stable} {id:feat-051}
- **Result display** - shows the backend computation result inline. {status:Stable} {id:feat-052}

### Bind
- [[XamlWindow]] **Live data binding** - binding pills, a data context, and a live preview. {status:Stable} {id:feat-053}
- **Binding editor** - kind tabs for Binding, StaticResource, x:Static, TemplateBinding, RelativeSource, and freeform. {status:Stable} {id:feat-054}
- **StaticResource autocomplete** - keys gathered from the file's own resources. {status:Stable} {id:feat-055}
- **JSON data context** - paste a ViewModel with dotted-path resolution. {status:Stable} {id:feat-056}
- **Gorp data context** - apply Gorp data as the binding source. {status:Stable} {id:feat-057}
- **Inline computed expressions** - evaluate computed fields with no external NCalc dependency. {status:Stable} {id:feat-058}
- **Preview mode** - resolve every binding expression to real values on the canvas. {status:Stable} {id:feat-059}
- **FallbackValue & StringFormat** - both honored during preview. {status:Stable} {id:feat-060}

### Validate
- [[XmlWindow]] **Schema validation** - Gestalt / SAI XSD checking with error and warning callbacks. {status:Beta} {id:feat-061}
- **Well-formedness check** - fast parse-only validity pass before deeper validation. {status:Stable} {id:feat-062}

### Operate
- [[GorpEquationWindow]] **Build math & logic** - a visual MathML equation builder. {status:Stable} {media:GorpEquationWindow} {id:feat-063}
- **Eleven node types** - number, variable, binary, fraction, root, negate, paren, compare, logic, if, and slot. {status:Stable} {id:feat-064}
- **Slot editor** - click a slot to choose the node type to insert. {status:Stable} {id:feat-065}
- **Drag existing subtrees** - re-parent any sub-expression with a deep clone. {status:Stable} {id:feat-066}
- **Cycle guard** - prevents dragging a node into its own subtree. {status:Stable} {id:feat-067}
- **Auto-parenthesization** - wraps on power, negate, add, subtract, and multiply as needed. {status:Stable} {id:feat-068}
- **Fraction zone split** - numerator and denominator drop zones with labels. {status:Stable} {id:feat-069}
- **50-deep undo / redo** - Ctrl+Z and Ctrl+Shift+Z across every edit. {status:Stable} {id:feat-070}
- **.gorp file format** - MathML plus an inputs block, round-tripped through GitHub. {status:Stable} {id:feat-071}
- **Editable backend endpoint** - point the window at any Gorp server. {status:Stable} {id:feat-072}

### Assist
- [[ChatWindow]] **AI co-designer** - multi-provider chat proxied through the worker. {status:Stable} {media:ChatWindow} {id:feat-073}
- **Three providers** - Gemini, OpenAI GPT, and Anthropic Claude. {status:Stable} {id:feat-074}
- **Model dropdown** - pick the provider and model per conversation. {status:Stable} {id:feat-075}
- **Secure keys** - proxied via Cloudflare, none stored in the browser. {status:Stable} {id:feat-076}
- **Collapsible long replies** - expand lengthy AI answers on demand. {status:Stable} {id:feat-077}
- **Copy chat as markdown** - copy the whole conversation with model labels. {status:Stable} {id:feat-078}
- **Error banner** - billing and quota errors surface, then auto-dismiss. {status:Stable} {id:feat-079}

### Next
- [[XamlWindow]] **Full WPF Grid layout engine** - real rows, columns, and Grid.Row / Column placement. {status:Planned} {id:feat-080}
- [[XamlWindow]] **Style / DataTemplate / ControlTemplate evaluation** - apply them at render time. {status:Planned} {id:feat-081}
- [[UmlWindow]] **XAML-aware node cards** - multi-section cards with stereotypes and badges. {status:Planned} {id:feat-082}
- [[UmlWindow]] **Explicit edge types** - BindsTo, UsesResource, AppliesStyle, UsesTemplate. {status:Planned} {id:feat-083}
- [[UmlWindow]] **XAML-backed editing** - rename, add/remove children, and change properties from the diagram. {status:Planned} {id:feat-084}
- [[UmlWindow]] **Template & ResourceDictionary views** - browse control and data templates. {status:Planned} {id:feat-085}
- [[UmlWindow]] **Generic SAI / XSD graph projection** - any schema turned into a diagram. {status:Planned} {id:feat-086}
- [[GorpEquationWindow]] **Subtree scope highlight** - dashed outline on a wrap target's descendants. {status:Planned} {id:feat-087}
- [[GorpEquationWindow]] **Side drop-preview panel** - live preview of a pending drop result. {status:Planned} {id:feat-088}
- [[GorpEquationWindow]] **Box-select** - marquee-select multiple nodes on the canvas. {status:Planned} {id:feat-089}
- **MathML render from XML** - display equations inline in XML and XAML. {status:Planned} {id:feat-090}
- **Whole-file Gorp validation** - a wrapper schema plus schema / data reconciliation. {status:Planned} {id:feat-091}
- **Drag-and-drop AI architecture** - compose systems from symbols and drawings. {status:Planned} {id:feat-092}
- [[XmlWindow]] **Schema-aware autocomplete** - suggest elements and attributes from the XSD. {status:Planned} {id:feat-093}
- [[XamlWindow]] **Two-way source editing** - type in the source pane and see the canvas update. {status:Planned} {id:feat-094}
- [[XamlWindow]] **Multi-file XAML project** - resource dictionaries shared across documents. {status:Planned} {id:feat-095}
- [[ChatWindow]] **AI-assisted diagram generation** - describe a model and get a UML or XAML draft. {status:Planned} {id:feat-096}
- **Document diff view** - compare two versions of an XML, UML, or XAML doc. {status:Planned} {id:feat-097}

---

## Game Design
{meta: updated=2026-05-31}

*Construct games, with optional AI integration. A suite of tools, not a single editor. Today: a full card / CCG builder.*

### Cards
- [[CardsWindow]] **Card-game construction suite** - table, deck builder, and sheet slicer in one. {status:Stable} {media:CardsWindow} {id:feat-098}
- **Free-form table** - absolute-positioned cards you can place anywhere. {status:Stable} {id:feat-099}
- **Click to flip** - flip an exposed card face up or down. {status:Stable} {id:feat-100}
- **Peel a stack** - click a covered card to bring it to the front. {status:Stable} {id:feat-101}
- **Drag to move** - reposition a card or a whole selection. {status:Stable} {id:feat-102}
- **Box-select** - drag empty space to marquee-select cards. {status:Stable} {id:feat-103}
- **Additive multi-select** - Ctrl/Cmd+click to add or remove from a selection. {status:Stable} {id:feat-104}
- **Bring-to-front** - raise a card above the stack. {status:Stable} {id:feat-105}
- **Per-card rotation** - rotate a single card left or right. {status:Stable} {id:feat-106}
- **Per-deck rotation** - rotate an entire deck together. {status:Stable} {id:feat-107}
- **Deal layouts** - Klondike, Blackjack, 5-card Poker, and Fan. {status:Stable} {id:feat-108}
- **Shuffle** - randomize a deck or a pile. {status:Stable} {id:feat-109}
- **Pile markers** - draw, discard, and custom piles. {status:Stable} {id:feat-110}
- **Pile actions** - shuffle, flip, label sides, reset, and see-all. {status:Stable} {id:feat-111}
- **Sheet-mode import** - slice a printed sprite sheet into individual cards. {status:Stable} {id:feat-112}
- **Live grid handles** - orange offset handles and lime padding handles. {status:Stable} {id:feat-113}
- **Grid presets** - common sheet layouts in a single click. {status:Stable} {id:feat-114}
- **Live cell preview** - see the card under the cursor while slicing. {status:Stable} {id:feat-115}
- **Per-cell assignment** - set rank and suit per cell, then confirm the deck. {status:Stable} {id:feat-116}
- **Editable headers** - name columns and rows in the sheet editor. {status:Stable} {id:feat-117}
- **Individual-mode import** - bulk-add card images one per file. {status:Stable} {id:feat-118}
- **Sort by filename** - order an imported batch naturally. {status:Stable} {id:feat-119}
- **Auto-downscale & upload** - 512px long side, JPG q88, pushed to GitHub. {status:Stable} {id:feat-120}
- **Per-card thumbnail grid** - thumbnails with remove buttons in the editor. {status:Stable} {id:feat-121}
- **Async sprite build** - already-spawned cards update in place as art loads. {status:Stable} {id:feat-122}
- **Editable deck name** - rename the deck in place. {status:Stable} {id:feat-123}
- **Back-image swatch** - drop an image to set the deck back. {status:Stable} {id:feat-124}
- **Per-deck back textures** - each deck keeps its own back image. {status:Stable} {id:feat-125}
- **Grouped Collect Deck** - gather a whole deck by its per-deck id. {status:Stable} {id:feat-126}
- **Card crop fields** - front and back crop rectangles per card. {status:Stable} {id:feat-127}
- **Save deck to desktop** - exports with a stacked 3-card composite icon. {status:Stable} {id:feat-128}
- **Drag a deck onto the table** - drop a saved deck icon to load it. {status:Stable} {id:feat-129}
- **Deck-icon click to deal** - open and deal a deck at center. {status:Stable} {id:feat-130}
- **JSON deck export** - download the deck as JSON. {status:Stable} {id:feat-131}
- **View Extents** - fit the window to all cards on the table. {status:Stable} {id:feat-132}
- **Clear-table confirm** - guard against accidental wipes. {status:Stable} {id:feat-133}
- **Last-directory memory** - remembers sheet, back, and deck folders. {status:Stable} {id:feat-134}
- **Deck-state snapshot** - restores a picker-loaded deck without a GitHub path. {status:Stable} {id:feat-135}

### Next
- [[CardsWindow]] **Per-card backs** - front/back filename pairing and per-card render. {status:Planned} {id:feat-136}
- [[CardsWindow]] **Auto-crop (bounding box)** - trim a card to its background bbox. {status:Planned} {id:feat-137}
- [[CardsWindow]] **Auto-crop (4-corner)** - manual perspective corners for a crooked scan. {status:Planned} {id:feat-138}
- [[CardsWindow]] **Auto-crop (contour warp)** - edge-detect, contour, and dewarp automatically. {status:Planned} {id:feat-139}
- [[CardsWindow]] **Drag-to-reorder import list** - reorder cards in individual mode. {status:Planned} {id:feat-140}
- [[CardsWindow]] **Transparent-PNG encode option** - keep alpha instead of JPG. {status:Planned} {id:feat-141}
- [[CardsWindow]] **Deck template zones** - named layout zones for play areas. {status:Planned} {id:feat-142}
- **Deck types & CCG rules** - a richer rules layer beyond a plain deck. {status:Planned} {id:feat-143}
- **Hand zones** - per-player private hands with hidden cards. {status:Planned} {id:feat-144}
- **Turn & score tracking** - counters and turn order on the table. {status:Planned} {id:feat-145}
- **Dice & tokens** - add dice, counters, and meeples to the table. {status:Planned} {id:feat-146}
- **Game board layer** - drop a board image with snap regions. {status:Planned} {id:feat-147}
- **Card effect scripting** - define effects with Gorp logic. {status:Planned} {id:feat-148}
- **Game tools beyond cards** - board, token, and rules construction. {status:Wishlist} {id:feat-149}

---

## OS
{meta: updated=2026-08-08}

*An online, collaborative workspace - a Drive / 365-style OS with a suite of tools for building content together.*

### Workspace
- [[AppGalleryWindow]] **App launcher** - browse, open, and pin every built-in app. {status:Stable} {media:AppGalleryWindow} {id:feat-150}
- **Drag-to-dock pin** - pin an app permanently to the dock. {status:Stable} {id:feat-151}
- **Drag-to-desktop shortcut** - drop an app onto the desktop. {status:Stable} {id:feat-152}
- **Click to open or restore** - a single click launches or restores an app. {status:Stable} {id:feat-153}
- [[NotesWindow]] **Notes & docs** - a markdown editor with GitHub sync. {status:Stable} {media:NotesWindow} {id:feat-154}
- **Edit / view modes** - raw markdown or rendered rich text. {status:Stable} {id:feat-155}
- **Markdown rendering** - headings, bold, italic, bullets, and rules. {status:Stable} {id:feat-156}
- **Search & replace** - an in-document find-and-replace bar. {status:Stable} {id:feat-157}
- **Word-wrap toggle** - wrap or horizontally scroll long lines. {status:Stable} {id:feat-158}
- **Sync with local fallback** - loads remote, falls back to a bundled seed. {status:Stable} {id:feat-159}
- [[ImageWindow]] **Image viewer** - display, scale, save, and export images. {status:Stable} {media:ImageWindow} {id:feat-160}
- **Five image formats** - read and save PNG, JPG, GIF, WebP, and AVIF. {status:Stable} {id:feat-161}
- **Format toggle** - cycle the save format from the title bar. {status:Stable} {id:feat-162}
- **Animated image playback** - animated GIFs play right in the viewer. {status:Stable} {id:feat-163}
- **Async fetch & restore** - re-fetches its image after a restart. {status:Stable} {id:feat-164}
- **Drag-out** - drag the image to the dock, desktop, or a card table. {status:Stable} {id:feat-165}
- [[GalleryWindow]] **Background gallery** - browse and apply desktop wallpapers. {status:Stable} {media:GalleryWindow} {id:feat-166}
- **Drag-to-wallpaper** - drop a thumbnail onto the desktop to set it. {status:Stable} {id:feat-167}
- **Hover info** - name and resolution tooltip on each thumbnail. {status:Stable} {id:feat-168}

### Accounts & sharing
- [[AccountActivityWindow]] **Account activity** - recent activity across one or more accounts. {status:Stable} {id:feat-169}
- **Account chips** - include or exclude accounts in the view. {status:Stable} {id:feat-170}
- **Cache-bypass refresh** - re-fetch everything fresh on demand. {status:Stable} {id:feat-171}
- **Multi-account management** - switch, create, rename, and delete accounts. {status:Stable} {id:feat-172}
- **Atomic account operations** - each change is a single GitHub commit. {status:Stable} {id:feat-173}
- **QR deep-link sharing** - a QR that boots straight into a shared account. {status:Stable} {id:feat-174}
- **Undeletable Global account** - a shared baseline account always exists. {status:Stable} {id:feat-175}

### Utilities
- [[PerformanceWindow]] **Performance overlay** - real-time FPS and memory stats. {status:Stable} {media:PerformanceWindow} {id:feat-176}
- **FPS bar** - rolling average with green / yellow / red thresholds. {status:Stable} {id:feat-177}
- **Five memory bars** - heap, allocated, reserved, texture, and GFX. {status:Stable} {id:feat-178}
- **Toggle from anywhere** - Ctrl/Cmd+M opens it over any window. {status:Stable} {id:feat-179}
- [[InputControlsWindow]] **Controls reference** - a keyboard and pointer cheat-sheet. {status:Stable} {id:feat-180}
- **Persistent cheat-sheet** - Ctrl+I toggles it and it stays open while you work. {status:Stable} {id:feat-181}
- [[BugReportWindow]] **Bug reports** - file and track BUG-#### reports. {status:Stable} {id:feat-182}
- **Shared cross-account storage** - reports are visible across accounts. {status:Stable} {id:feat-183}
- **Image attachments** - attach screenshots to any report. {status:Stable} {id:feat-184}
- **Filter & sort** - narrow by status and reorder the list. {status:Stable} {id:feat-185}
- **Feature requests** - REQ-#### siblings filed from any feature entry. {status:Stable} {id:feat-186}
- [[DebugLogWindow]] **Live log** - real-time Unity log capture. {status:Stable} {media:DebugLogWindow} {id:feat-187}
- **Level filters** - info, warning, and error toggles with collapse. {status:Stable} {id:feat-188}
- **Copy & clear** - copy the full log or wipe it. {status:Stable} {id:feat-189}
- **Background flash** - the title flashes on new logs when unfocused. {status:Stable} {id:feat-190}
- **Screen recorder** - F11 capture with preview and gallery save. {status:Stable} {id:feat-191}

### Help & docs
- [[HelpWindow]] **In-context help** - an annotated screenshot per window. {status:Stable} {id:feat-192}
- **Descriptor badges** - labelled regions with hover tooltips and connector lines. {status:Stable} {id:feat-193}
- **Help button everywhere** - the ? button opens that window's help. {status:Stable} {id:feat-194}
- [[FeaturesWindow]] **Features index** - this three-purpose product map. {status:Stable} {id:feat-195}
- **Hover media previews** - see a window's screenshot from its chip. {status:Stable} {id:feat-196}
- **Status filtering** - filter entries by Stable, Beta, Planned, or Wishlist. {status:Stable} {id:feat-197}
- **File a request or bug** - right-click any entry to log one against it. {status:Stable} {id:feat-198}
- **Live counts & dates** - per-tab entry counts and an updated date. {status:Stable} {id:feat-199}
- [[LedgerWindow]] **Implementations ledger** - a spreadsheet over the 2,000-entry tape of everything ever built into NOS. {status:Beta} {id:feat-315}
- **Sortable sheet** - Date / System / Type / Description, click-header sorting, live search, colored type pills and a system filter. {status:Beta} {id:feat-316}
- **Per-system breakdown** - collapsible sections with type mixes, counts and date ranges. {status:Beta} {id:feat-317}
- **Project statistics** - totals, type mix, a clickable daily-activity chart and system rankings. {status:Beta} {id:feat-318}
- **Timeline playback** - press play and watch the project build itself one day at a time. {status:Beta} {id:feat-319}

### Foundations
- [[GitHubUploader]] **Online persistence & sync** - GitHub-backed storage, fully proxied. {status:Stable} {id:feat-200}
- **Serial write queue** - one write at a time eliminates conflicts on bulk imports. {status:Stable} {id:feat-201}
- **Large-file transfer** - reads and writes files over 1 MB. {status:Stable} {id:feat-202}
- **Atomic account folders** - copy, rename, and delete a whole account in one commit. {status:Stable} {id:feat-203}
- **No token in the client** - all traffic routes through a Cloudflare Worker. {status:Stable} {id:feat-204}
- [[WindowBase]] **Windowing framework** - drag, snap, resize, minimize, and persist. {status:Stable} {id:feat-205}
- **Edge & corner resize** - custom 8-direction resize cursors. {status:Stable} {id:feat-206}
- **Screen snapping** - quarter, half, and full-screen snaps. {status:Stable} {id:feat-207}
- **Minimize / maximize / restore** - plus Esc to minimize or restore all. {status:Stable} {id:feat-208}
- **State persistence** - position, size, panels, and scroll all restore. {status:Stable} {id:feat-209}
- **In-place text editing** - custom caret and selection with word and line navigation. {status:Stable} {id:feat-210}
- **Mobile keyboard path** - an on-screen keyboard for WebGL touch devices. {status:Stable} {id:feat-211}
- **File import** - a native and WebGL multi-file picker into the dock and desktop. {status:Stable} {id:feat-212}
- **Image decoder** - PNG, JPG, GIF, WebP, and AVIF with animated-GIF playback. {status:Stable} {id:feat-213}
- **App registry** - extension-to-app association and an Open With menu. {status:Stable} {id:feat-214}
- **Desktop & dock** - drag-reorder, pin, multi-import, and color tint. {status:Stable} {id:feat-215}
- **Wallpaper layer** - set, persist, and right-click the desktop background. {status:Stable} {id:feat-216}
- **Shared managers** - cursor, tooltip, context-menu, and modal-input services. {status:Stable} {id:feat-217}
- **Custom cursors** - 8-direction gradient resize cursors. {status:Stable} {id:feat-218}
- **Sticky tooltips** - delayed, grace-period tooltips across the whole UI. {status:Stable} {id:feat-219}
- **WebGL bridges** - file-drop, tab-hide save, image decode, and fetch-with-timeout. {status:Stable} {id:feat-220}
- **Cloudflare Worker backend** - gates and proxies all GitHub and Gorp traffic. {status:Stable} {id:feat-221}
- **Cross-platform** - runs in any WebGL browser and as native PC/Mac/Linux/mobile builds. {status:Stable} {id:feat-222}
- **Branded loading screen** - a fade-in splash on boot. {status:Stable} {id:feat-223}

### Next
- **Server-side trash / soft-delete** - restore deleted files. {status:Planned} {id:feat-224}
- **Atomic move / rename** - first-class file moves instead of copy-then-delete. {status:Planned} {id:feat-225}
- **Write-queue persistence** - a localStorage outbox that replays after reload. {status:Planned} {id:feat-226}
- **Conflict-merge UI** - reconcile cross-session edits instead of last-writer-wins. {status:Planned} {id:feat-227}
- **Multiline in-place editing** - multi-line edit in any in-place field. {status:Planned} {id:feat-228}
- **Drag-from-OS onto desktop** - drop files straight onto the background. {status:Planned} {id:feat-229}
- **Batch-import progress UI** - a real progress bar for large imports. {status:Planned} {id:feat-230}
- [[GalleryWindow]] **Animated gallery & wallpapers** - animated thumbnails and live backgrounds. {status:Planned} {id:feat-231}
- **Pinch-to-zoom canvases** - zoom UML, XAML, and Cards on touch. {status:Planned} {id:feat-232}
- **Receive-side QR scan** - scan a code to join, not only generate one. {status:Planned} {id:feat-233}
- **Global search** - find files, windows, and content across the OS. {status:Planned} {id:feat-234}
- **Command palette** - a keyboard launcher for any action. {status:Planned} {id:feat-235}
- **Recent files & quick-open** - jump back to recent documents. {status:Planned} {id:feat-236}
- **Trash bin app** - a desktop trash with restore. {status:Planned} {id:feat-237}
- **Settings app** - themes, density, and per-app preferences. {status:Planned} {id:feat-238}
- **Light / dark theme switch** - choose a UI theme. {status:Planned} {id:feat-239}
- **Window tiling presets** - snap layouts for several windows at once. {status:Planned} {id:feat-240}
- **File browser app** - browse the GitHub-backed file tree. {status:Planned} {id:feat-241}
- **Tabbed windows** - group documents into tabs within a window. {status:Planned} {id:feat-242}
- **Keyboard shortcut customization** - rebind global keys. {status:Planned} {id:feat-243}
- **Export to PDF** - export any document to PDF. {status:Planned} {id:feat-244}
- **Offline mode** - queue edits and sync when back online. {status:Planned} {id:feat-245}

---

## Wishlist
{meta: updated=2026-05-31}

*Far-out, OS-grade ambitions - where NOS goes when it grows into a full collaborative operating system.*

### Real-time collaboration
- **Live shared desktop** - see collaborators' cursors and windows in real time. {status:Wishlist} {id:feat-246}
- **Real-time multi-user editing** - simultaneous editing like Google Docs. {status:Wishlist} {id:feat-247}
- **Presence & cursors** - avatars showing who is viewing what. {status:Wishlist} {id:feat-248}
- **Voice & video calls** - talk over a shared workspace. {status:Wishlist} {id:feat-249}
- **Screen sharing** - broadcast a window to collaborators. {status:Wishlist} {id:feat-250}
- **Spectator mode** - watch a live design or game session. {status:Wishlist} {id:feat-251}

### Messaging & notifications
- **Text messaging & DMs** - message other users inside NOS. {status:Wishlist} {id:feat-252}
- **Group channels** - topic chat rooms per project. {status:Wishlist} {id:feat-253}
- **Notifications center** - a bell with notification history. {status:Wishlist} {id:feat-254}
- **Activity feed** - a timeline of changes across accounts. {status:Wishlist} {id:feat-255}
- **Mentions & comments** - @mention and comment on any document. {status:Wishlist} {id:feat-256}
- **Email client** - send and receive email inside the OS. {status:Wishlist} {id:feat-257}

### Security & identity
- **User accounts & login** - real auth with email and OAuth. {status:Wishlist} {id:feat-258}
- **Roles & permissions** - owner, editor, and viewer access control. {status:Wishlist} {id:feat-259}
- **End-to-end encryption** - encrypt files at rest and in transit. {status:Wishlist} {id:feat-260}
- **Two-factor authentication** - secure sign-in with 2FA. {status:Wishlist} {id:feat-261}
- **Single sign-on** - enterprise identity-provider login. {status:Wishlist} {id:feat-262}
- **Audit log** - who changed what and when. {status:Wishlist} {id:feat-263}
- **Share links & access expiry** - time-limited, revocable share links. {status:Wishlist} {id:feat-264}
- **Admin console** - manage an organization's users and storage. {status:Wishlist} {id:feat-265}

### Platform & extensibility
- **File versioning & history** - browse and restore prior versions. {status:Wishlist} {id:feat-266}
- **App store / plugin marketplace** - install third-party NOS apps. {status:Wishlist} {id:feat-267}
- **Plugin SDK** - build and publish your own windows. {status:Wishlist} {id:feat-268}
- **Scripting & automation** - macros and scheduled tasks. {status:Wishlist} {id:feat-269}
- **Workflow automation** - trigger actions on events, if-this-then-that. {status:Wishlist} {id:feat-270}
- **Cross-device sync & handoff** - continue work on another device. {status:Wishlist} {id:feat-271}
- **Mobile companion app** - a native iOS and Android client. {status:Wishlist} {id:feat-272}
- **Installable PWA** - install NOS as an offline-first desktop app. {status:Wishlist} {id:feat-273}
- **Localization** - multiple UI languages. {status:Wishlist} {id:feat-274}
- **Accessibility** - screen-reader and keyboard-only support. {status:Wishlist} {id:feat-275}
- **Import from Drive / Dropbox** - bring in external files. {status:Wishlist} {id:feat-276}
- **Backup & full export** - one-click export of an entire account. {status:Wishlist} {id:feat-277}
- **Printing support** - print documents to a real printer. {status:Wishlist} {id:feat-278}
- **Clipboard manager** - a history of copied items. {status:Wishlist} {id:feat-279}

### More built-in apps
- **Terminal / shell** - a command line inside NOS. {status:Wishlist} {id:feat-280}
- **Code editor** - a syntax-aware multi-language editor. {status:Wishlist} {id:feat-281}
- **Spreadsheet** - a grid with formulas. {status:Wishlist} {id:feat-282}
- **Presentation** - build and present slide decks. {status:Wishlist} {id:feat-283}
- **Whiteboard / canvas** - freeform sketching and diagrams. {status:Wishlist} {id:feat-284}
- **Calendar & scheduling** - events and reminders. {status:Wishlist} {id:feat-285}
- **Contacts / address book** - manage people. {status:Wishlist} {id:feat-286}
- **Media player** - play audio and video. {status:Wishlist} {id:feat-287}
- **Photo manager** - albums and tagging. {status:Wishlist} {id:feat-288}
- **PDF viewer & annotator** - read and mark up PDFs. {status:Wishlist} {id:feat-289}
- **Mind-map** - branch ideas visually. {status:Wishlist} {id:feat-290}
- **Kanban / task board** - track work in columns. {status:Wishlist} {id:feat-291}
- **Project management** - tasks, milestones, and timelines. {status:Wishlist} {id:feat-292}
- **Database / table app** - structured records with multiple views. {status:Wishlist} {id:feat-293}
- **Form builder** - build and collect form responses. {status:Wishlist} {id:feat-294}
- **Map app** - geographic data and pins. {status:Wishlist} {id:feat-295}
- **Calculator** - standard and scientific. {status:Wishlist} {id:feat-296}
- **Clock & timers** - world clock, stopwatch, and alarms. {status:Wishlist} {id:feat-297}

### Desktop experience
- **System tray / status bar** - clock, network, and notifications. {status:Wishlist} {id:feat-298}
- **Multiple desktops / workspaces** - switch between desktop sets. {status:Wishlist} {id:feat-299}
- **Window groups & sessions** - save and reopen sets of windows. {status:Wishlist} {id:feat-300}
- **Full theming engine** - dark, light, and high-contrast themes. {status:Wishlist} {id:feat-301}
- **Wallpaper engine** - animated and interactive wallpapers. {status:Wishlist} {id:feat-302}
- **Desktop widgets** - clocks, notes, and stats on the background. {status:Wishlist} {id:feat-303}
- **Usage analytics dashboard** - insights into your workspace. {status:Wishlist} {id:feat-304}

### AI everywhere
- **Voice assistant** - control NOS by voice. {status:Wishlist} {id:feat-305}
- **AI agent / copilot** - an agent that operates the OS for you. {status:Wishlist} {id:feat-306}
- **Natural-language launch** - open or build things by typing a request. {status:Wishlist} {id:feat-307}
- **AI summaries & insights** - summarize documents and activity. {status:Wishlist} {id:feat-308}

### Games as a platform
- **Marketplace for game templates** - share and sell card and game packs. {status:Wishlist} {id:feat-309}
- **Publish a playable game** - share a playable build from a deck. {status:Wishlist} {id:feat-310}
- **Real-time game multiplayer** - play card games live with others. {status:Wishlist} {id:feat-311}
- **Achievements & profiles** - user profiles with badges. {status:Wishlist} {id:feat-312}
- **Monetization & billing** - subscriptions and paid tiers. {status:Wishlist} {id:feat-313}
- **Status page & health** - public system status and uptime. {status:Wishlist} {id:feat-314}

---

*Changelog (for the technically curious): a small button in this window opens the full change log.*
