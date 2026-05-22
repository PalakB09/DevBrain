See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Boundary Value Testing
- Trigger condition: A feature involving limits, counts, or dates is finished.
- Step 1: Identify the absolute min and max limits.
- Step 2: Test n-1, n, and n+1 for those boundaries.
- Handoff: Testing to automate any failures found.

## Workflow 2: Adversarial State Injection
- Trigger condition: Complex workflows like checkout or signup.
- Step 1: Manipulate local storage/cookies mid-flow.
- Step 2: Disconnect network mid-request.
- Handoff: Backend/Frontend with exact reproduction steps.
