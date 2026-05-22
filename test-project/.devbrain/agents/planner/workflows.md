See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Epic Decomposition
- Trigger condition: When a new PRD or major feature is handed over.
- Step 1: Extract all hard dependencies and group them.
- Step 2: Sequence tasks such that the highest technical risk is tackled first.
- Step 3: Create a checklist in `task.md`.
- Handoff: Architect for structural review, or directly to specific domains.

## Workflow 2: Blocker Resolution
- Trigger condition: When a workstream is blocked for > 24 hours.
- Step 1: Identify the root cause (dependency, ambiguity, missing skill).
- Step 2: Create an immediate unblocking plan (stub the dependency, force a decision).
- Handoff: The agent responsible for the unblocking action.
