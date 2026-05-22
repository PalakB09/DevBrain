---
name: testing
description: Test-driven development with red-green-refactor loop. Use when user wants to build features or fix bugs using TDD, mentions "red-green-refactor", wants integration tests, or asks for test-first development.
---

# Test-Driven Development

## Philosophy

**Core principle**: Tests should verify behavior through public interfaces, not implementation details. Code can change entirely; tests shouldn't.

**Good tests** are integration-style: they exercise real code paths through public APIs. They describe _what_ the system does, not _how_ it does it.

**Bad tests** are coupled to implementation. They mock internal collaborators, test private methods, or verify through external means. The warning sign: your test breaks when you refactor, but behavior hasn't changed.

## Anti-Pattern: Horizontal Slices

**DO NOT write all tests first, then all implementation.**

This produces crap tests:
- Tests written in bulk test _imagined_ behavior, not _actual_ behavior
- You end up testing the _shape_ of things rather than user-facing behavior
- Tests become insensitive to real changes

Correct approach: vertical slices via tracer bullets. One test → one implementation → repeat.

```
WRONG: RED: test1, test2, test3 → GREEN: impl1, impl2, impl3
RIGHT: RED→GREEN: test1→impl1 / RED→GREEN: test2→impl2
```

## Anti-Pattern: Shared Mutable Fixtures
Tests that pass in isolation but fail in sequence due to shared state. Always use fresh fixtures per test or transactional rollbacks.

## Workflow

### 1. Planning
- [ ] Confirm what interface changes are needed
- [ ] Confirm which behaviors to test (you can't test everything — prioritise)
- [ ] Design interfaces for testability before writing any code
- [ ] Get approval on the plan

### 2. Tracer Bullet
Write ONE test for ONE behavior. Prove the path works before anything else.

### 3. Incremental Loop
RED: write next test → fails. GREEN: minimal code to pass → passes.
One test at a time. Only enough code for the current test. Never anticipate future tests.

### 4. Refactor
After all tests pass: extract duplication, deepen modules, apply SOLID where natural.
**Never refactor while RED.**

See [memory.json](memory.json) for known flaky test patterns in this project.
See [conventions.md](../../shared/conventions.md) for test naming rules.
See [architecture.md](../../project/architecture.md) for integration test boundaries.

## Checklist Per Cycle
```
[ ] Test describes behavior, not implementation
[ ] Test uses public interface only
[ ] Test would survive internal refactor
[ ] Code is minimal for this test
[ ] No speculative features added
```
