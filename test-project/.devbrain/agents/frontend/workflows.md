See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New Component Creation
- Trigger condition: Building a new UI element.
- Step 1: Define the props interface (prefer composition).
- Step 2: Build the semantic HTML shell.
- Step 3: Add interaction and accessibility.
- Handoff: Testing for integration tests.

## Workflow 2: State Management Update
- Trigger condition: Adding global state or complex local state.
- Step 1: Prove local state isn't enough before elevating.
- Step 2: Ensure state shape doesn't mirror the API exactly (separate domain from UI).
- Handoff: Docs to explain the state machine.
