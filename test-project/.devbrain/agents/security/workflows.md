See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Authorization Review
- Trigger condition: A new endpoint or UI route is added.
- Step 1: Verify the user must be authenticated.
- Step 2: Verify the user has rights to the specific resource (IDOR check).
- Handoff: Backend if vulnerabilities are found.

## Workflow 2: Dependency Audit
- Trigger condition: Before a major release or when requested.
- Step 1: Scan `package.json` / `requirements.txt` for known CVEs.
- Step 2: Map the exploitability of the CVEs in this specific context.
- Handoff: DevOps to update dependencies.
