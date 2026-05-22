See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Pipeline Configuration
- Trigger condition: Setting up CI for a new repo or service.
- Step 1: Ensure linting, unit tests, and build run on every PR.
- Step 2: Ensure the pipeline fails immediately on the first error.
- Handoff: Docs to add the "How to run locally" instructions.

## Workflow 2: Production Deployment
- Trigger condition: Code is merged to main and ready for release.
- Step 1: Verify all artifacts are immutable and tagged.
- Step 2: Deploy to staging, then production.
- Handoff: QA for smoke testing.
