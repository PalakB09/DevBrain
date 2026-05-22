See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New API Endpoint
- Trigger condition: Exposing new data or mutations.
- Step 1: Define the JSON contract and HTTP verbs.
- Step 2: Write the controller and decouple from DB models via DTOs.
- Handoff: Security for authorization check.

## Workflow 2: Database Schema Migration
- Trigger condition: Changing underlying tables.
- Step 1: Write the up/down migration scripts.
- Step 2: Verify no existing queries will break or perform table scans.
- Handoff: QA for data integrity testing.
