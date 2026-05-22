# Agent Routing

This is the decision table for routing tasks to the appropriate DevBrain agents.

## Routing Rules

| Signal | Agent | Reason |
|--------|-------|--------|
| Breaking down a new epic | planner | Dependencies must be mapped before work begins |
| Changing a database schema | backend | They own data access patterns |
| Choosing a new framework | architect | This is a hard-to-reverse structural decision |
| Building a new UI component | frontend | They ensure semantic and accessible markup |
| Fixing a complex bug | testing | A failing test must be written first |
| Handling user authentication | security | Auth flows require threat modeling |
| Setting up a CI pipeline | devops | Infrastructure must be version controlled |
| Testing edge cases for a release | qa | Adversarial empathy is needed |
| Writing an API spec | docs | Contracts must be clear for consumers |
| A cross-cutting concern (e.g. logging) | architect | It affects all domains |
| Refactoring legacy code | testing | Behavior must be preserved via tests |
| Optimizing query performance | backend | They understand execution plans |
| Implementing a responsive design | frontend | Mobile-first is a core philosophy |
| A security audit | security | Specialized threat modeling is required |
| Creating onboarding material | docs | Newcomers need specific context |

## Escalation Paths
- When [a dependency choice blocks multiple teams], the **architect** must be consulted before starting.
- When [a security vulnerability is found in production], **security** and **devops** must be immediately engaged.

## Never Route Alone
Tasks that always require two agents:
- API Design: **backend** + **frontend**
- Deployments: **devops** + **qa**
- Architecture changes: **architect** + **security**
