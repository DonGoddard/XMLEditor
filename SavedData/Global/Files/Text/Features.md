# NOS (Nexus Operating System) — Feature Checklist

> Unity 6 / WebGL / UI Toolkit desktop OS for XML / XAML / UML editing, with GitHub-backed persistence via Cloudflare Worker.
> **Audit date:** 2026-05-07. `[x]` = shipped, `[ ]` = planned / partial / not yet wired.
> Companion: `Scripts/Plans/CodeAudit-2026-05-07.md` (audit + next steps).

---

## 1. Core Platform

### 1.1 App Registry (`Managers/AppRegistry.cs`)
- [x] Singleton; single source of truth for all app types and live dock instances
- [x] `AppDefinitionData` blueprint — `appId`, `displayName`, `windowPrefab`, `defaultIconTexture`, `defaultIconGitHubPath`, `handledExtensions[]`, `defaultForExtensions[]`, `isPinnedByDefault`, `isNonRemoveable`, `supportsFileOpen`
- [x] Extension → definition lookup (`FindForExtension`, `FindAllForExtension`, "Open With" submenu)
- [x] First-run dock seeding (`BuildDefaultInstances`)
- [x] Persisted dock snapshot/restore (`SnapshotInstances`, `RestoreInstances`)
- [x] Async icon loader (`LoadIconAsync`) with `ImageDecoder.LoadAnyImageAsync`
- [x] Image-extension recognition (`IsImageExtension`) including `.avif`, `.webp`, `.gif`
- [ ] Static `Instance` accessor — currently looked up via `FindAnyObjectByType` from many sites (perf hit; called in pointer events) [audit §2]

### 1.2 App Instance Model (`AppInstance.cs`)
- [x] `[Serializable] AppInstanceData` for persistence (instanceId, appId, displayName, isPinned, dockIndex, filePath, fileUrl, iconOverrideUrl, displayOrder)
- [x] Runtime `AppInstance` with resolved `Definition`, `LoadedIcon`, `FileContent`, `FileBytes`
- [x] Factories: `FromDefinition`, `FromFile`, `FromUrl`, `Duplicate`
- [x] `[Serializable] DesktopIconData` with `fileUrl`/`filePath` for file-backed desktop icons

### 1.3 UI Manager (`Managers/UIManager.cs` + Animations / WebGL / Debug partials)
- [x] Singleton with `Root`, `WindowLayer`, `OverlayLayer`
- [x] Window registry & focus stacking
- [x] Layout persistence (`SaveDesktopLayout` debounced; `RestoreLayout`)
- [x] `ShowConfirm(title, message, ok, cb)` modal (semi-transparent backdrop, dark-red Confirm)
- [x] `ShowToast(text, duration)`
- [x] `HasUnsavedChanges()` walks visible non-fragment windows for `ContentDirty`
- [x] Window open / close animations (`Animations` partial)
- [x] WebGL bridges & file-drop pipeline (`WebGL` partial)
- [x] Debug status bar + UI hit-detection visualization (`Debug` partial)
- [x] `#account=…` URL-fragment override at boot (deep-link from QR scan)
- [x] Editor `DragPerform` fallback via TrickleDown `PointerUpEvent` (Unity 6 fix)

### 1.4 Window Base (`Windows/WindowBase.cs` — 2664 lines)
- [x] Drag, snap, resize, minimize, maximize
- [x] `WindowStateData` per-window persistence (position, size, panel widths, scroll restoration)
- [x] Title-bar buttons: minimize / maximize / close / "?" help
- [x] Right-click title → Save / Save As / Rename / Delete from GitHub
- [x] Double-click title → rename
- [x] Title-text tooltip describing window type + save/rename actions
- [x] Loading overlay (`ShowLoadingOverlay(bool)`, "Syncing…", scroll retry capped 20×~4s)
- [x] `BeginInPlaceEdit` single-line text editing with custom caret/selection rendering
  - [x] Shift+Arrows / Home / End extend selection
  - [x] Ctrl/Cmd+A / C / X / V
  - [x] Alt+Left / Right move by word
  - [x] Double-click = word, triple-click = all
  - [x] WebGL mobile path (`TouchScreenKeyboard.Open`, single-line)
  - [ ] Multi-line edit mode (full plan in `WindowBase-MultilineInPlaceEdit.plan.md`; not yet implemented)
  - [ ] Drag-to-select with mouse mid-edit
  - [ ] Right-click context menu (Cut / Copy / Paste / Select All) over an active edit session
- [x] `static FindWindowElement(typeName)` + `static windowsByTypeName` for screenshot capture
- [ ] Multi-instance lookup (one entry per type → duplicated windows lose first instance) [audit §3]
- [x] Save / Export hooks: `GetSaveContent`, `GetSaveBytes`, `GetDefaultRenameFileStem/Extension`
- [x] `IsContentDirty` public accessor → "Discard / Save All" prompt only when needed
- [x] `NOS_DownloadFile` / `NOS_DownloadBinaryFile` use `~/Downloads` on Editor / standalone (was Desktop)

---

## 2. Desktop & Dock

### 2.1 Dockbar (`UI Visual Element/Dockbar.cs`)
- [x] AppInstance-driven (no parallel arrays)
- [x] Drag-to-reorder
- [x] Right-click per icon: Open / Open with… / Pin / Unpin / Save / Rename / Delete / Remove
- [x] Right-click empty area: Import File…
- [x] Ctrl+Click duplicates an instance
- [x] Drag-from-dock onto desktop unpins
- [x] `IsImageAppInstance` recognises ImageWindow by definition (post-restart)
- [x] Auto-import drop-in animation (`PlayImportDropAnimation`, -40 px → 0)
- [x] `SpawnWindow` picks most-derived `WindowBase` via `IsSubclassOf` (XamlGorp etc.)
- [x] `IsBinaryExtension` includes `.avif`, `.webp`, `.gif`

### 2.2 Desktop (`UI Visual Element/Desktop.cs`)
- [x] Icon grid with drag-to-rearrange and color tint
- [x] Multi-import via right-click "Import Files…" with scatter placement
- [x] Drag desktop icon → dock (file-backed icons collision-free via unique instanceId)
- [x] Drag icon → CardsWindow (image background) or → editor back-preview (deck back)
- [x] Drag-from-OS into desktop background (single drop) via WebGL `OnExternalFileDropped`
- [ ] Bulk drag-from-OS multi-drop into desktop area (only single drop wired today)
- [x] `IsImageFile` / `IsDeckFile` extension routing
- [x] `LaunchDesktopIcon` honors `fileUrl` (loads file content before opening)
- [x] `PinDesktopIconToDock` transfers `fileUrl`
- [x] Color wheel popup
- [x] Wallpaper layer (`BackgroundDisplay`) with right-click menu and persistence
- [x] Aspect-preserving icon thumbnails (`backgroundSize: Contain`)
- [ ] Bulk import progress UI (currently fading toast + per-icon drop animations)
- [ ] Per-file preview / skip step in `RenameFileDialog` for batch import
- [ ] File-conflict resolution (currently overwrites silently; SHA-conflict retry path)

### 2.3 Background / Wallpaper (`UI Visual Element/BackgroundDisplay.cs`)
- [x] Wallpaper renderer driven by `Resources.Backgrounds` manifest
- [x] Drag-to-set wallpaper from GalleryWindow
- [x] Right-click context menu, persistence
- [ ] Animated GIF wallpapers (`SetWallpaperAsync` still uses `UnityWebRequestTexture.GetTexture` — needs `ImageDecoder.LoadAnyImageAsync`)

---

## 3. File / Asset Pipeline

### 3.1 GitHub Integration (`GitHubUploader.cs` — 1504 lines)
- [x] Cloudflare Worker proxy (`workerUrl`); no token in client code
- [x] `/gorp` Worker path proxies to Gorp server (HTTPS mixed-content + iOS Safari CORS)
- [x] Reads: `RequestData`, `RequestRawData`, `RequestBinaryData(Async)`, `RequestImage(Async)`, `BuildRawUrl` (URL-encoded segments), `BuildUserFilePath`
- [x] Writes serialised through `QueueWrite` → `ProcessWriteQueue` (eliminates SHA conflicts)
- [x] `SaveMarkdown` and `SaveFileBytes` funnel through the queue
- [x] Large-file READ via Git Data API blob endpoint when Contents API elides `content` (>1 MB)
- [x] Large-file WRITE (>1 MB) via Git Data API blob → tree → commit → ref dance, up to 3 retries
- [x] Atomic account folder operations: `DeleteAccountFolder`, `RenameAccountFolder`, `CopyAccountFolder` via `RewriteAccountFolderCoroutine`
- [x] `FolderRewriteMode` enum (`Delete`, `Rename`, `Copy`); 3-attempt retry on 422 fast-forward
- [x] `base_tree` diff pattern (`"sha":null` for deletions) so request body scales with change-set
- [x] `CopyFileWithStatus` + `CopyFileResult` enum (`Copied` / `SourceMissing` / `WriteFailed`)
- [x] `ListAllFilesRecursive` BFS walk of `SavedData/{relativePath}`
- [x] `ListDirectoryFolders` for account discovery
- [x] `X-NOS-Client: Unity-WebGL` header on every `UnityWebRequest` for Worker gating
- [x] `User-Agent` header NOT set (forbidden in WebGL)
- [x] `[ContextMenu]` Debug: Upload Test File
- [ ] Soft-delete / Trash folder + `UndoDelete` (delete is hard `DELETE` against Contents API)
- [ ] First-class `MoveFile` / `RenameFile` (currently `CopyFile` + `DeleteFile`)
- [ ] Conflict-merge UI (last-writer-wins after refetch + re-PUT)
- [ ] Write-queue persistence across reload (localStorage outbox + replay)
- [ ] Granular write status / progress hooks beyond `Action<bool> onComplete`

### 3.2 File Picker (`FilePicker.cs`, `FilePickerHost.cs`, `Plugins/StandaloneFileBrowser/`)
- [x] Cross-platform: Editor (sync `OpenFilePanel`), Standalone (sync), WebGL (jslib + blob URL fetch)
- [x] `OpenSingle` / `OpenMultiple` returning `FilePickerResult { extension, fileName, directory, bytes }`
- [x] Mac: pure C# Obj-C bridge (`MacObjC.cs`, `StandaloneFileBrowserMac.cs`); SFB native bundle no longer linked
- [x] Mac: single `runModal` path (no manual modal session); `[NSApp runModalForWindow:panel]`
- [x] Mac: auto-confirm via `CFRunLoopTimer` (single-click → URL-stable polling → `[panel ok:nil]`)
- [x] Mac: `[panel center]` before show
- [x] Sync API everywhere on native (double-click confirms via `runModal`)
- [x] Extension filter built dynamically from `AppRegistry.AllDefinitions`
- [ ] Mac multi-select trackpad-jitter triple-click quirk (Force Touch click-pairing in `NSOutlineView`; tap-to-click is the workaround)

### 3.3 Image Decoder (`ImageDecoder.cs`, `Plugins/WebGL/ImageDecoder.jslib` — NEW since 2026-05-01)
- [x] Magic-byte sniff for PNG / JPG / GIF / WebP / AVIF / BMP / HDR
- [x] Native `Texture2D.LoadImage` fast path for PNG / JPG (no jslib round-trip)
- [x] WebGL browser-decode path for GIF / WebP / AVIF via `Image` + `OffscreenCanvas`
- [x] Two-step pixel transfer (`NOS_FetchDecodedBytes` → `HEAPU8.set` into managed `byte[]`)
- [x] Animated GIF via WebCodecs `ImageDecoder` (Chrome / Edge / Firefox 133+)
- [x] Polled-mode animated GIF for Safari (`createImageBitmap` → canvas → texture, 20 fps)
- [x] `BindAnimated(VisualElement, Texture2D)` retained-mode repaint registry
- [x] Wired across ImageWindow, CardsWindow (background / sheet / back / per-card), Desktop icons, dock icons, AppRegistry icons
- [ ] GalleryWindow thumbnails still go through `UnityWebRequestTexture.GetTexture` (no animation)
- [ ] Desktop wallpaper (`SetWallpaperAsync`) same — animated wallpapers blocked on this
- [ ] Editor preview gap: WebP / AVIF can't decode in-Editor (documented tradeoff)

### 3.4 RenameFileDialog (`UI Visual Element/RenameFileDialog.cs`)
- [x] Pre-populated stem from `defaultFilePath`
- [x] Free-text extension field (any of 5 image formats works)
- [x] Ellipsis on long filenames (panel + stemRow `overflow: Hidden`)
- [x] First-save bug fix: `onRenamed` invoked with `newRelPath` whenever a save fired
- [x] `GetDefaultRenameFileStem`/`GetDefaultRenameFileExtension` virtuals on `WindowBase`

### 3.5 FileDropConfirmation (`UI Visual Element/FileDropConfirmation.cs`)
- [x] Modal confirms file/URL drops before committing to GitHub

---

## 4. Windows

### 4.1 Window Lifecycle Hooks
- [x] `ShowLoadingOverlay` wired in `XmlWindow`, `UmlWindow.File`, `NotesWindow`, `ImageWindow`
- [x] `ChatWindow.OnDestroy` calls `StopAllCoroutines()` before `base.OnDestroy()`
- [x] `topBar.flexShrink = 0` prevents model dropdown shrinking as chat scrolls

### 4.2 XmlWindow (`Windows/XmlWindow.*`)
- [x] XML tree editor (TreeView, `XmlNodeData`, color formatting)
- [x] Inter-window XML node drag-and-drop
- [x] Line-number gutter render & sync
- [x] File load / save / export
- [x] State restore (TreeView expand state) with retry capped at 25
- [x] Debug tree print and node visualization
- [x] Right-click context menus

### 4.3 UmlWindow (`Windows/UmlWindow.*` — 11 partials)
- [x] Interactive UML class-diagram editor
- [x] Free-form drag, attribute / method compartments, in-place editing
- [x] XMI / Enterprise / Gorp / custom UML XML parsing
- [x] SAI XML import via `Parsers/SaiXmlParser.cs`
- [x] XAML import → graph projection (`UmlWindow.XamlProjection.cs` — Milestone 1 of plan complete)
- [x] Containment / binding / resource edges for XAML diagrams
- [x] Layout submenu: Auto-Layout (Tree/Force), Force-Directed, Tree, Grid, View Extents
- [x] Force-directed: Fruchterman-Reingold, 200 iterations, k=280, T₀=400
- [x] BFS layered tree layout
- [x] Floating minimap with viewport rect, drag-to-move, 8-direction resize, color-matched fills
- [x] Live XML side panel: split divider drag-resize, row selection + scroll, format button, wrap toggle
- [x] Class / member / relationship line indicators in the XML panel
- [x] Focus submenu: Subtree / Context / Clear
- [x] XAML Filters submenu (XAML mode only)
- [x] Import submenu: Xaml / Nexus Directory / SAI XML
- [x] Confirm dialogs on Clear All / Reload Diagram / Replace-on-Import
- [x] Hamburger / canvas-background / title-bar context menus
- [ ] Milestone 2 — XAML-aware section rendering (multi-section node cards with stereotypes / badges)
- [ ] Milestone 3 — bindings / resources rendered as explicit edge types (`BindsTo`, `UsesResource`, `AppliesStyle`, `UsesTemplate`)
- [ ] Milestone 4 — XAML-backed editing (rename `x:Name`, add/remove children, change properties)
- [ ] Milestone 5 — `ControlTemplate` / `DataTemplate` / `ResourceDictionary` views
- [ ] Milestone 6 — SAI / XSD generic graph projection
- [ ] Generic `DiagramNode` / `DiagramSection` / `DiagramEntry` / `DiagramEdge` model (currently `UmlClass`/`UmlRelationship`-centric)

### 4.4 XamlWindow (`Windows/XamlWindow.*` — 13 partials)
- [x] Dual-pane WPF visual editor (canvas ↔ source) with split dividers
- [x] `XamlNode` model with attributes dict, children, parent, textContent, instanceId, sourceLine, live `XmlElement`, design-time `canvasX/Y/W/H`
- [x] `ParseXamlSource`, `AssignLineNumbers`, `SerializeXmlToString`
- [x] Line-by-line tokenizer (teal / cyan / orange / green / yellow)
- [x] ~40 WPF control renderers (`XamlWindow.Rendering.cs`)
- [x] Selection: canvas ↔ source bidirectional, properties panel, attribute add/edit/delete
- [x] Color picker popup (24-color grid + hex input)
- [x] Drag-to-move (`Canvas.Left/Top`), drag-to-resize (8 handles)
- [x] Edit ops: Ctrl+C/X/V/D/Delete/Backspace
- [x] Auto-hide left palette strip (~50 WPF types in 6 groups), drag-to-canvas drop
- [x] Source-row drag-to-reorder with ghost label and drop indicator
- [x] Hierarchy tree (`▶/▼/·` + teal type + italic hint) with auto-expand on selection
- [x] Bindings: `BindingExpression` model, popup with kind tabs, `StaticResource` autocomplete
- [x] Data context panel: JSON Apply / Gorp Apply, preview-mode toggle, inline computed-expression evaluator (no NCalc dependency)
- [x] `XamlGorpWindow` subclass: Gorp-flavoured palette, Execute / Toggle Gorp / Layout buttons, result display
- [ ] Full WPF `<Grid>` layout engine (rows, columns, `Grid.Row` / `Grid.Column` placement) — currently flat Column approximation only
- [ ] `<Style>` / `<DataTemplate>` / `<ControlTemplate>` evaluation (parsed but not applied during render)
- [ ] Multi-line text editing in source panel (uses Unity's built-in `TextField`; `WindowBase` multiline pending)

### 4.5 GorpEquationWindow (`Windows/GorpEquationWindow.*` — 5 partials)
- [x] MathML equation builder; 11 `ExprNode` types (Slot, Number, Variable, Binary +-×^, Fraction, Root, Negate, Paren, Compare, Logic, If)
- [x] `variablesOverlay` anchored to `canvasScroll.hierarchy` (visible with XML panel open)
- [x] Auto-parenthesization on Power / Negate / Add / Sub / Mul
- [x] Editable `gorpEndpoint`; `BuildGorpPayload` (pure MathML → backend) vs `BuildFullGorpXml` (saved to file)
- [x] `RegisterNodeInteractions` with `StopPropagation` (innermost wins; click-to-expand parent; Shift-click ancestor)
- [x] Fraction Y-axis split + zone label badges (NUM/DEN, LEFT/RIGHT)
- [x] Drag existing subtrees (`RenderIsolated`, `DeepClone` for all 11 node types, ancestor-cycle guard)
- [x] `.gorp` XML format (MathML + `<inputs>`); `GetCustomWindowState` / `RestoreCustomWindowState`
- [x] 50-deep undo stack; Ctrl+Z / Ctrl+Shift+Z
- [x] Save / Export wrapped in try/catch (no app-killer exceptions)
- [ ] Phase 3 — Subtree Scope Highlight (`geq-node--wrap-scope` dashed outline on descendants of wrap target)
- [ ] Phase 4 — Live Result Preview Panel (`dropPreviewPanel`, `previewRoot`, `UpdateDropPreview`, `FindNodeByPath`)
- [ ] Phase 6 — Box Select on canvas

### 4.6 NotesWindow (`Windows/NotesWindow.cs`)
- [x] Markdown editor with Edit / View modes
- [x] GitHub sync (`SaveMarkdown`)
- [x] Loading overlay during fetch

### 4.7 ChatWindow (`Windows/ChatWindow.cs`)
- [x] Multi-provider AI chat (Gemini / OpenAI / Anthropic) via Cloudflare Worker
- [x] Model dropdown
- [x] Top-bar `flexShrink = 0` prevents shrinking
- [x] `OnDestroy` halts coroutines

### 4.8 GalleryWindow (`Windows/GalleryWindow.cs`)
- [x] Background image gallery from manifest
- [x] Drag-to-wallpaper, drag-to-CardsWindow background
- [ ] Thumbnails routed through `ImageDecoder.LoadAnyImageAsync` (animated GIF gallery)

### 4.9 AppGalleryWindow (`Windows/AppGalleryWindow.cs`)
- [x] Built-in app browser; non-removeable dock anchor (leftmost)
- [x] Drag-to-dock pinning, click-to-open

### 4.10 PerformanceWindow (`Windows/PerformanceWindow.cs`)
- [x] FPS + memory stats overlay; Ctrl/Cmd+M toggle; color-coded bars

### 4.11 ImageWindow (`Windows/ImageWindow.cs`)
- [x] 5-format read + save support: PNG, JPG, GIF, WebP, AVIF
- [x] `TryMapExtensionToFormat` (`.jpeg → .jpg`, with-or-without leading dot, any case)
- [x] `CycleFormat` rotates through all five
- [x] `EnsureFormatMatchesEncodableBytes` downgrades to PNG when round-tripping a Texture2D in absence of original bytes
- [x] AppRegistry icon fallback when image fails to load (`ApplyAppRegistryFallback`)
- [x] Async-fetches `FileBytes` from `fileUrl` / `filePath` when null (post-restart)
- [x] Loading overlay during fetch
- [x] Drag-out-of-window starts ghost; drop on CardsWindow / Desktop / Dockbar handled

### 4.12 CardsWindow (`Windows/CardsWindow.*` — 4 partials)
- [x] Free-form card table; absolute-positioned VEs, drag, flip, BringToFront
- [x] Multi-select drag, hover gold border, click-to-flip-if-exposed
- [x] Right-click context menus: card / stack / table / pile
- [x] Save & Load submenu, Deal submenu (Klondike / Blackjack / 5-Card Poker / Fan)
- [x] Per-deck `deckId` (8-char GUID slug) for grouped Collect Deck
- [x] Per-card rotation; Rotate Left/Right at card AND deck level
- [x] Live preview during canvas handle drag (`UpdateCardPreview` from `LiveUpdateCellPositions`)
- [x] Pile markers: Draw / Discard / custom; rotation; label sides; drag-to-move; right-click menu (Label Side / Shuffle / Reset / Flip / See All)
- [x] Pile rect + label group container with composed rotations
- [x] **Sheet mode** deck import: editable headers, drag-to-reorder, presets, cell assignment popup
- [x] Sheet grid with explicit cellW/cellH; sidebar paired rows (Cols+Rows, OffXY, WidthHeight, PadXY)
- [x] Yellow offset / lime-green padding handles
- [x] Sheet preview defaults to upper-left card (`GetCellCardData(0,0)`)
- [x] Editable deck name (top of sidebar via `BeginInPlaceEdit`)
- [x] Back-image preview swatch with drop target
- [x] **Individual mode** deck import (`CardsWindow.Individual.cs`): bulk add, sort by filename, decode → downscale to 512 long-side → JPG q88 → upload
- [x] Per-card thumbnail grid (100×140) with Remove button
- [x] Async sprite build (`BuildCardSpritesIndividualAsync`) updates already-spawned cards in place
- [x] Source / Sidedness segmented toggles (`CardSourceMode`, `CardSidedness` enums)
- [x] `CardData` crop fields (`frontCrop{X,Y,W,H}`, `backCrop{X,Y,W,H}`); render gated on `frontCropW > 0`
- [x] Save Deck to Desktop with 3-card-stack composite icon (`BuildDeckStackIcon`)
- [x] Drag-drop a `.deck` icon from Desktop into CardsWindow play area (`ReceiveDeckDrop`)
- [x] Deck-icon click loads + deals at center via `ScheduleDealAtCenter`
- [x] Deck-name keeps spaces in filename (only `/`, `\` sanitized)
- [x] Last-directory persistence (`lastDeckDir`, `lastBgDir`, `lastSheetDir`)
- [x] `CardsCustomState.activeDeckJson` snapshot (restores deck loaded via picker without GitHub path)
- [x] View Extents (right-click → fit window to cards)
- [x] Confirm dialog on Clear Table
- [x] Auto-restore last sheet on Deck Editor reopen (`PopulateEditorFromActiveDeck`)
- [ ] Step 3d — filename-pair sniffing (`front_NNN.png` / `back_NNN.png`) for per-card backs
- [ ] Per-card back support in editor + render (PerCard sidedness wiring)
- [ ] Auto-crop step 1 (background-bbox) + step 2 (manual 4-corner)
- [ ] Auto-crop step 3 (Sobel + contour + perspective warp) — out of scope for first ship
- [ ] Drag-to-reorder rows in Individual mode list
- [ ] Preserve-transparency PNG encode option in Individual mode (currently JPG-only)
- [ ] Deck template zones (`zones[]` schema sketched in `CardsWindow.md`)

### 4.13 HelpWindow (`Windows/HelpWindow.cs`)
- [x] Static; `OpenFor(typeName)` loads `## TypeName` section from `NOS_Help.md`
- [x] Draggable 540×620 panel on `OverlayLayer`; 8-direction resize handles
- [x] Annotation badges (`[anno: x,y, label, optional tooltip]`) with drag, `placed` flag
- [x] Diagonal connector via `Atan2` + `Rotate` + `transformOrigin`
- [x] `cachedSections` + `decodedScreenshots` lazy-decode caches
- [x] `.nosh` format (text + base64 JPG); pushed to `SavedData/NOS_Help.nosh`
- [x] `WindowScreenshotCapture` 3-phase wait (4-frame grace → ≤600-frame poll → settle)
- [x] `SkipWindowAnimations` flag; pre-capture dock snapshot for cleanup
- [x] UFOS menu: Capture (Cmd+Ctrl+Opt+Shift+C), Attach Capture to Prefabs
- [ ] `NOS_Help.md` content gaps (CardsWindow, UmlWindow.Minimap, UmlWindow.XamlProjection, GorpEquationWindow)
- [ ] Auto-rerun screenshot capture on schema / prefab changes
- [ ] In-app annotation editor (drag-to-place; currently hand-authored markdown)

### 4.14 InputControlsWindow (`Windows/InputControlsWindow.cs`)
- [x] Reference panel for keyboard / cursor controls

### 4.15 PopupWindow (`Windows/PopupWindow.cs`)
- [x] Reusable popup dialog template

### 4.16 DebugLogWindow (`Windows/DebugLogWindow.cs` — re-enabled)
- [x] Real-time Unity log capture + display
- [x] Filter buttons with real Unity console icons (Info / Warn / Error PNGs)
- [x] Collapse button; texture-first `MakeFilterBtn` with glyph fallback
- [x] WebGL-safe `×` (U+00D7) instead of `✖` (U+2716)

### 4.17 MessagesWindow (`Windows/MessagesWindow.cs`)
- [x] Legacy OpenAI chat — deprecated → ChatWindow

---

## 5. Managers / Helpers

### 5.1 Account Manager (`Managers/AccountManager.cs` — 1287 lines)
- [x] User badge in top corner
- [x] Account context menu: Switch / Create / Rename / Delete / Create QR Link
- [x] `accounts.json` index plus folder enumeration as candidate set
- [x] `LoadAccountsThenShowMenu` shows immediately from cache; background validation gated by `discoveryRanThisSession`
- [x] Atomic Create via Git Data API (`CopyAccountFolder`); single commit, ~6 API calls
- [x] Atomic Rename via Git Data API; rewrites `username` and remaps `filePath` / `fileUrl` references in DesktopLayout.nos
- [x] Atomic Delete via Git Data API; verification step counts blobs at deleted prefix
- [x] Per-mode `RewriteAccountFolderCoroutine` (`Delete` / `Rename` / `Copy`) with 3-attempt fast-forward retry
- [x] Copy-options toggles: dock-referenced / desktop-referenced / orphan files
- [x] Account switch only prompts when `HasUnsavedChanges()` is true
- [x] QR Link: ZXing render at configurable `qrImageSize` (1024 default), `qrFallbackBaseUrl`, point-filter for crisp modules
- [x] `#account=…` deep-link consumed at boot in `UIManager.ParseAccountFromUrl`
- [x] Modal scrollbars use shared style (direct `styleSheets.Add` on the ScrollView)
- [x] `Global` account always retained, undeletable
- [ ] Multi-device account-folder sync edge cases (rare; requires fresh device + manual GitHub deletion)

### 5.2 Cursor Manager (`Managers/CursorManager.cs`)
- [x] 8-directional custom gradient cursors

### 5.3 Tooltip Manager (`Managers/TooltipManager.cs`)
- [x] Anchor-centered positioning; 2 s show delay; 16 px font; `NoWrap`
- [x] Above-anchor placement; flips below if would clip top
- [x] `GeometryChangedEvent` re-positions on real measured width arrival
- [x] Sticky / grace-period behavior on leave

### 5.4 Context Menu Manager (`Managers/ContextMenuManager.cs`)
- [x] Right-click menus with viewport position clamping
- [x] `ContextOption.disabled` support (gray + click-blocked)
- [x] `SubMenuOption` for nested menus

### 5.5 Modal Input Field (`Managers/ModalInputField.cs`)
- [x] Reusable modal text-input dialog

### 5.6 Screen Recorder (`Managers/ScreenRecorderManager.cs`)
- [x] Voxel Busters wrapper; F11 toggle
- [x] Preview + gallery save on stop
- [x] Dockbar red-dot Record button

### 5.7 Window Screenshot Capture (`Managers/WindowScreenshotCapture.cs`)
- [x] Coroutine iterates `AppRegistry` built-ins → JPG screenshots → `SavedData/NOS_Help.nosh`
- [x] Editor `Tools/UFOS` menu items (`UFOSMenuItems.cs`)

---

## 6. Validators / Parsers

### 6.1 XML Validator (`Validators/XmlValidator.cs`, `XmlWellFormedChecker.cs`)
- [x] XSD schema validation with event callbacks
- [x] Well-formedness check (parse only)

### 6.2 SAI XML Parser (`Parsers/SaiXmlParser.cs`)
- [x] Parses SAI / Enterprise / Gorp XML → UML classes & relationships

---

## 7. WebGL Bridges (`Plugins/WebGL/`)

- [x] `FileDrop.jslib` — browser drag-drop → `UIManager.OnExternalFileDropped`; `UNITY_NATIVE_TYPES` allowlist now includes `image/gif`, `image/webp`, `image/avif`
- [x] `UnityBrowserBridge.jslib` — tab-hide save trigger, Cmd+S/W overrides, loading fade, long-press → right-click (mobile)
- [x] `GitHubFetch.jslib` — fetch with timeout; `NOTFOUND` distinct from `ERROR`; `TOOLARGE|<sha>` for >1 MB blob fall-through
- [x] `ImageDecoder.jslib` — PNG/JPG sniff-skip; OffscreenCanvas decode for WebP/AVIF/GIF; WebCodecs animated GIF; Safari poll fallback via `createImageBitmap`

---

## 8. Backend / Cloudflare Worker (`Backend/`)

- [x] `worker.js` proxies all GitHub API requests; gates on `X-NOS-Client: Unity-WebGL`
- [x] Forwards `git/refs/heads/main`, `git/commits`, `git/trees`, `git/blobs` for atomic ops
- [x] `/gorp` path proxies raw XML to the Gorp server
- [x] `Cloudflare.md` — README

---

## 9. Editor / Build Pipeline (`Scripts/Editor/`, `Editor/`)

- [x] `GamePrePostCompile.cs` — version / platform updates
- [x] `GameVersion.cs` — version string from assembly metadata
- [x] `BackgroundManifestGenerator.cs` — IPreprocessBuildWithReport
- [x] `GamePrePostBuild.cs` — version update, bundle code, build log
- [x] `UFOSMenuItems.cs` — `Tools/UFOS/Capture Window Screenshots`, Attach to Prefabs, Generate Background Manifest

---

## 10. Mobile / Touch

- [x] `UnityBrowserBridge.jslib` long-press → synthesized right-click
- [x] WebGL mobile in-place edit via `TouchScreenKeyboard.Open` (single-line)
- [ ] WebGL mobile multi-line keyboard branch (alongside multi-line edit feature)
- [ ] Pinch-to-zoom on canvas surfaces (UmlWindow / XamlWindow / CardsWindow)

---

## 11. Theming / Styling

- [x] 13 USS files: Account Manager, Cards, Chat, Context Menu, Debug Log, Dockbar, Gallery, Gorp, Notes, UmlWindow, Version Label, Xaml, Xml
- [x] Slim-scrollbar override defined in `Xml Window Styles.uss`; reused widely via `styleSheets.Add`
- [x] Icon path consolidation: `Resources/Art/Icons/`

---

## 12. QR Code Share Module (`QRCodeShare/`)

- [x] ZXing-based QR generator
- [x] `QRShare_DownloadFile` / `QRShare_UploadFile` (renamed to avoid jslib symbol collision)
- [x] Used by `AccountManager.CreateQRLink` for deep-link QR codes
- [ ] Receive-side QR scan flow (currently only generates; the `#account=` consumer is in `UIManager`)

---

## 13. Documentation & Plans

- [x] `CLAUDE.md` — project overview & code style
- [x] `Scripts/change.md` — running change log
- [x] `Scripts/Plans/CardsWindow.md` — original plan
- [x] `Scripts/Plans/CardsDeckTypesPlan.md` — multi-format / bulk import / auto-crop ladder
- [x] `Scripts/Plans/UmlXamlIntegrationPlan-2026-04-22.md` — graph projection roadmap
- [x] `Scripts/Plans/ImportFilePlan.md` — Dock + Desktop import flow
- [x] `Scripts/Plans/CodeAudit-2026-04-15.md` — prior audit
- [x] `Scripts/GorpEquationWindow-InteractionPlan.md` — Gorp interaction phases
- [x] `Scripts/WindowBase-MultilineInPlaceEdit.plan.md` — multi-line edit plan
- [x] `Scripts/Plans/CodeAudit-2026-05-07.md` — current audit + next steps (this update)

---

## Known platform / browser caveats

- Safari: animated GIF decoded via 20 fps polling (slightly higher CPU than WebCodecs); `~600 KB/s` per active animated GIF.
- Editor: WebP / AVIF can't preview (Texture2D.LoadImage doesn't decode them).
- Mac multi-select: trackpad Force Touch jitter requires triple-click or tap-to-click.
- WebGL: `User-Agent` header forbidden; all `UnityWebRequest` paths must omit it.
