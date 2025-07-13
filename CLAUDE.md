# CLAUDE.md - ProductPeer Project Guidelines

## Project Overview
ProductPeer is an AI-native infinite canvas tool for indie hackers and solopreneurs to ideate, validate, and evolve business models with an embedded AI accountability partner.

## Key Technical Decisions
- **Architecture**: Single monorepo (productpeer/)
- **Frontend**: React + TypeScript + Excalidraw
- **Backend**: Kotlin with Micronaut (NOT Spring Boot)
- **AI**: Gemini API (NOT OpenAI) - free tier to start
- **Database**: Supabase (PostgreSQL + Auth + Realtime)
- **Deployment**: Vercel (frontend) + Railway (backend)

## Important Concepts
- **Blocks**: Two types:
  - **Basic Blocks**: Excalidraw built-in (text, sticky notes, shapes)
  - **Custom Blocks**: ProductPeer-specific (Card, CardStack)
- **Card**: Rich content block with modal expansion, inline editing, unique IDs
- **CardStack**: Container for Cards with drag-drop reordering
- **AI Experts**: Each CardStack has its own specialized AI "brain"
- **Lead Agents**: Orchestrate multiple AI experts within a template
- **Templates**: Pre-designed arrangements of blocks (e.g., Lean Canvas uses 9 CardStacks with 9 AI experts + 1 lead agent)
- **NO "artifacts"**: We use blocks → templates hierarchy only
- **Section-level AI**: MVP priority - AI that focuses on specific sections/templates/frames with deeper expertise than Board-level AI

## Development Philosophy
- **AI-native from day 1**: Every phase includes AI features
- **Private-first**: Boards are private by default with access management
- **Blocks → Templates**: Simple hierarchy, no intermediate levels
- **No time estimates**: Don't use weeks, days, or other time estimates in documentation - they're not realistic

## File Editing Guidelines
When editing files in this project:
1. Always preserve the AI-native approach
2. Use "blocks" not "artifacts" terminology
3. Remember access management is custom-built (not in open-source Excalidraw)
4. Keep Kotlin examples using Micronaut patterns
5. Avoid special Unicode characters (arrows, etc.) - use ASCII alternatives like -> or |

## PRD Editing Rules
1. **NEVER modify these sections** in productpeer-bmf-prd.md (only the user can edit them):
   - **Vision**: The product vision statement
   - **Product Development Philosophy**: The 4 bullet points about AI-native development
   - **ProductPeer as an actual product peer**: The 5 bullet points about personality/behavior

2. **NEVER change the order of sections** in the PRD
   - The sections have a specific organizational structure
   - You can modify content within sections (except those listed above)
   - Do NOT move sections around or reorganize them

## Current PRD Location
Main PRD: `/mnt/c/Users/tin/Vibe Coding/excalidraw-fork/productpeer/productpeer-bmf-prd.md`

## Commands to Run
- Frontend: `npm run dev` (in playground or frontend directory)
- Backend: TBD when Kotlin/Micronaut project is set up

## Git Best Practices
- **NEVER use `git add .`** - Multiple sessions/terminals may be working on different features
- Always add files specifically: `git add path/to/specific/file.ts`
- Review changes with `git status` and `git diff` before adding
- Be pinpoint and specific to changes made in your session only

## Known Issues
- Environment variables must be in `playground/.env.local` not root
- Clear Vite cache if env vars don't load: `rm -rf node_modules/.vite`

## AI Integration Notes
- AI connects as another user through WebSocket
- AI respects board permissions
- AI can only see/edit blocks on boards it has access to
- Use Gemini API with model "gemini-1.5-flash"

## Next Steps
1. Create initial project structure (frontend/backend)
2. Set up Excalidraw integration
3. Implement basic blocks
4. Add template library
5. Build access management system
6. Integrate Gemini AI for diagram generation

## Mermaid Diagram Rules
When creating Mermaid diagrams, follow these rules to avoid parsing errors:

1. **Subgraph Names - Avoid Special Characters Entirely**
   - DON'T: `subgraph "Client (Browser)"` 
   - DON'T: `subgraph Client1["Client (Browser)"]` (square brackets don't work for subgraphs)
   - DO: `subgraph Client1[Client Browser]` (simple text without parentheses)
   - For subgraphs, use simple labels without parentheses, quotes, or special characters

2. **When You Need Special Characters**
   - Use dashes instead of parentheses: `Server - Enhanced Socket.IO`
   - Use simple descriptive text: `Client Browser` instead of `Client (Browser)`
   - Special characters work fine in node labels: `N1[Node (with parentheses)]`

3. **Unique IDs**
   - Every subgraph needs a unique ID (e.g., Client1, Network1, Server1)
   - IDs should be alphanumeric without special characters
   - Keep display names simple for subgraphs

4. **Working Example Pattern**
   ```mermaid
   graph TB
       subgraph Phase1[Phase 1 - Main Group]
           subgraph SubGroup1[Sub Group Number 1]
               N1["Node with (parentheses)"]
               N2["Node with 'quotes'"]
           end
       end
   ```

5. **Special Character Guidelines**
   - Parentheses in subgraph names: Avoid entirely, use dashes
   - Quotes in subgraph names: Avoid entirely
   - Parentheses in node labels: AVOID - even `node[functionName()]` will fail
   - Function names: Write as `updateStateWithChanges` not `updateStateWithChanges()`
   - Colons: Replace with dashes in subgraph names
   - Square brackets: Only use for node labels, not subgraph display names
   
6. **Node Label Rules**
   - Simple text: `NODE[Simple Text]` ✓
   - With HTML breaks: `NODE[Line 1<br/>Line 2]` ✓
   - With quotes for special chars: `NODE["Text with (parentheses)"]` ✓
   - Function names WITHOUT parentheses: `NODE[functionName]` ✓
   - Function names WITH parentheses: `NODE[functionName()]` ✗ WILL FAIL