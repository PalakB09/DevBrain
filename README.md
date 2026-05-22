# DevBrain 

[![npm version](https://img.shields.io/npm/v/devbrain-init.svg?style=flat-square)](https://www.npmjs.com/package/devbrain-init)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**A persistent engineering intelligence layer for your software repository.**

DevBrain is a zero-dependency CLI that scaffolds an AI-readable framework directly into your codebase. It acts as the extended memory, routing logic, and standard operating procedure for AI coding assistants (Cursor, Claude Code, GitHub Copilot).

There is no runtime. There is no cloud telemetry. There is no autonomous execution.
**The structure is the product.**

---

## The Problem

AI coding agents are powerful, but they suffer from severe context amnesia. They do not know your project's architectural constraints, they forget why certain decisions were made, and they lack domain-specific engineering philosophy. 

Without persistent memory, you are forced to re-explain your tech stack, your routing rules, and your quality standards in every single session.

## The Solution

DevBrain solves this by providing a `.devbrain/` directory that acts as the "brain" of your repository. 

When an AI agent enters a DevBrain-enabled project, it immediately reads the `.devbrain/README.md`, which routes it through a structured map of your project's decisions, active workflows, and 9 specialized agent personas. The AI learns your rules *before* it writes a single line of code.

---

## Quick Start

Initialize DevBrain in any repository. No installation required.

```bash
npx devbrain-init
```

The CLI will prompt you for basic project information (name, tech stack, team size) and automatically generate the entire `.devbrain/` architecture.

---

## How It Works

DevBrain structures engineering context into four distinct layers:

### 1. The Supervisor (`supervisor/`)
Controls how the AI tackles problems. Contains `routing.md` (a strict decision matrix for which domain handles which task) and `orchestration.md` (cross-domain workflows, like API design handoffs).

### 2. The Agents (`agents/`)
9 distinct engineering personas: `planner`, `architect`, `frontend`, `backend`, `testing`, `qa`, `security`, `devops`, and `docs`.
Every agent folder contains:
- **`SKILL.md`**: The agent's philosophy, explicitly named anti-patterns, and strict cycle checklists.
- **`workflows.md`**: Highly specific, step-by-step playbooks for that domain (e.g., "Adversarial State Injection" for QA).
- **`memory.json`**: A persistent JSON store where the AI records its known failures and preferred patterns across sessions.

### 3. The Project (`project/`)
The evolving state of your software. Contains your `PRD.md`, `architecture.md`, `roadmap.md`, and an ADR log (`decisions.md`). The AI reads these to understand the current constraints before proposing changes.

### 4. The Shared Context (`shared/`)
Global repository knowledge. Contains `conventions.md` (naming rules, PR limits), `repo-map.md`, and a domain `glossary.md`.

---

## Usage with AI Assistants

DevBrain requires zero configuration to work with modern AI IDEs and CLI agents. 

### Cursor
Open your DevBrain-enabled project in Cursor. When you prompt `Cmd+K` or use Composer, Cursor will naturally read the `.devbrain` folder to understand your codebase's rules.

### Claude Code / CLI Agents
Launch your CLI agent in the project root. The agent will read `.devbrain/README.md` as its onboarding file, parse the `manifest.json`, and route itself to the appropriate domain playbook.

**Example Prompts:**
- *"We are building a new authentication endpoint. Consult the DevBrain supervisor and execute the necessary workflows."*
- *"I noticed a bug in the UI state. Update the frontend memory.json so you don't make this mistake again."*

---

## Quality Bar

DevBrain is highly opinionated. The generated `SKILL.md` files do not contain generic advice like "write clean code." Instead, they contain concrete engineering heuristics written from experience:

- **Architects** are taught to avoid "Diagram-First Architecture" and focus on system constraints.
- **Backend agents** are taught to avoid "Inside-Out APIs" and design contracts before schemas.
- **QA agents** are taught "Adversarial Empathy" instead of happy-path testing.

---

## License

DevBrain is open source software licensed as MIT.
