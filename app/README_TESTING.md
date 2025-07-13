# Testing Instructions

## Prerequisites
1. Add a Liveblocks public key to `app/.env.local`:
   ```
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_key_here
   ```
   Get a free key at: https://liveblocks.io

2. Start the development server:
   ```bash
   cd app
   npm run dev
   ```

## What to Test

### 1. Basic Collaboration (http://localhost:3000/test-collab)
- Click "Test Collaboration" on the home page
- Open the generated board link in two browser windows
- Test:
  - ✏️ Draw shapes in one window → should appear in the other
  - 👆 Move cursor → should see other user's cursor
  - 🎨 Change colors/styles → should sync
  - 🔄 Select elements → selection should be visible to other user

### 2. Card System
- Click "+ Add Card" button in the top-left toolbar
- A blue rectangle with overlay should appear
- Test:
  - 👆 Click the card → opens modal
  - ✏️ Click "Edit" in modal → inline editing mode
  - 💾 Save changes → should sync to other users
  - 🗑️ Delete card → removes both rectangle and overlay

### 3. Known Issues to Verify
These are problems we discovered during implementation:

1. **Zoom/Pan Breaks Overlays**:
   - Zoom in/out with Ctrl+Scroll
   - Card overlays won't follow properly ❌

2. **Performance with Many Cards**:
   - Create 20+ cards
   - Notice lag when moving/selecting ❌

3. **Click Conflicts**:
   - Try selecting the Excalidraw rectangle under a card
   - Interaction is confusing ❌

4. **Sync Delays**:
   - Make rapid changes
   - Sometimes sync gets out of order ❌

## Comparison Points
If you've used tldraw, notice how:
- tldraw has native custom shapes (no overlays needed)
- tldraw's collaboration "just works" 
- Excalidraw needs all these workarounds

## Bug Report Format
If you find issues, note:
- What you did
- What happened
- What should have happened
- Browser console errors

This helps document the complexity!