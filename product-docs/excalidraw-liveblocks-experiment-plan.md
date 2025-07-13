# Excalidraw + Liveblocks Experiment Plan

## Objective
Implement ProductPeer's core features using Excalidraw + Liveblocks to achieve feature parity with the tldraw experiment and evaluate the integration complexity.

## Week 1: Basic Collaborative Canvas

### Day 1: Setup & Liveblocks Integration
```bash
# Initialize Next.js project
npx create-next-app@latest excalidraw-liveblocks-experiment --typescript --tailwind --app
cd excalidraw-liveblocks-experiment
npm install @excalidraw/excalidraw liveblocks @liveblocks/react
```

**Tasks:**
1. [ ] Set up GitHub repository
2. [ ] Integrate Excalidraw component
3. [ ] Create Liveblocks room provider
4. [ ] Build sync layer for elements
5. [ ] Document integration challenges

**Key Implementation:**
```typescript
// ExcalidrawLiveblocks sync layer
class ExcalidrawLiveblocksSync {
  constructor(room: Room, excalidrawAPI: ExcalidrawImperativeAPI) {
    // Sync Excalidraw state with Liveblocks Storage
  }
}
```

**Success Criteria:**
- Excalidraw renders properly
- Liveblocks connection established
- Basic element sync working

### Day 2-3: Collaboration Features
**Tasks:**
1. [ ] Implement live cursors
2. [ ] Add presence indicators
3. [ ] Create user list component
4. [ ] Add connection status
5. [ ] Handle sync conflicts

**Challenges to Solve:**
- Map Excalidraw state to Liveblocks Storage
- Implement cursor interpolation
- Handle Excalidraw's internal state updates

**Deliverables:**
- Working multiplayer canvas
- Performance baseline established
- Integration architecture documented

## Week 2: Custom Blocks (Card & CardStack)

### Day 4-5: Card Block Implementation
Since Excalidraw doesn't support custom elements easily, we'll use an overlay approach:

```typescript
// Card as overlay component
interface CardBlock {
  id: string
  excalidrawElementId: string // Links to rectangle
  title: string
  body: string
  position: { x: number, y: number }
  dimensions: { width: number, height: number }
}
```

**Tasks:**
1. [ ] Create Card overlay component
2. [ ] Sync Card position with Excalidraw rectangle
3. [ ] Implement click-to-edit modal
4. [ ] Store Card data in Liveblocks
5. [ ] Handle selection/deletion sync

**Implementation Strategy:**
- Use Excalidraw rectangles as Card placeholders
- Render React components as overlays
- Sync overlay state through Liveblocks
- Custom data stored separately from Excalidraw

### Day 6-7: CardStack Container
**Tasks:**
1. [ ] Create CardStack overlay system
2. [ ] Implement Card-to-Stack association
3. [ ] Build drag-drop with HTML5 API
4. [ ] Sync operations through Liveblocks
5. [ ] Handle z-index and layering

**Complex Parts:**
- Coordinate Excalidraw groups with overlays
- Maintain sync during drag operations
- Handle collaborative conflicts

## Week 3: ProductPeer MVP Features

### Day 8: Lean Canvas Template
**Tasks:**
1. [ ] Build template generator
2. [ ] Create 9 CardStack sections
3. [ ] Implement template library
4. [ ] Add section labels as text elements
5. [ ] Test collaborative template usage

**Template Structure:**
```typescript
// Generate Excalidraw elements + overlay data
function createLeanCanvasTemplate() {
  const excalidrawElements = [] // Rectangles and text
  const overlayData = [] // CardStacks and Cards
  return { excalidrawElements, overlayData }
}
```

### Day 9: AI Integration
**Tasks:**
1. [ ] Add AI chat interface
2. [ ] Create element generation logic
3. [ ] Implement AI presence indicator
4. [ ] Connect to Gemini API
5. [ ] Build Card content generator

**AI Challenges:**
- Generate both Excalidraw elements and overlay data
- Maintain consistency between layers
- Show AI operations visually

### Day 10: Access Control
**Tasks:**
1. [ ] Implement permission system
2. [ ] Create share dialog
3. [ ] Add view-only mode
4. [ ] Build invitation flow
5. [ ] Disable editing for viewers

**Permission Enforcement:**
- Prevent Excalidraw modifications
- Hide overlay edit controls
- Disable Liveblocks mutations

## Measurement Framework

### Integration Complexity Metrics
```typescript
interface ComplexityMetrics {
  customFilesCreated: number
  excalidrawAPIsUsed: number
  workaroundsNeeded: number
  syncLayerComplexity: 1-10
  maintenanceBurden: 1-10
}
```

### Performance Comparison
- Measure same metrics as tldraw
- Pay special attention to:
  - Overlay render performance
  - Sync operation latency
  - Memory usage with overlays

### Pain Points Documentation
1. **Excalidraw Limitations**
   - List every limitation encountered
   - Document workarounds required
   - Note maintenance concerns

2. **Integration Friction**
   - Liveblocks + Excalidraw gotchas
   - State management complexity
   - Type safety issues

## Daily Log Template

```markdown
## Day X: [Feature Name]

### Implementation Approach
How we worked around Excalidraw limitations:

### Excalidraw APIs Used
- 
- 

### Custom Code Required
- Files created:
- Lines of code:

### Comparison to tldraw
This would have been [easier/harder] with tldraw because:

### Screenshots/Videos
[Attach progress visuals]
```

## Risk Areas

### High Risk Items
1. **Overlay Synchronization**
   - Keeping overlays aligned with canvas elements
   - Handling zoom/pan coordination
   - Performance with many overlays

2. **Custom Element Limitations**
   - No native support for rich content
   - Hacky workarounds may break
   - Future Excalidraw updates risk

3. **Collaborative Edge Cases**
   - Overlay + element sync conflicts
   - Deletion coordination
   - Undo/redo complexity

### Mitigation Strategies
- Build abstraction layer early
- Document all workarounds
- Create regression tests
- Have rollback plan ready

## Success Metrics

**Week 1 Success:**
- Basic collab working with workarounds
- Sync latency acceptable (<200ms)
- Architecture documented

**Week 2 Success:**
- Card/CardStack overlays functional
- Drag-drop working (even if hacky)
- State management solid

**Week 3 Success:**
- Feature parity with tldraw experiment
- All hacks documented
- Maintenance burden assessed

## Unique Excalidraw Advantages to Explore

1. **Hand-drawn Aesthetic**
   - Test if users prefer this style
   - Evaluate brand fit

2. **Existing Features**
   - Libraries integration
   - Image support
   - Export capabilities

3. **Community**
   - Available examples
   - Third-party integrations
   - Plugin ecosystem

## Final Evaluation Questions

1. How many workarounds were needed?
2. How fragile is the integration?
3. What's the maintenance burden?
4. Can we achieve feature parity?
5. Is the aesthetic worth the complexity?

## Resources & References

- Excalidraw Docs: https://docs.excalidraw.com
- Excalidraw GitHub: https://github.com/excalidraw/excalidraw
- Liveblocks React: https://liveblocks.io/docs/api-reference/liveblocks-react
- Custom Elements Discussion: https://github.com/excalidraw/excalidraw/discussions/9252
- Integration Examples: [We'll create these]