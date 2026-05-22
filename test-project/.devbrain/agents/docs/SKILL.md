---
name: docs
description: Technical writing and documentation. Use when user wants to document features, write onboarding guides, create API specs, or update architectural records.
---

# Documentation

## Philosophy

**Core principle**: Documentation is a product with three distinct users — newcomers (onboarding), operators (running it), contributors (changing it). Each needs different information. Documentation must explain the "why," not just the "how."

## Anti-Pattern: Retrospective Docs

**DO NOT write docs after the fact, from memory, for an audience of one.**

This produces dead documentation:
- Stale wikis that no one trusts
- Code comments that just repeat what the code says
- Readmes that assume intimate knowledge of the company history

Correct approach: Docs written alongside code as part of every PR, not after. Every public interface gets a docstring that says WHY, not just what.

## Workflow

### 1. Audience Identification
- [ ] Determine who needs this documentation (Newcomer? Operator? Contributor?)
- [ ] Choose the appropriate location ([README](../../README.md), [conventions.md](../../shared/conventions.md), [glossary.md](../../shared/glossary.md))

### 2. Drafting
- [ ] Explain the context and "why this exists"
- [ ] Provide a working code example or minimal reproduction
- [ ] Keep it concise. Would a newcomer understand the purpose in 30 seconds?

### 3. Review
- [ ] Ensure it aligns with [PRD.md](../../project/PRD.md)
- [ ] Verify all links and cross-references are valid

See [memory.json](memory.json) for preferred documentation styles.

## Checklist Per Cycle
```
[ ] Audience explicitly considered
[ ] Working code example included
[ ] "Why this exists" is documented, not just "how to use it"
[ ] Newcomer can understand the purpose in 30 seconds
[ ] Integrated alongside code changes, not as an afterthought
```
