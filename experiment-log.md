# Excalidraw + Liveblocks Integration Experiment Log

## Phase 1: Setup & Initial Integration

### Day 1: Project Setup

**Timestamp:** 2025-07-13

**Setup Process:**
1. Created Next.js project with TypeScript and Tailwind
2. Installed dependencies:
   - @excalidraw/excalidraw
   - liveblocks
   - @liveblocks/react

**Initial Observations:**
- Excalidraw package installation generated 23 peer dependency warnings
- This suggests potential version conflicts with React 19 (Next.js 15 uses React 19)
- tldraw had no such warnings in the previous experiment

**Complexity Metrics:**
```typescript
const setupComplexity = {
  customFilesCreated: 0, // Just started
  excalidrawAPIsUsed: 0, // Not yet
  workaroundsNeeded: 0, // TBD
  syncLayerComplexity: 0, // Not implemented
  maintenanceBurden: 2, // Already seeing peer dep warnings
}
```

### Next Steps:
1. Create basic Excalidraw component ✓
2. Explore Excalidraw's state management APIs ✓
3. Design sync layer architecture ✓

---

## Phase 1: Understanding Excalidraw State Management

### Key Findings:

1. **No Native Collaboration Support**
   - Excalidraw is designed as a single-user drawing tool
   - All multiplayer features must be built from scratch
   - This is a MAJOR difference from tldraw which has collaboration built-in

2. **State Management Complexity**
   - Elements array contains all drawable objects
   - AppState contains UI/view state
   - Both need manual synchronization for multiplayer
   - No built-in conflict resolution

3. **Custom Elements Not Supported**
   - Cannot create custom element types (like Card/CardStack)
   - Must use overlay approach with placeholder elements
   - This adds significant complexity

4. **APIs Available**
   - onChange callback for state changes
   - Imperative API for programmatic updates
   - No collaboration-specific APIs

**Complexity Metrics Update:**
```typescript
const analysisComplexity = {
  customFilesCreated: 3, // ExcalidrawCanvas, analysis doc, experiment log
  excalidrawAPIsUsed: 4, // onChange, excalidrawAPI, onPointerUpdate, imperative methods
  workaroundsNeeded: 2, // Dynamic import for SSR, will need overlay system
  syncLayerComplexity: 8, // High - everything manual
  maintenanceBurden: 7, // High - no native collab support
}
```

### Comparison Point:
In tldraw, collaboration was essentially:
```typescript
<Tldraw>
  <CollaborationProvider room={room} />
</Tldraw>
```

In Excalidraw, we need to build:
- Element synchronization
- Cursor tracking
- Presence system
- Conflict resolution
- Overlay management for custom blocks

---

## Phase 1: Building Custom Liveblocks Sync Layer

### Implementation Details:

**Files Created for Sync:**
1. `liveblocks.config.ts` - Type definitions and room context
2. `lib/ExcalidrawLiveblocksSync.ts` - Custom sync layer (104 lines!)
3. `components/CursorOverlay.tsx` - Cursor presence UI
4. `components/CollaborativeExcalidraw.tsx` - Integration component
5. `app/board/[boardId]/page.tsx` - Room provider setup

**Sync Layer Complexity:**
- Had to implement element synchronization manually
- Cursor tracking requires custom event listeners
- Conflict detection via `isRemoteUpdate` flag
- No built-in CRDT support like tldraw
- Manual batching for performance

**Major Workarounds:**
1. **Remote Update Detection**: 
   ```typescript
   private isRemoteUpdate = false; // Flag to prevent sync loops
   ```
   
2. **Element Change Detection**:
   - Manual comparison of elements
   - Tracking deletions separately
   - JSON stringify for deep comparison (performance concern!)

3. **Cursor Tracking**:
   - Document-level event listeners
   - Manual coordinate tracking
   - Custom overlay component

**Complexity Metrics Update:**
```typescript
const syncLayerComplexity = {
  customFilesCreated: 8, // All the sync-related files
  excalidrawAPIsUsed: 6, // updateScene, getSceneElements, etc.
  workaroundsNeeded: 5, // Remote flag, manual comparison, overlays, etc.
  syncLayerComplexity: 9, // Very high - everything manual
  maintenanceBurden: 8, // High - fragile sync logic
}
```

### Issues Encountered:

1. **No Collaboration Primitives**: Unlike tldraw's `useSync()` hook, we built everything from scratch

2. **State Sync Challenges**:
   - Excalidraw's internal state updates can trigger sync loops
   - Need careful flag management to prevent infinite updates
   - No built-in conflict resolution

3. **Performance Concerns**:
   - JSON.stringify for comparison is expensive
   - No incremental updates
   - All elements synced on every change

### Next Challenge: Custom Blocks (Card/CardStack)
Since Excalidraw doesn't support custom elements, we need to:
- Use rectangles as placeholders
- Build an overlay system
- Sync overlay positions with Excalidraw elements
- Handle interactions between canvas and DOM

This is getting complex fast!

---

## Phase 2: Card Overlay System Implementation

### The Overlay Approach

Since Excalidraw doesn't support custom elements, we had to:
1. Use rectangles as "placeholder" elements in Excalidraw
2. Build a parallel overlay system with React components
3. Sync positions between canvas and DOM
4. Handle interactions between two separate systems

**Files Created for Card System:**
1. `components/Card.tsx` - The Card component (150+ lines)
2. `components/OverlayManager.tsx` - Coordinates overlays with Excalidraw
3. `components/CustomToolbar.tsx` - UI to create Cards
4. Updated `CollaborativeExcalidraw.tsx` - Integration code

### Major Complexity Points:

1. **Position Calculation Hell**:
   ```typescript
   // We need to manually calculate screen positions
   const bounds = {
     x: canvasRect.left + element.x,
     y: canvasRect.top + element.y,
     // But this doesn't account for zoom/pan!
   };
   ```

2. **Dual State Management**:
   - Excalidraw has rectangle elements
   - Liveblocks has overlay data
   - Must keep both in sync
   - Deletion needs to happen in both places

3. **Interaction Conflicts**:
   - Canvas captures mouse events
   - Overlays need pointer-events
   - Z-index battles between systems
   - Click handling gets complex

4. **Performance Issues**:
   - DOM overlays on top of canvas
   - Recalculating positions on every change
   - No virtualization for many cards

### Workarounds Implemented:

1. **Placeholder Elements**: Using styled rectangles as Card placeholders
2. **Manual Position Sync**: Calculating overlay positions from element bounds
3. **Pointer Events Management**: Toggling pointer-events for interaction
4. **Modal Expansion**: Since inline editing fights with canvas

### Comparison with tldraw:

In tldraw, custom shapes are first-class:
```typescript
// tldraw approach
class CardShape extends BaseShape {
  // Built-in support for custom rendering
  // Automatic position handling
  // Native interaction support
}
```

In Excalidraw, we need:
- Placeholder elements
- Overlay components
- Position calculations
- Event handling workarounds
- State synchronization

**Complexity Metrics Update:**
```typescript
const phase2Complexity = {
  customFilesCreated: 12, // All files including overlays
  excalidrawAPIsUsed: 8, // More APIs for element manipulation
  workaroundsNeeded: 10, // Position calc, dual state, events, etc.
  syncLayerComplexity: 9, // Still very high
  maintenanceBurden: 9, // Extremely fragile system
}
```

### Critical Issues:

1. **Zoom/Pan Not Handled**: Overlay positions break when zooming/panning
2. **Performance at Scale**: Many cards = many DOM elements = slow
3. **Interaction Complexity**: Fighting between canvas and DOM events
4. **Maintenance Nightmare**: Any Excalidraw update could break overlays

This is already significantly more complex than the entire tldraw implementation!

---