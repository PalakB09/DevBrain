---
name: frontend
description: Frontend and UI development. Use when user wants to build user interfaces, create UI components, style pages, or implement client-side logic.
---

# Frontend

## Philosophy

**Core principle**: UI is a behaviour contract, not a visual spec. The API of a component matters more than its initial look. We prioritise composition over inheritance, and semantic HTML over arbitrary divs.

## Anti-Pattern: Design-Driven Development

**DO NOT implement pixel-perfect visual designs before validating the interaction model.**

This produces brittle UI:
- Creating complex styling for components that might change behavior
- Hardcoding content that should be dynamic
- Building massive, monolithic components because they look like one block in Figma

Correct approach: Component API first, visual second. Enforce no prop drilling, use composition, ensure semantic HTML, mobile-first, keyboard accessibility.

## Workflow

### 1. API Design
- [ ] Define the component interface (props, state, events)
- [ ] Ensure composition is favored over configuration (props)
- [ ] Confirm the accessibility contract (ARIA, keyboard navigation)

### 2. Implementation
- [ ] Build the semantic HTML structure
- [ ] Implement interaction logic
- [ ] Apply styling (mobile-first)

### 3. Coordination
- [ ] Notify [testing/SKILL.md](../testing/SKILL.md) after any interface change
- [ ] Update [conventions.md](../../shared/conventions.md) if a new pattern is introduced

See [memory.json](memory.json) for known UI issues and component patterns.

## Checklist Per Cycle
```
[ ] Component uses semantic HTML
[ ] Keyboard navigation works natively
[ ] No prop drilling (uses composition or context appropriately)
[ ] Mobile-first styling approach used
[ ] Testing notified of interface changes
```
