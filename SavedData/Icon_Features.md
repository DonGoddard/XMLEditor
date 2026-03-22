**XML Editor WebGL**


**Problems:**

*   Input field editing.- stealing focus - PC/Mac/Editor work for demos
    
*   Can’t edit in rich text (has to flip from rich to raw to edit then back to rich)
    

**Features**

**Current:**

*   Platforms
    
    *   Accessible from web/PC/Mac/Linux/iOS/Android through any browser (supporting WebGL)
        
    *   Also by custom app built as a standalone for PC/Mac/Linux/Android/Apple
        
*   Point and click, touch and drag input. Minimal keyboard for typing in chat, notes, XML tags
    
*   Windows
    
    *   XML - Direct file or URL
        
        *   Drag & Drop (nodes, multi-nodes, between separate XML trees)
            
        *   XSD Validation
            
        *   Color coded (same as Visual Studio)
            
        *   Context Menu on keywords
            
    *   Notes - Markdown file display and editing
        
    *   Chat (AI) - Chat with various AI models from Google (Gemini), Anthropic (Claude), and OpenAI (Codex). Ready to integrate Seraphim (Gestalt)
        
        *   Secure API Key support through Cloudflare worker
            
    *   Debug Log - actual debug from Unity for tracking errors and bugs in rich text
        
    *   Gallery - images that are dynamically loaded for visual use. Drag & Drop onto desktop for background image
        
    *   Image - Image that can be displayed, scaled and used for any purpose. QR code currently for loading this app
        
*   Window UI Features
    
    *   Display - virtual render space of any content, scrollable, overlapping 
        
    *   Move, Bring to Front - click drag titlebar
        
    *   Resize - any edge or corner, ddl-click to expand to edge, custom cursors
        
    *   Snap - drag to edge or corner to resize and fit to screen (1/4 of screen for corners, left half, right half, to top for full screen)
        
    *   Titlebar - display filename or window name and compress by using ellipsis (…) if crushed when too small
        
    *   Hotkeys - Control-F to full screen window, Control-D to maximize render space to actual screen, Control-W to close a window, Esc to minimize all or restore all windows
        
    *   Dock - holds apps that load windows with content, show open and minimized indicator, animates, has hide/show all windows button at end
        
    *   Tooltips - sticky tooltips that show on most any feature with a 1.5 second delay (or no delay if were just on a tooltip and going to another one)
        
    *   Context Menus - a list of options based on context of what you’re clicking
        
        *   Background - Save all XML’s, Cascade, Tile, Hide, Restore Windows, Clear Background, Settings
            
        *   XML Window - Save XML, Show Line Numbers, Debug Print XML Tree, Close Window
            
    *   Buttons
        
        *   X - Close Window
            
        *   \_ - Minimize Window
            
        *   Edit/Done (Notes) - edit notes text
            
        *   Model (Chat AI) - choose AI model dropdown list
            
        *   Arrow (Chat AI) - send text to AI model with API key through Cloudflare worker
            
        *   Clear (Debug Log) - clear all text from window
            
        *   Copy (Debug Log) - copy to clipboard all text from window
            
        *   Search (XML) - dynamic search to find data with matching text
            
        *   Validate (XML) - color to show well-formed XML, can do XSD validation by pressing button
            
        *   Min/Max All Windows (Dock) - toggle minimizing and maximizing all windows with animation
            
    *   Save
        
        *   Desktop - Save/Restore all desktop windows positions and sizes and scroll position plus background image if any
            
        *   XML - Save/Restore file to GitHub
            
        *   Notes - Save/Restore file to GitHub
            
    *   HTML bool loading screen with fadeout
        
    *   JS Bridges - for various specialty functions like external drag and drop, GitHub read/write file access
        

**Almost ready (partially functions):**

*   Context Aware XML - can identify keywords and have custom context menu for any type (ie: ‘variable’ followed by constrained value you can type in or likely click and drag a control
    
*   Drag and Drop files external to app to show up on dock and be fully interactive
    

**Near future:**

*   Render MathML from Xml
    
*   Drag & Drop AI Architecture - drag by symbols and drawings