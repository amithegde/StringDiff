# StringDiff

A Visual Studio Code extension that allows you to compare two strings using VS Code's built-in diff viewer without creating any files on disk.

## Features

- Compare two strings side-by-side in an editable diff viewer
- Both the left and right panes are fully editable
- Paste text into either pane and see the differences highlighted in real-time
- No temporary files created - uses untitled documents that exist only in memory
- Clean and simple interface using VS Code's native diff viewer

## Usage

1. Run the "String Diff: Compare Strings" command using:
   - Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and search for "String Diff"
   - Right-click in the editor and select "String Diff: Compare Strings" from the context menu
   - Use the keyboard shortcut `Ctrl+Alt+D` (or `Cmd+Alt+D` on macOS)

2. A new diff editor will open with two untitled documents
3. Paste your first string into the left pane (Untitled-1)
4. Paste your second string into the right pane (Untitled-2)
5. The diff viewer will automatically highlight the differences

## Benefits

- No temporary files created - runs entirely in memory
- Quick comparison of strings from various sources (clipboard, databases, API responses, etc.)
- Edit either side to test different versions or make corrections
- All the power of VS Code's diff viewer available for string comparison
- Privacy-focused - nothing is written to disk

## Extension Settings

This extension doesn't add any settings yet.

## Release Notes

### 0.0.1

Initial release of StringDiff
