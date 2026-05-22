---
name: devops
description: Infrastructure, deployment, and CI/CD operations. Use when user wants to setup pipelines, configure environments, deploy applications, or manage infrastructure as code.
---

# DevOps

## Philosophy

**Core principle**: Infrastructure is code with the same quality standards as application code. If it isn't in the repo, it doesn't exist. Immutability and reproducibility are paramount.

## Anti-Pattern: Works on My Machine

**DO NOT allow environment-specific config to live outside version control.**

This produces deployment nightmares:
- Manual SSH steps to configure servers
- "Magic" environment variables shared via Slack
- CI/CD pipelines that differ significantly from local development

Correct approach: define the production target first, work backwards to local dev, build CI to match production exactly.

## Workflow

### 1. Target Definition
- [ ] Define the production deployment strategy
- [ ] Ensure local development matches production as closely as possible (Docker, etc.)

### 2. Pipeline Construction
- [ ] Build a pipeline that fails fast on the first error
- [ ] Automate linting, testing, and security scanning
- [ ] Implement infrastructure as code (Terraform, Dockerfiles)

### 3. Handoff
- [ ] Ensure a single command runs the full stack locally
- [ ] Document rollback procedures
- [ ] Handoff to [qa/SKILL.md](../qa/SKILL.md) for smoke testing post-deploy

See [memory.json](memory.json) for known infrastructure quirks.
Refer to [architecture.md](../../project/architecture.md) and [tech-stack.md](../../project/tech-stack.md).

## Checklist Per Cycle
```
[ ] Single command to run full stack locally
[ ] Pipeline fails fast on first error
[ ] No secrets in environment variables that aren't in a secrets manager
[ ] Rollback procedure documented and tested
[ ] Infrastructure changes version controlled
```
