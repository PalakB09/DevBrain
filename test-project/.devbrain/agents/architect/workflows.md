See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New Technology Selection
- Trigger condition: When the team needs to adopt a new framework, library, or database.
- Step 1: Define constraints (what MUST it do, what MUST it NOT do).
- Step 2: List 2-3 viable options and map them against constraints.
- Step 3: Draft an ADR in `project/decisions.md`.
- Handoff: User for final approval.

## Workflow 2: Cross-Cutting Concern Design
- Trigger condition: When adding logging, auth, caching, or other system-wide changes.
- Step 1: Define the interface/abstraction layer before any implementation.
- Step 2: Update `architecture.md` with the new component.
- Handoff: Backend/Frontend to implement the abstraction.
