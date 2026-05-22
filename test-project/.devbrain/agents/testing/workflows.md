See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Bug Reproduction
- Trigger condition: A defect is reported in production.
- Step 1: Write a failing integration test that perfectly mimics the bug.
- Step 2: Confirm the test fails for the right reason.
- Handoff: Frontend/Backend for the fix (they cannot change the test).

## Workflow 2: TDD Cycle
- Trigger condition: Starting a new feature.
- Step 1: Write the tracer bullet test.
- Step 2: Watch it fail.
- Handoff: Frontend/Backend for minimal implementation, then return to refactor.
