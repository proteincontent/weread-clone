# Reader Interface - Low-Fidelity Wireframe

## Overview
The reader interface provides an immersive reading experience for books, supporting EPUB, PDF, and TXT formats.

## Layout Structure

### Desktop View
```
+------------------------------------------------------+
| ← [Chapter 1: Introduction] The Great Gatsby →       |
+------------------------------------------------------+
|                                                      |
|   Lorem ipsum dolor sit amet, consectetur adipiscing  |
|   elit. Sed do eiusmod tempor incididunt ut labore    |
|   et dolore magna aliqua. Ut enim ad minim veniam,   |
|   quis nostrud exercitation ullamco laboris nisi ut   |
|   aliquip ex ea commodo consequat.                    |
|                                                      |
|   Duis aute irure dolor in reprehenderit in           |
|   voluptate velit esse cillum dolore eu fugiat nulla   |
|   pariatur. Excepteur sint occaecat cupidatat non     |
|   proident, sunt in culpa qui officia deserunt       |
|   mollit anim id est laborum.                         |
|                                                      |
|   Sed ut perspiciatis unde omnis iste natus error     |
|   sit voluptatem accusantium doloremque laudantium,  |
|   totam rem aperiam, eaque ipsa quae ab illo          |
|   inventore veritatis et quasi architecto beatae      |
|   vitae dicta sunt explicabo.                         |
|                                                      |
|                                                      |
+------------------------------------------------------+
| [Settings] [Bookmark] [Table of Contents] [Progress] |
+------------------------------------------------------+
```

### Mobile View
```
+----------------------------------------------------+
| ← The Great Gatsby →                               |
+----------------------------------------------------+
|                                                    |
|   Lorem ipsum dolor sit amet, consectetur          |
|   adipiscing elit. Sed do eiusmod tempor            |
|   incididunt ut labore et dolore magna              |
|   aliqua. Ut enim ad minim veniam, quis            |
|   nostrud exercitation ullamco laboris nisi         |
|   ut aliquip ex ea commodo consequat.              |
|                                                    |
|   Duis aute irure dolor in                         |
|   reprehenderit in voluptate velit esse            |
|   cillum dolore eu fugiat nulla pariatur.          |
|                                                    |
+----------------------------------------------------+
| [☰] [🔖] [Aa]                                      |
+----------------------------------------------------+
```

## Key Components

1. **Top Navigation Bar**
   - Back button (←)
   - Current chapter/section title
   - Next button (→)
   - Progress indicator (optional)

2. **Reading Area**
   - Clean, distraction-free layout
   - Adjustable margins and line spacing
   - Font size and type customization
   - Dark/light theme support

3. **Bottom Controls (Desktop)**
   - Settings button for reading preferences
   - Bookmark button to save current position
   - Table of Contents for navigation
   - Progress indicator

4. **Bottom Controls (Mobile)**
   - Menu button (☰) for expanded options
   - Bookmark button (🔖)
   - Text settings button (Aa)

## Reading Features

### Text Customization
```
+----------------------+
|   Text Settings      |
+----------------------+
| Font Size: [A][Aa][AA] |
| Theme: [☀️][🌙]        |
| Line Height: [—][—][—]  |
+----------------------+
```

### Table of Contents
```
+----------------------+
| Table of Contents    |
+----------------------+
| Cover                |
| Title Page           |
| ✓ Chapter 1: Intro   |
|   Chapter 2: Begin   |
|   Chapter 3: Middle  |
|   Chapter 4: End     |
| Index                |
+----------------------+
```

### Bookmark Management
```
+----------------------+
| My Bookmarks         |
+----------------------+
| "Chapter 1, Page 12" |
| "Important quote"    |
| "Character intro"    |
| + Add New Bookmark   |
+----------------------+
```

## User Interactions

1. **Navigation**
   - Swipe left/right to change pages (mobile)
   - Click arrows for chapter navigation
   - Jump to specific chapter via TOC

2. **Reading Progress**
   - Auto-save current position
   - Visual progress indicator
   - Resume from last position

3. **Customization**
   - Quick access to text settings
   - Instant theme switching
   - Save reading preferences

## Format-Specific Features

### EPUB Reader
- Reflowable text layout
- Chapter navigation
- Font and size customization
- Annotation support

### PDF Reader
- Fixed layout preservation
- Pinch-to-zoom
- Page navigation
- Thumbnail view

### TXT Reader
- Virtual scrolling for large files
- Encoding detection
- Simple formatting options

## Responsive Considerations

- **Desktop**: Full controls visible, wider reading area
- **Tablet**: Balanced layout, touch-friendly controls
- **Mobile**: Minimal controls, gesture-based navigation

## Next Steps

1. Implement EPUB reader with epub.js
2. Add PDF reader with PDF.js
3. Create unified reading settings component
4. Implement progress tracking system
5. Design bookmark and annotation features