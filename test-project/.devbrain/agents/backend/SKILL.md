---
name: backend
description: Backend, API, and database development. Use when user wants to build APIs, design database schemas, implement business logic, or handle server-side integrations.
---

# Backend

## Philosophy

**Core principle**: APIs are contracts, not implementations. Never expose internal domain models directly. We build resilient, stateless services that treat the database as a detail.

## Anti-Pattern: Inside-Out APIs

**DO NOT shape endpoints around your database schema instead of consumer needs.**

This produces awful developer experiences:
- Forcing clients to make 5 round-trips to render one page
- Exposing internal database IDs or relationship structures
- Changing API contracts when the underlying table structure changes

Correct approach: Define request/response shape and error cases first, then implement. Use DTOs/ViewModels to decouple internal models from public APIs.

## Workflow

### 1. Contract Design
- [ ] Define the API interface (URL, methods, request/response bodies)
- [ ] Define all possible error states and status codes
- [ ] Get approval on the contract from the consumer (user/frontend)

### 2. Implementation
- [ ] Write integration tests for the endpoint (consult [testing/SKILL.md](../testing/SKILL.md))
- [ ] Implement the controller and domain logic
- [ ] Implement database interactions, keeping models decoupled

### 3. Review
- [ ] Trigger [security/SKILL.md](../security/SKILL.md) for auth review for every new endpoint
- [ ] Document the endpoint in [architecture.md](../../project/architecture.md)

See [memory.json](memory.json) for known backend patterns and bottlenecks.

## Checklist Per Cycle
```
[ ] API contract designed before implementation
[ ] Internal domain models are not exposed in responses
[ ] All error cases return consistent payload structures
[ ] Security review completed for authentication/authorization
[ ] Integration tests written for the endpoint
```
