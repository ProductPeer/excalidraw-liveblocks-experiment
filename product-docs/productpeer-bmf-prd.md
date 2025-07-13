# ProductPeer - BMF PRD

## Vision
An AI-native infinite canvas built for indie hackers and solopreneurs to ideate, validate, and evolve their business models with the help of an AI product peer.

## Product Development Philosophy
- **AI-native from day 1**: Set everything up for AI collaboration from the get-go
- **AI as collaborator**: AI acts just like another user, not a separate system
- **Canvas + AI together**: Build both capabilities in parallel, not sequentially
- **Progressive AI enhancement**: Start with simple generation, evolve to full partner

## ProductPeer as an actual product peer
- **Uses right tool for the job**: Knows when and where to use which tools
- **Keeps it straight**: Doesn't tolerate BS, especially on non-validation activities
- **Talks normal**: Sounds down to earth, rather than too corporate and formal
- **Demands action**: Follows up on commitments to validate ideas; accountability
- **Shoots the shit**: Always ready to be a sounding board to bounce ideas around

## ProductPeer: The AI Startup Accountability Partner
- **Personality**: Supportive but direct, like an experienced, well, product peer
- **Core Functions**:
  - Analyze Lean Canvas for risky assumptions
  - Suggest appropriate validation patterns
  - Track experiment progress
  - Send gentle (or not-so-gentle) nudges when progress stalls
  - Celebrate wins and learn from failures
  - Provide context-aware advice
  - Gamify validation exercises to make process fun!

## Core User Journey (Ideal Version / Minimum Loveable Product)
1. **Start**: Create account → Create project → Create board
2. **Ideate**: Add Lean Canvas, brainstorm with sticky notes
3. **Analyze**: ProductPeer identifies riskiest assumptions
4. **Validate**: Get Validation Pattern recommendations
5. **Execute**: Track experiments with AI accountability
6. **Evolve**: Update Lean Canvas, see timeline evolution
7. **Share**: Public board links for feedback

## Development Strategy

### Progressive AI Enhancement Strategy

**Phase 1: Foundation** - AI with full board awareness from day 1
- Can see and understand entire board spatially
- Simple generation (Mermaid diagrams, basic blocks)
- Knows where elements are and their relationships
- Basic suggestions and assistance

**Phase 2: Smart Organization** - Enhanced spatial intelligence
- Auto-organize and group related elements
- Suggest better layouts and arrangements
- Understand patterns in how users work
- Generate more complex structures

**Phase 3: Domain Expertise** - Business model specialist
- Deep understanding of Lean Canvas and validation
- Multi-agent system with specialized experts
- Contextual advice based on board content
- Proactive suggestions for next steps

**Phase 4: Accountability Partner** - Active validation coach
- Track experiments and commitments
- Follow up on progress
- Celebrate wins, learn from failures
- Push users to take action

**Phase 5: Full Product Peer** - Complete AI collaborator
- Combines all previous capabilities
- Acts as experienced co-founder
- Deep personalization to user's style
- Category-defining AI-native product

This progression ensures AI has fundamental capabilities (seeing the whole board) from the start, then adds sophistication and domain expertise over time.

## Product Architecture

### Conceptual Hierarchy
```
Account (Individual/Team/Org)
└── Projects (many per account)
    └── Boards (many per project - the infinite canvas)
        └── Elements (on Board)
            ├── Blocks (All atomic elements)
            │   ├── Basic Blocks (Excalidraw built-in)
            │   │   ├── Text box
            │   │   ├── Sticky note
            │   │   ├── Shape (rectangle, circle, arrow, etc.)
            │   │   ├── Image
            │   │   ├── Connector/Line
            │   │   └── Freehand drawing
            │   └── Custom Blocks (ProductPeer-specific)
            │       ├── Card (rich content with modal)
            │       ├── CardStack (container with AI expert)
            │       ├── Timeline block (future)
            │       ├── Validation tracker (future)
            │       └── Metric block (future)
            └── Templates (Composed of blocks)
                ├── Lean Canvas (9 CardStacks + AI experts)
                ├── Lean Canvas Timeline (multiple Lean Canvases)
                ├── Validation Playbook
                ├── Validation Playbook Collection
                ├── Customer Journey Map
                ├── Customer Persona
                ├── Problem Statement
                ├── Solution Statement
                ├── Pitch Deck
                ├── SWOT Analysis
                ├── Porter 5 Forces
                ├── Pirate Metrics - AAARRR (6 funnel stages)
                └── More Custom Templates...
```

## Key Features (based on Conceptual Hierarchy)

### Board (Infinite Canvas)
- **Definition**: A limitless workspace where users can place, arrange, and connect elements
- **Inspiration**: Whimsical board, Miro board, FigJam space, ClickUp whiteboard
- **Key Features**:
  - Pan and zoom navigation
  - Grid/snap alignment
  - Real-time collaboration ready
  - Performance optimization for thousands of elements
  - Board templates (blank, with starter content)
  - Full undo/redo support

### Blocks (Building Blocks)
- **Definition**: Atomic elements that serve as the foundation for all board content
- **Inspiration**: Notion blocks, Whimsical shapes, Excalidraw elements
- **Categories**: 2 main types: Basic Blocks (comes with excalidraw) and Custom Blocks (we'll build these)

#### Basic Blocks (Excalidraw Built-in)
- **Text block**: Simple text with basic formatting
- **Sticky note**: Quick thoughts with color coding
- **Shapes**: Rectangle, circle, diamond, arrow
- **Image**: Upload or paste images
- **Connector**: Lines that connect elements
- **Freehand**: Drawing tool for sketches

#### Custom Blocks (ProductPeer-specific)
- **Card**: Rich content block inspired by Whimsical
  - Click to open modal with full document
  - Inline editing for quick changes
  - Unique ID format: `${parentId}-${index}-${slug}`
  - Selection states and keyboard navigation
  - Auto-expanding textarea
  - Delete on selection
  
- **CardStack**: Container for multiple Cards
  - Drag-and-drop reordering within stack
  - Add new cards with (+) button
  - Loading and error states
  - Responsive layout
  - Acts as a section in templates like Lean Canvas
  
- **Future Custom Blocks**:
  - Timeline block (for version history)
  - Validation tracker (experiment progress)
  - Metric block (live data integration)
  - AI suggestion block (contextual recommendations)

- **Core Properties** (all blocks):
  - Unique ID
  - Position (x, y)
  - Dimensions (width, height)
  - Style (color, stroke, fill)
  - Content (varies by block type)
  - AI metadata (if generated/modified by AI)
  - Custom data (for rich blocks like Card)

### Templates (Made of Blocks; Infused with AI)
- **Definition**: Pre-designed arrangements of blocks that solve specific use cases
- **Inspiration**: Whimsical Templates, Notion templates, Excalidraw libraries
- **How they work**:
  - Stored in Template Library (like Excalidraw's library feature)
  - Drag from library onto canvas
  - Automatically expands into constituent blocks
  - Each block remains individually editable
  - Can be saved back to library as custom templates

#### Template Development Strategy
1. **Phase 1**: Basic blocks first (text, shapes, sticky note)
2. **Phase 2**: Custom blocks next (card, card stack, timeline)
3. **Phase 3**: Infuse custom blocks with AI (i.e: UVP expert in UVP card stack)
4. **Phase 4**: Design simple templates with both basic and custom blocks
5. **Phase 5**: Design bigger templates (templates which contain templates, i.e: Lean Canvas Timeline)
6. **Phase 6**: AI-generated templates (templates we didn't think of)
7. **Phase 7**: Community template marketplace (kinda already built-in w/ excalidraw library)

#### Core Templates
- **Lean Canvas**: 
  - 9 CardStack sections for business model components
  - Each CardStack has a specialized AI expert "brain"
  - AI experts understand their specific domain deeply (e.g., Problem Expert focuses on customer pain points)
  - Lead Lean Canvas Agent orchestrates all 9 experts
  - Each CardStack contains multiple Cards (ideas/assumptions)
  - Cards support rich content with modal expansion
  - Drag-and-drop cards between sections
  - Sections: Problem, Solution, Key Metrics, UVP, Channels, Customer Segments, Cost Structure, Revenue Streams, Unfair Advantage
  
- **Lean Canvas Timeline**: 
  - Container template that holds multiple Lean Canvases
  - Shows evolution of business model over time
  - Git-style versioning and comparison
  - AI tracks changes and suggests pivots
  
- **Validation Patterns**: 
  - Experiment design templates
  - Pre-filled with best practices
  - AI suggests which pattern based on your riskiest assumption
  - Types: Customer interviews, landing pages, concierge MVP, smoke tests

- **Pirate Metrics (AAARRR)**:
  - 6 Funnel Stage experts (Awareness through Revenue)
  - Lead Pirate Metrics Agent coordinates funnel optimization
  - Each stage expert understands conversion optimization for their phase


## Account Hierarchy (for RBAC: Role-Based Access Management)

```
Organization Account
├── Team Account A
│   ├── Individual Account (John - Designer)
│   ├── Individual Account (Sarah - Developer)
│   └── Individual Account (Lisa - PM)
├── Team Account B
│   ├── Individual Account (Mike - Marketer)
│   └── Individual Account (Emma - Sales)
└── Individual Account (CEO - Direct org member)

Standalone Structures:
Team Account (no org)
├── Individual Account (Freelancer 1)
└── Individual Account (Freelancer 2)

Individual Account (Solo indie hacker)
```

**Account Types & Relationships:**
- **Individual Account**: 
  - Basic unit - every user has one
  - Can exist standalone (indie hackers)
  - Can join teams/orgs while maintaining individual identity
  
- **Team Account**:
  - Collection of individuals working together
  - Shared projects and boards
  - Can exist standalone or within an org
  
- **Organization Account**:
  - Umbrella for multiple teams
  - Enterprise features and billing
  - Centralized administration

**Reference Models:**
- **GitHub**: Users → Teams → Organizations
- **Notion**: Personal → Teamspaces → Enterprise
- **Whimsical**: Individual → Team workspaces

### Collaboration & Access Management

**Board Access Levels:**
```
Owner (Creator)
├── Can delete board
├── Can manage all permissions
├── Can invite/remove any member
└── Full edit capabilities

Admin
├── Can manage permissions (except owner)
├── Can invite/remove members
├── Full edit capabilities
└── Cannot delete board

Editor
├── Can create/edit/delete elements
├── Can use AI features
├── Can see other collaborators
└── Cannot manage permissions

Viewer
├── Can view board in real-time
├── Can see cursor movements
├── Cannot make changes
└── Cannot use AI features

Commenter (Phase 2)
├── Can view board
├── Can add comments
├── Cannot edit elements
└── Cannot use AI features
```

**Invitation Flow:**
1. Owner/Admin clicks "Share" button
2. Enter email addresses or select from team members
3. Choose permission level for each invitee
4. Optional: Add message to invitation
5. Invitees receive email with secure link
6. Upon acceptance, they join the board's access list

**Real-time Collaboration Features:**
- Live cursors with user names/avatars
- Presence indicators (who's currently viewing)
- Selection highlighting (see what others are working on)
- Conflict resolution for simultaneous edits
- "Follow mode" to track another user's viewport
- Activity feed showing recent changes

**Access Management Implementation:**
*See technical implementation details in [technical-considerations.md](./technical-considerations.md#access-management-implementation)*

## AI Context Engineering (based on RBAC rules)

### AI Context Hierarchy
```
Org-level AI (Future)
├── Has access to all accounts in organization
├── Can see all projects across all accounts
├── Can see all boards across all projects
└── Can see all blocks across all boards

Account-level AI (Future)
├── Has access to current account only
├── Can see all projects in account
├── Can see all boards across projects
└── Can see all blocks across boards

Project-level AI (Future)
├── Has access to current project only
├── Can see all boards in project
└── Can see all blocks across boards
└── Cannot see other projects

Board-level AI (MVP Priority)
├── Has access to current board only
├── Can see all blocks on board
├── Cannot see other boards
└── Communicates with Section-level AIs when needed

Section-level AI (MVP Priority)
├── Has access to specific section/template/frame only
├── Can see blocks within its section (e.g., CardStack)
├── Cannot see blocks outside its section
├── Communicates with Board-level AI for broader context
└── Most focused context management
```

### Context Levels
1. **Section-level AI** *(MVP Priority)*
   - Scope: Specific section, template, or selected frame
   - Use case: Deep domain expertise within a focused area
   - Context size: Blocks within the section only (e.g., one CardStack)
   - Perfect for: Specialized analysis, template-specific guidance
   - Examples:
     - Lean Canvas: Each of 9 CardStacks has its own AI expert
     - Selected frame: AI focuses on just the grouped elements
     - Individual template: AI understands template-specific semantics

2. **Board-level AI** *(MVP Priority)*
   - Scope: Current board only
   - Use case: Overall board analysis and orchestration
   - Context size: All blocks on current board
   - Perfect for: Cross-section insights, board-wide patterns
   - Coordinates: Multiple Section-level AIs when needed

3. **Project-level AI** *(Future)*
   - Scope: All boards in project
   - Use case: Cross-board insights
   - Context size: Potentially hundreds of boards
   - Perfect for: Project-wide patterns, progress tracking

4. **Account-level AI** *(Future)*
   - Scope: All projects/boards in account
   - Use case: Comprehensive business insights
   - Context size: Potentially thousands of blocks
   - Perfect for: Portfolio analysis, learning from past projects

5. **Org-level AI** *(Future)*
   - Scope: Entire organization
   - Use case: Enterprise knowledge management
   - Context size: Massive - all organizational knowledge
   - Perfect for: Team insights, organizational learning

### AI Capabilities
- **Core Operations**:
  - Full CRUD on all board blocks
  - "See" everything on the current board
  - Suggest next actions based on board content
  - "Return to checkpoint" (Cursor-inspired undo for AI actions)

- **Tools**:
  - Web search (Firecrawl/Perplexity)
  - Deep research
  - CRUD operations on all blocks
  - Smart template orchestration
  - Validation pattern recommendations
  - Quotes Library (account-level feature)

- **Accountability Features**:
  - Track experiment progress
  - Remind about pending validations
  - Celebrate completed milestones
  - Suggest when to pivot vs persevere

- **Interaction Patterns**:
  - Drag & drop blocks into chat (Cursor-inspired)
  - Contextual AI assistance based on block type
  - Example: "What's the riskiest assumption in this Lean Canvas?"
  - Riskiest assumption analysis at two levels:
    - Building block level (e.g., entire "Revenue Streams")
    - Card level (e.g., "Customer Segment #1")

### Smart Loading States
- **Quotes Library**: Contextual quotes during loading
  - Startup wisdom: "Fall in love with the problem, not your solution"
  - Motivational: "Dream big. Start small."
  - Tactical: "Build something people want"
  - Author quotes: Naval, PG, others
  - Context-aware: Quotes match user's journey stage

### Avoiding Retrofitting Issues
**Data Model Design**
- Every block has a unique ID from the start
- All mutations go through a command bus
- Board state is serializable and versionable
- Clear separation between view and data layers

**API Design**
- RESTful + WebSocket APIs from day 1
- Same endpoints for human and AI actions
- Consistent permission model
- Audit trail for all operations

**Frontend Architecture**
- Excalidraw's extensible architecture allows AI features integration
- Command pattern makes AI actions indistinguishable from human actions
- React component architecture stays flexible


## Architecture and Tech Stack

### Key Architectural Decisions

1. **Canvas Library**: Excalidraw (open-source)
   - Canvas-based rendering for performance
   - Built-in collaboration saves months of work
   - Hand-drawn aesthetic perfect for ideation
   - Active open-source community
   - Extensible architecture
   - Note: Access management not included (only in Excalidraw+)
   - We build our own permission system on top

2. **Development Strategy**: AI-native canvas from day 1
   - Build canvas and AI features in parallel
   - Real-time collab infrastructure shared by humans and AI
   - Validate AI-enhanced UX early with users
   - AI designed as another "collaborative user"

3. **Repository Architecture**: Single monorepo with modular backend
   - productpeer/frontend (React/TypeScript/Excalidraw)
   - productpeer/backend (Kotlin/Micronaut multi-module Gradle)
   - Module-based architecture for scalability and team collaboration
   - AI module can be cleanly extracted to separate service later
   - Domain modules keep business logic separate from infrastructure

4. **Real-time Collaboration & Access Management**: Core from Phase 1
   - Uses Excalidraw's collaboration capabilities
   - Custom access management (not available in open-source Excalidraw)
   - Board-level permissions (owner, admin, editor, viewer)
   - Private by default with explicit invitations
   - Sets foundation for AI as collaborator
   - Avoids costly retrofitting later

5. **AI in Kotlin**: LLM APIs, not ML
   - ProductPeer needs API calls, not data science
   - Keeps architecture simple
   - One language for backend team (recommended by Khoa, our backend dev)
   - Python can be added later for advanced features

### Technology Stack

**Frontend**
- Core: React + TypeScript + Vite
- Canvas: Excalidraw (with customizations)
- UI: shadcn/ui + tweakcn (for theme-ing)
- Components: shadcn-based libs
- State: Zustand (integrates well with Excalidraw)
- Analytics: PostHog React SDK

**Backend + AI**
- Core: Kotlin + Micronaut (multi-module Gradle)
- ORM: Exposed (not JPA/Hibernate)
- Database: Supabase (PostgreSQL + Auth + Realtime) with PostGIS
- Cache: Redis/Redisson (for collaboration state & distributed locks)
- AI: Gemini API (primary), LangChain integration ready
- Vector Search: Supabase pgvector
- Architecture: Modular design with core/app/domain separation

**Infrastructure**
- Frontend Hosting: Vercel
- Backend Hosting: Railway
- Monitoring: PostHog + Sentry
- Storage: Supabase Storage
- External APIs: Gemini, Anthropic, Perplexity/Firecrawl

### Remaining Decisions

1. **AI Context Progression**: When to add project/account-level AI?
   - Recommendation: Launch with board-level, expand based on usage

2. **Board Size Limits**: Truly infinite or practical limits?
   - Recommendation: Soft limits based on performance testing

3. **Individual ↔ Team Account Migration**: How do users upgrade?
   - Recommendation: Follow GitHub model - individuals can create/join teams

4. **Vector Database Choice**: Pinecone vs Weaviate vs pgvector?
   - Recommendation: Start with pgvector (Supabase), migrate if needed

## Repository Structure

### ProductPeer Repository Structure
```
productpeer/
├── frontend/               # React + Excalidraw app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── canvas/     # Excalidraw wrapper & extensions
│   │   │   ├── library/    # Template library UI
│   │   │   ├── ai-chat/    # AI chat interface (future)
│   │   │   ├── auth/       # Login/signup forms
│   │   │   ├── sharing/    # Share dialog, permissions UI
│   │   │   └── common/     # Buttons, modals, inputs
│   │   ├── features/       # Feature-specific modules
│   │   │   ├── boards/     # Board CRUD, listing, routing
│   │   │   ├── blocks/     # Custom blocks (future: Card, CardStack)
│   │   │   ├── collaboration/ # WebSocket, presence, cursors
│   │   │   ├── templates/  # Template management
│   │   │   └── auth/       # Auth logic, user context
│   │   ├── services/       # External service integrations
│   │   │   ├── api/        # Backend API client
│   │   │   ├── websocket/  # WebSocket client
│   │   │   ├── storage/    # Supabase storage client
│   │   │   └── auth/       # Supabase auth client
│   │   ├── stores/         # Zustand state management
│   │   │   ├── board.store.ts
│   │   │   ├── auth.store.ts
│   │   │   └── collaboration.store.ts
│   │   ├── types/          # TypeScript interfaces
│   │   ├── utils/          # Helper functions
│   │   └── config/         # App configuration
│   ├── public/             # Static assets
│   ├── .env.example        # Environment variables template
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── backend/               # Kotlin + Micronaut multi-module architecture
    ├── app/               # Application-specific modules
    │   ├── api-application/      # Main entry point, controllers, WebSocket handlers
    │   │   └── src/main/kotlin/com/productpeer/
    │   │       ├── Main.kt
    │   │       ├── controllers/   # REST endpoints
    │   │       ├── websocket/     # Real-time features
    │   │       └── config/        # App configuration
    │   ├── module-client/        # External API clients (future)
    │   ├── module-repository/    # Data access layer
    │   │   └── src/main/kotlin/com/productpeer/repository/
    │   │       ├── account/      # Account-related repositories
    │   │       ├── board/        # Board and block repositories
    │   │       ├── template/     # Template repositories
    │   │       └── ai/           # AI conversation repositories
    │   └── module-exception/     # Custom exceptions and error handling
    │
    ├── core/              # Reusable infrastructure modules
    │   ├── module-database/      # Exposed ORM utilities, PostGIS support
    │   ├── module-logging/       # Structured logging framework
    │   ├── module-retrofit/      # HTTP client utilities
    │   ├── module-utility/       # Common utilities
    │   ├── module-coroutine/     # Kotlin coroutine extensions
    │   ├── module-config/        # Configuration management
    │   └── module-redis/         # Redis for caching/distributed locks
    │
    ├── domain/            # Future: Domain-specific modules
    │   ├── module-account/       # Account management logic
    │   ├── module-access/        # RBAC and permissions
    │   ├── module-board/         # Board and collaboration logic
    │   ├── module-ai/            # AI integration and orchestration
    │   └── module-template/      # Template management
    │
    ├── build.gradle           # Root build configuration
    ├── settings.gradle        # Module definitions
    └── docker-compose.yml     # Local development services
```

### Backend Architecture Philosophy

**Module-Based Design**:
- **Separation of Concerns**: Each module has a single, well-defined responsibility
- **Reusability**: Core modules can be shared across multiple applications
- **Scalability**: Easy to add new modules as features grow
- **Team Collaboration**: Different team members can own different modules
- **Testing**: Modules can be tested in isolation

**Module Types**:
1. **Core Modules** (`core/`): Infrastructure and utilities used across the application
   - No business logic, pure technical capabilities
   - Examples: database connections, logging, HTTP clients

2. **App Modules** (`app/`): Application entry points and API layer
   - Controllers, WebSocket handlers, API documentation
   - Orchestrates business logic from domain modules

3. **Domain Modules** (`domain/` - future): Business logic and domain models
   - Account management, RBAC, AI orchestration
   - Can depend on core modules but not on app modules

**Benefits for ProductPeer**:
- **AI Module Isolation**: AI logic can be cleanly separated and potentially extracted later
- **Feature Flags**: Easy to enable/disable features by including/excluding modules
- **Performance**: Only load what's needed for each deployment
- **Microservices Ready**: Modules can be extracted into separate services if needed

**Why monorepo is better for ProductPeer:**
1. Shared types/interfaces - Frontend and backend can share TypeScript interfaces/types
2. Atomic commits - Changes that affect both frontend and backend are in one commit
3. Simplified CI/CD - One pipeline, coordinated deployments
4. Easier refactoring - Move code between frontend/backend without PR coordination
5. Single source of truth - One README, one set of docs, one issue tracker
6. Better for AI context - AI can see the entire codebase in one place

**Future-Proofing with Modular Architecture:**
- **New Features as Modules**: Each major feature becomes a new domain module
- **AI Module Evolution**: Start in `domain/module-ai`, can extract to separate service
- **Python Integration**: Can add `module-python-bridge` for Python-specific AI features
- **Microservices Path**: Any module can become a standalone service
- **Module Examples for Future Features**:
  - `module-marketplace`: Template marketplace functionality
  - `module-analytics`: User behavior tracking
  - `module-billing`: Subscription management
  - `module-export`: Advanced export capabilities
  - `module-integrations`: Third-party service connections

**For When We Might Need Python Later:**
- Custom ML models for pattern recognition
- Advanced data analysis of user behaviors
- Computer vision for sketch recognition
- Complex NLP beyond LLM APIs
- Integration with Python-only AI tools
- Can be added as `module-ml` with Python sidecar


## Development Roadmap

### Phase 0: Internal Team Canvas
**Goal: Self-hosted Excalidraw with real-time collaboration for ProductPeer strategy planning**
1. Create 1-to-1 Excalidraw clone with full functionality
2. **Real-time Collaboration**:
   - WebSocket-based collaboration server
   - Live cursors and presence indicators
   - Conflict resolution for simultaneous edits
3. **Cloud Persistence**:
   - Supabase integration for board storage
   - Backend API endpoints for CRUD operations
   - Shareable board URLs
4. **Basic RBAC**:
   - Simple authentication (email/password, magic links)
   - Board access levels (Owner, Editor, Viewer)
   - Share functionality with access control
5. **Production Deployment**:
   - Frontend on Vercel at productpeer.com
   - Backend on Railway with WebSocket support
   - Collaboration server for real-time sync
6. Create our internal ProductPeer strategy board
7. Use this as our living strategy document

### Phase 1: AI-Native Canvas Foundation
**Goal: Collaborative whiteboard with AI assistance and access control**
1. Set up productpeer monorepo structure (frontend, backend)
2. Implement Excalidraw infinite canvas with basic blocks
3. **Account/Project/Board Hierarchy**:
   - Individual accounts (primary focus for MVP)
   - Project creation and management
   - Board creation within projects
   - Supabase Auth integration
4. **Real-time Collaboration & Access Management**
   - Leverage Excalidraw's WebSocket collaboration
   - Board-level permissions (Owner, Admin, Editor, Viewer)
   - Private boards by default
   - Email invitations with role selection
   - Live cursors and presence indicators
5. **AI Foundation**:
   - Board-level AI context (MVP priority)
   - Natural language to Mermaid diagram generation
   - AI respects board permissions (RBAC-aware)
   - Simple chat interface below canvas
   - Gemini API integration
6. **Template Library V1**:
   - Basic templates using Excalidraw's library
   - Meeting notes, brainstorming boards
   - Save custom arrangements
7. Implementation of core patterns (event-driven, spatial indexing)

### Phase 2: Enhanced Canvas with Custom Blocks
**Goal: Feature parity with whiteboard tools + custom blocks foundation**
1. **Advanced Blocks**: images, freehand drawing, enhanced connectors
2. **Custom Block Framework**:
   - Implement Card block with modal expansion
   - Implement CardStack for containing Cards
   - Drag-and-drop between CardStacks
   - Rich text editing within Cards
3. **Simple Templates**: flowcharts, mind maps, org charts
   - Drag from library, auto-expand to blocks
   - Each block remains editable
4. **Enhanced Access Management**
   - Role-based permissions (admin, editor, viewer, commenter)
   - Team-level access (invite entire team to board)
   - Guest links with expiration dates
   - Activity history and audit logs
5. Undo/redo system with command pattern (including AI actions)
6. **AI Feature: Smart board organization**
   - "Organize my board" command
   - AI suggests better spatial arrangements
   - Auto-grouping related elements (including CardStacks)
7. **AI Feature: Context-aware suggestions**
   - Based on board content, suggest what to add next
   - "What's missing?" analysis
   - AI can suggest Cards to add to CardStacks
8. Export functionality (PNG, PDF) with permission controls
9. Performance optimization for large boards

### Phase 3: AI as Collaborative Partner
**Goal: Transform AI from tool to partner**
1. **Section-level AI Implementation**:
   - AI experts for specific CardStacks
   - Focused context management per section
   - Communication between Section and Board-level AI
2. **Enhanced AI Capabilities**:
   - Drag & drop blocks into chat for context
   - AI can CRUD any block on board
   - Smart block generation from prompts
   - "Expand on this" for selected blocks
3. **ProductPeer Personality**:
   - Implement accountability features
   - Validation suggestions based on assumptions
   - Track commitments and follow up
   - Gamification elements for validation
4. **Advanced AI Features**:
   - "Return to checkpoint" for AI actions
   - Visual indicators of AI focus
   - AI evaluation framework
5. **User Journey Support**:
   - Guide users through Ideate → Analyze → Validate flow
   - Contextual help based on board state

### Phase 4: Smart Templates & ProductPeer Identity
**Goal: Differentiated product for indie hackers**
1. **Core Business Templates**:
   - **Lean Canvas**: 9 CardStack sections with AI experts
   - **Validation Patterns**: Pre-built experiment templates
   - **Customer Journey Map**: CardStacks for each stage
   - **SWOT Analysis**: 4 CardStacks with strategic AI
   - **Pirate Metrics**: 6 funnel stages with conversion experts
2. **Multi-Agent AI System**:
   - 9 specialized experts for Lean Canvas sections
   - Lead orchestrator for each template type
   - Smart routing based on context
   - Section-level expertise (Problem Expert, Solution Expert, etc.)
3. **Template Intelligence**:
   - Generate Cards from natural language
   - Identify riskiest assumptions across board
   - AI-powered card movement between stacks
   - Template evolution tracking
4. **Accountability Features**:
   - Validation experiment tracking
   - Progress monitoring and nudges
   - Celebrate wins, learn from failures
   - Daily/weekly check-ins
5. **Template Ecosystem**:
   - Save and share custom templates
   - Fork and customize existing ones
   - Template versioning
   - Team template library

### Phase 5: Polish & Launch
**Goal: Production-ready AI-native canvas**
1. **Smart Onboarding**:
   - AI guides through Core User Journey
   - Template suggestions based on user goals
   - Overcome blank canvas with AI assistance
   - Interactive tutorial with ProductPeer personality
2. **Community Features**:
   - Template marketplace foundation
   - Share and discover templates
   - Rate and review system
   - Fork and customize workflows
3. **Polish & Performance**:
   - Theming system (light/dark modes)
   - Advanced undo/redo with checkpoints
   - Performance optimization for scale
   - Security audit and pen testing
4. **Launch Preparation**:
   - Beta testing with indie hacker community
   - Product Hunt launch strategy
   - AI-first messaging and positioning
   - Success metrics tracking
5. **Smart Loading States**:
   - Contextual quotes library
   - Journey-aware loading messages
   - Motivational content during waits

