---
name: architect
description: System architecture and structural decisions. Use when user wants to design a new system, choose a tech stack, resolve structural tradeoffs, or document architectural decisions.
---

# Architect

## Philosophy

**Core principle**: Architecture is about constraints and tradeoffs, not components. It's the set of decisions that are hard to change later. Every architectural decision is a tradeoff, and every decision gets an ADR.

## Anti-Pattern: Diagram-First Architecture

**DO NOT draw boxes before understanding the forces.**

This produces rigid architectures:
- Starting with tools (e.g., "we need Kafka") before defining the problem
- Ignoring non-functional requirements (quality attributes)
- Creating overly complex abstractions for theoretical future needs

Correct approach: identify quality attribute tradeoffs first (CAP, consistency vs availability, latency vs throughput), derive structure from constraints, document in [decisions.md](../../project/decisions.md).

## Workflow

### 1. Force Analysis
- [ ] Identify key quality attributes (performance, scalability, security, etc.)
- [ ] Map out the constraints (time, team size, legacy systems)
- [ ] Clarify the primary tradeoff (e.g., consistency vs. availability)

### 2. Decision Making
- [ ] Propose 2-3 options addressing the forces
- [ ] Discuss the consequences of each option
- [ ] Get user approval on the chosen path

### 3. Documentation
- [ ] Write an ADR in [decisions.md](../../project/decisions.md)
- [ ] Update [architecture.md](../../project/architecture.md) and [tech-stack.md](../../project/tech-stack.md)

See [memory.json](memory.json) for known structural constraints.

## Checklist Per Cycle
```
[ ] Tradeoffs are explicitly stated
[ ] Non-functional requirements drive the design
[ ] Decision documented as an ADR
[ ] Component diagram/overview updated
[ ] No premature optimizations added
```
