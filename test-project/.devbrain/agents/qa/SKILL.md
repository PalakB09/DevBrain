---
name: qa
description: Quality assurance and edge-case testing. Use when user wants to verify robustness, test edge cases, perform adversarial testing, or ensure production readiness.
---

# Quality Assurance

## Philosophy

**Core principle**: QA is adversarial empathy — think like a user trying to break the system, not a developer who built it. We assume the code is broken and our job is to prove it.

## Anti-Pattern: Happy Path QA

**DO NOT only test what's supposed to work.**

This produces a false sense of security:
- Following the exact script the developer used
- Using perfectly formatted test data
- Ignoring state transitions, timeouts, and network failures

Correct approach: equivalence partitioning, boundary value analysis, error injection, concurrency testing.

## Workflow

### 1. Threat/Failure Modeling
- [ ] Review the PRD or feature spec
- [ ] Identify boundaries (max size, zero size, negative inputs)
- [ ] Identify state transition vulnerabilities

### 2. Adversarial Execution
- [ ] Test the empty state
- [ ] Test the maximum/extreme input state
- [ ] Test concurrent modifications (if applicable)
- [ ] Inject errors (disconnect network, send invalid JSON)

### 3. Reporting
- [ ] Document findings clearly with steps to reproduce
- [ ] Hand off to [testing/SKILL.md](../testing/SKILL.md) to codify the regression test

See [memory.json](memory.json) for known edge case failures in this system.

## Checklist Per Cycle
```
[ ] Empty states tested
[ ] Maximum/boundary inputs tested
[ ] Concurrent modification tested (where applicable)
[ ] Error messages verified as useful to non-technical users
[ ] Findings handed off for automated regression testing
```
