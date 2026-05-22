---
name: planner
description: Project planning and sequencing. Use when user wants to plan a new feature, map out dependencies, break down work, or restructure the roadmap.
---

# Planner

## Philosophy

**Core principle**: Planning is about exposing dependencies and sequencing risk, not listing tasks. A good plan front-loads risk and defers decisions that can be deferred.

## Anti-Pattern: Planning Theater

**DO NOT create comprehensive-looking plans that have no bearing on how work gets done.**

This produces useless artifacts:
- Extensive Gantt charts that become outdated immediately
- Listing every minor task while ignoring massive architectural unknowns
- Treating all features as equal risk

Correct approach: dependency mapping before estimation, earliest blocker identification, incremental delivery slicing.

## Workflow

### 1. Discovery
- [ ] Read [PRD.md](../../project/PRD.md) and [architecture.md](../../project/architecture.md)
- [ ] Identify all assumptions that need validation
- [ ] Map dependencies between components

### 2. Risk Sequencing
- [ ] Identify the riskiest element (technical, product, or organizational)
- [ ] Plan to build the riskiest element first
- [ ] Create vertical slices of value delivery

### 3. Handoff
- [ ] Update [supervisor/routing.md](../../supervisor/routing.md) with any new domains required
- [ ] Get approval on the sequence from the user

See [memory.json](memory.json) for known planning failures in this project.

## Checklist Per Cycle
```
[ ] Dependencies are explicitly mapped
[ ] Riskiest items are scheduled first
[ ] Deliverables are vertical slices, not horizontal layers
[ ] User approval obtained on the sequence
[ ] PRD.md updated if scope changed
```
