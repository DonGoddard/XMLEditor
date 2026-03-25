color=lime[Warning] [AppRegistry] Default-handler conflict for '.md': 'ToDoApp' vs 'NotesApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.md': 'ToDoApp' vs 'FeaturesApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.rtf': 'ToDoApp' vs 'FeaturesApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'BookApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'UMLApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'UMLGorpApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'polynomial_simpleApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'finite_diffApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'XmlUrlHttpsApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'XmlUrlHttpApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.xml': 'PlanetsApp' vs 'XMLFileApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.png': 'GalleryApp' vs 'ImageApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.jpg': 'GalleryApp' vs 'ImageApp'. Set defaultForExtensions on one to resolve.
[Warning] [AppRegistry] Default-handler conflict for '.jpeg': 'GalleryApp' vs 'ImageApp'. Set defaultForExtensions on one to resolve.
[Log] Loading GameSettings...

[Log]   GameSettings Loaded

[Log] -=- Running NOS (ver Recompiled since last build) built on 3/25/2026 9:43 AM-=-

[Log] [UIManager] Loading Desktop Layout from GitHub...

[Log] [UIManager] Instant restore from local cache.

[Log] [Uploader] Starting fetch for DesktopLayout.nos (ID: 1)

[Log] [NOS] Boot sequence finalized.

[Log] [BackgroundDisplay] OnEnable started.

[Log] [BackgroundDisplay] Label created and added to WindowLayer.

[Log] [BackgroundDisplay] No currentWallpaperUrl to restore.

[Log] [UIManager] Restoring Layout. Background: digital-transformation-corporate-wallpaper.jpg, Windows: 2

[Log] [UIManager] Found BackgroundDisplay, calling SetWallpaper directly.

[Log] [BackgroundDisplay] Loading wallpaper: file:///Users/dongoddard/Unity/Projects/NOS/Assets/StreamingAssets/Backgrounds/digital-transformation-corporate-wallpaper.jpg

[Log] <color=lime>[Uploader] ProcessRequest #1 success.</color>

[Log] [Uploader] Data received: 1893 chars

[Log] <color=lime>[Uploader] Fetch #1 success!</color>

[Log] [UIManager] Layout Data Received (1891 bytes).

[Log] [WindowBase] Scroll Restored for Debug Log(Clone): 795.2381

[Log] <color=lime>[BACKGROUND SUCCESS]</color> digital-transformation-corporate-wallpaper.jpg loaded.



Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^