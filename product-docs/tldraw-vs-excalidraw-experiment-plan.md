# tldraw vs Excalidraw + Liveblocks Experiment Plan

## Experiment Overview

This document outlines a parallel experiment to evaluate tldraw vs Excalidraw, both integrated with Liveblocks, for building ProductPeer. The goal is to make an informed architectural decision based on concrete implementation experience rather than theoretical analysis.

## Key Research Findings

### tldraw + Liveblocks
- **Proven Integration**: tldraw went viral after adding Liveblocks multiplayer in just days
- **Native Support**: Uses Liveblocks Presence and Storage APIs out of the box
- **Custom Shapes**: First-class support for custom shape types
- **Clean Architecture**: Multiplayer layer stays isolated from core codebase
- **Performance**: Handles thousands of objects efficiently

### Excalidraw + Liveblocks
- **No Native Integration**: Would require custom implementation
- **Limited Extensibility**: Custom elements require modifying 14+ files
- **Hand-drawn Aesthetic**: Unique visual style that fits indie hacker vibe
- **Large Community**: More examples and third-party integrations
- **Simpler Core**: Less abstraction, easier to understand initially

## Lowest Hanging Fruit Features

Based on ProductPeer's PRD and what can be implemented quickly with tldraw + Liveblocks:

### Feature Set 1: Basic Collaborative Canvas
1. **Real-time Collaboration**
   - Multiple users on same board
   - Live cursors with names
   - Selection indicators
   - Presence list

2. **Basic Shapes**
   - Text
   - Sticky notes
   - Rectangles/shapes
   - Arrows/connectors
   - Freehand drawing

3. **Board Persistence**
   - Auto-save to Liveblocks
   - Shareable URLs
   - Board recovery on refresh

### Feature Set 2: Custom Blocks Foundation
1. **Card Block** (Custom Shape)
   - Title + body text
   - Click to expand modal
   - Collaborative editing
   - Visual styling

2. **CardStack Container**
   - Container for Cards
   - Add/remove Cards
   - Visual grouping
   - Drag between stacks

3. **Basic AI Integration**
   - Simple chat interface
   - "Generate sticky note" command
   - AI as collaborative user

### Feature Set 3: ProductPeer MVP
1. **Lean Canvas Template**
   - 9 CardStack sections
   - Pre-configured layout
   - Section labels
   - Proper spacing

2. **Enhanced Collaboration**
   - Private boards
   - Basic permissions (owner/editor/viewer)
   - Invite by email

3. **AI Domain Expert**
   - Problem section expert
   - Generate problem cards
   - Analyze assumptions

## Experiment Structure

### Repository Setup
```
ProductPeer/
├── tldraw-liveblocks-experiment/
│   ├── README.md
│   ├── product-docs/
│   │   ├── productpeer-bmf-prd.md (copied)
│   │   └── experiment-log.md
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── shapes/        # Custom tldraw shapes
│   │   └── lib/
│   └── package.json
│
└── excalidraw-liveblocks-experiment/
    ├── README.md
    ├── product-docs/
    │   ├── productpeer-bmf-prd.md (copied)
    │   └── experiment-log.md
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── blocks/        # Custom Excalidraw elements
    │   └── lib/
    └── package.json
```

## Success Metrics

### Technical Metrics
1. **Time to Implement** each feature set
2. **Lines of Code** required
3. **Performance** (FPS with 100+ elements)
4. **Bundle Size** comparison
5. **TypeScript Support** quality

### Developer Experience Metrics
1. **Setup Complexity** (1-10 scale)
2. **Documentation Quality** (1-10 scale)
3. **Debugging Difficulty** (1-10 scale)
4. **Extensibility** (1-10 scale)
5. **Community Support** (1-10 scale)

### Product Metrics
1. **Feature Completeness** vs PRD requirements
2. **UI/UX Polish** out of the box
3. **Collaboration Smoothness**
4. **AI Integration Feasibility**
5. **Cost Projection** at scale

## Checkpoints

### Checkpoint 1: Basic Canvas
- [ ] Both repos have working canvas
- [ ] Real-time collaboration functional
- [ ] Live cursors visible
- [ ] Basic shapes working
- **Decision Point**: Which feels more stable?

### Checkpoint 2: Custom Blocks
- [ ] Card block implemented
- [ ] CardStack container working
- [ ] Drag and drop functional
- [ ] Collaborative editing works
- **Decision Point**: Which was easier to extend?

### Checkpoint 3: ProductPeer Features
- [ ] Lean Canvas template
- [ ] AI integration started
- [ ] Permissions working
- [ ] Performance acceptable
- **Decision Point**: Which better supports our vision?

## Implementation Approach

### tldraw Path
1. Start with official Liveblocks + tldraw template
2. Create custom Card and CardStack shapes
3. Implement Lean Canvas as shape arrangement
4. Add AI through Liveblocks webhooks

### Excalidraw Path
1. Start with Excalidraw + custom WebSocket
2. Integrate Liveblocks Storage API
3. Build Card/CardStack as overlay components
4. Sync overlay state through Liveblocks
5. Add AI through same webhook pattern

## Risk Mitigation

### For tldraw Experiment
- **Risk**: Different visual aesthetic
- **Mitigation**: Test custom styling early

### For Excalidraw Experiment
- **Risk**: Complex Liveblocks integration
- **Mitigation**: Use proven patterns from research

## Final Decision Criteria

1. **Development Velocity**: Which allows faster feature development?
2. **Technical Debt**: Which creates less hacky workarounds?
3. **Scalability**: Which handles 100+ concurrent users better?
4. **Cost Efficiency**: Which uses Liveblocks more efficiently?
5. **Future Proof**: Which better supports our 5-phase roadmap?

## Next Steps

1. Create both GitHub repositories
2. Set up initial project structure
3. Copy PRD and essential docs
4. Begin Feature Set 1 implementation
5. Document progress in experiment logs
6. Schedule checkpoint reviews

## Resources

### tldraw + Liveblocks
- Starter: `npx create-liveblocks-app@latest --example nextjs-tldraw-whiteboard-storage --api-key`
- Docs: https://tldraw.dev
- Examples: https://examples.tldraw.com

### Excalidraw + Liveblocks
- Excalidraw: `npm install @excalidraw/excalidraw`
- Custom Implementation Guide: (this experiment will create it)
- Liveblocks Docs: https://liveblocks.io/docs