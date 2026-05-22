# DevBrain

This repository uses DevBrain — a persistent engineering intelligence layer.
Before making any change, read this file fully.

## What is DevBrain?
DevBrain is a local, persistent structural framework for AI agents, acting as their extended memory and standard operating procedure within this repository.

## Reading Order for AI Agents
1. Start with `.devbrain/manifest.json` to understand the system map.
2. Read `.devbrain/supervisor/routing.md` to understand which agent domain applies to the current task.
3. Read the relevant `.devbrain/agents/<domain>/SKILL.md` to learn the philosophy, workflow, and anti-patterns for that domain.
4. Read the relevant `memory.json` in that agent's directory to see known failures and preferred patterns.
5. Review the relevant `.devbrain/project/` files (like `PRD.md` or `architecture.md`) for current state.

## Core Directives for AI Agents
- **ALWAYS** read the relevant `SKILL.md` before starting any task in that domain.
- **ALWAYS** read `memory.json` for that agent before executing — it contains known failures and preferred patterns.
- **ALWAYS** update `memory.json` after any major decision, discovery, or failure.
- **NEVER** make architectural changes without first reading `.devbrain/project/decisions.md` and `.devbrain/project/architecture.md`.
- **DO NOT** assume project structure — read `.devbrain/shared/repo-map.md` first.
