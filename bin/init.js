#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.on('SIGINT', () => {
  console.log('\nAborted.');
  rl.close();
  process.exit(0);
});

const ask = (query, defaultVal) => {
  return new Promise(resolve => {
    rl.question(`${query} [${defaultVal}]: `, answer => {
      resolve(answer.trim() || defaultVal);
    });
  });
};

const DEV_BRAIN_DIR = path.join(process.cwd(), '.devbrain');

const ASCII_HEADER = `
 ____            _               _       
|  _ \\  ___ _ __| |__  _ __ __ _(_)_ __  
| | | |/ _ \\ '__| '_ \\| '__/ _\` | | '_ \\ 
| |_| |  __/ |  | |_) | | | (_| | | | | |
|____/ \\___|_|  |_.__/|_|  \\__,_|_|_| |_|
                                         
DevBrain V1 — A persistent engineering intelligence layer for your software repository.
`;

const templates = {
  root: {
    'README.md': (projectName) => `# DevBrain

This repository uses DevBrain — a persistent engineering intelligence layer.
Before making any change, read this file fully.

## What is DevBrain?
DevBrain is a local, persistent structural framework for AI agents, acting as their extended memory and standard operating procedure within this repository.

## Reading Order for AI Agents
1. Start with \`.devbrain/manifest.json\` to understand the system map.
2. Read \`.devbrain/supervisor/routing.md\` to understand which agent domain applies to the current task.
3. Read the relevant \`.devbrain/agents/<domain>/SKILL.md\` to learn the philosophy, workflow, and anti-patterns for that domain.
4. Read the relevant \`memory.json\` in that agent's directory to see known failures and preferred patterns.
5. Review the relevant \`.devbrain/project/\` files (like \`PRD.md\` or \`architecture.md\`) for current state.

## 🚨 UNIVERSAL AUTO-MEMORY DIRECTIVE
**At the end of every single task or conversation, you (the AI Agent) MUST proactively check if you:**
1. Learned a new project-specific pattern or convention.
2. Encountered a bug, edge case, or recurring failure.
3. Made a structural, architectural, or dependency decision.

**If YES to any of the above, you MUST automatically update the relevant \`.devbrain/agents/<domain>/memory.json\` or \`.devbrain/project/\` files BEFORE ending your response.**
Do not ask the user for permission. Just update the files silently to maintain persistent intelligence.

## Core Directives for AI Agents
- **ALWAYS** read the relevant \`SKILL.md\` before starting any task in that domain.
- **ALWAYS** read \`memory.json\` for that agent before executing.
- **NEVER** make architectural changes without first reading \`.devbrain/project/decisions.md\` and \`.devbrain/project/architecture.md\`.
- **DO NOT** assume project structure — read \`.devbrain/shared/repo-map.md\` first.
`,
    'manifest.json': (projectName, techStack, teamSize) => `{
  "version": "1.0.0",
  "devbrain": true,
  "projectName": "${projectName}",
  "techStack": "${techStack}",
  "teamSize": "${teamSize}",
  "agents": [
    "planner",
    "architect",
    "frontend",
    "backend",
    "testing",
    "qa",
    "security",
    "devops",
    "docs"
  ],
  "agentFiles": {
    "skill": "SKILL.md",
    "workflows": "workflows.md",
    "memory": "memory.json"
  },
  "projectFiles": [
    "PRD.md",
    "architecture.md",
    "roadmap.md",
    "tech-stack.md",
    "decisions.md"
  ],
  "sharedFiles": [
    "conventions.md",
    "glossary.md",
    "repo-map.md"
  ],
  "supervisorFiles": [
    "routing.md",
    "orchestration.md",
    "project_state.json"
  ],
  "crossReferences": {
    "architectural changes": ["project/decisions.md", "project/architecture.md", "agents/architect/SKILL.md"],
    "new features": ["project/PRD.md", "supervisor/routing.md", "agents/planner/SKILL.md"],
    "deployments": ["agents/devops/SKILL.md", "agents/qa/SKILL.md", "agents/devops/memory.json"],
    "security review": ["agents/security/SKILL.md", "project/decisions.md"]
  }
}`
  },
  agents: {
    memory: () => `{
  "lastUpdated": "${new Date().toISOString()}",
  "knownIssues": [],
  "preferredPatterns": [],
  "recentFailures": [],
  "architectureNotes": "",
  "crossReferences": {
    "decisions": "../../project/decisions.md",
    "conventions": "../../shared/conventions.md",
    "skill": "SKILL.md"
  }
}`,
    planner: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Epic Decomposition
- Trigger condition: When a new PRD or major feature is handed over.
- Step 1: Extract all hard dependencies and group them.
- Step 2: Sequence tasks such that the highest technical risk is tackled first.
- Step 3: Create a checklist in \`task.md\`.
- Handoff: Architect for structural review, or directly to specific domains.

## Workflow 2: Blocker Resolution
- Trigger condition: When a workstream is blocked for > 24 hours.
- Step 1: Identify the root cause (dependency, ambiguity, missing skill).
- Step 2: Create an immediate unblocking plan (stub the dependency, force a decision).
- Handoff: The agent responsible for the unblocking action.
`,
      skill: `---
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
\`\`\`
[ ] Dependencies are explicitly mapped
[ ] Riskiest items are scheduled first
[ ] Deliverables are vertical slices, not horizontal layers
[ ] User approval obtained on the sequence
[ ] PRD.md updated if scope changed
\`\`\`
`
    },
    architect: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New Technology Selection
- Trigger condition: When the team needs to adopt a new framework, library, or database.
- Step 1: Define constraints (what MUST it do, what MUST it NOT do).
- Step 2: List 2-3 viable options and map them against constraints.
- Step 3: Draft an ADR in \`project/decisions.md\`.
- Handoff: User for final approval.

## Workflow 2: Cross-Cutting Concern Design
- Trigger condition: When adding logging, auth, caching, or other system-wide changes.
- Step 1: Define the interface/abstraction layer before any implementation.
- Step 2: Update \`architecture.md\` with the new component.
- Handoff: Backend/Frontend to implement the abstraction.
`,
      skill: `---
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
\`\`\`
[ ] Tradeoffs are explicitly stated
[ ] Non-functional requirements drive the design
[ ] Decision documented as an ADR
[ ] Component diagram/overview updated
[ ] No premature optimizations added
\`\`\`
`
    },
    frontend: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New Component Creation
- Trigger condition: Building a new UI element.
- Step 1: Define the props interface (prefer composition).
- Step 2: Build the semantic HTML shell.
- Step 3: Add interaction and accessibility.
- Handoff: Testing for integration tests.

## Workflow 2: State Management Update
- Trigger condition: Adding global state or complex local state.
- Step 1: Prove local state isn't enough before elevating.
- Step 2: Ensure state shape doesn't mirror the API exactly (separate domain from UI).
- Handoff: Docs to explain the state machine.
`,
      skill: `---
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
\`\`\`
[ ] Component uses semantic HTML
[ ] Keyboard navigation works natively
[ ] No prop drilling (uses composition or context appropriately)
[ ] Mobile-first styling approach used
[ ] Testing notified of interface changes
\`\`\`
`
    },
    backend: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: New API Endpoint
- Trigger condition: Exposing new data or mutations.
- Step 1: Define the JSON contract and HTTP verbs.
- Step 2: Write the controller and decouple from DB models via DTOs.
- Handoff: Security for authorization check.

## Workflow 2: Database Schema Migration
- Trigger condition: Changing underlying tables.
- Step 1: Write the up/down migration scripts.
- Step 2: Verify no existing queries will break or perform table scans.
- Handoff: QA for data integrity testing.
`,
      skill: `---
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
\`\`\`
[ ] API contract designed before implementation
[ ] Internal domain models are not exposed in responses
[ ] All error cases return consistent payload structures
[ ] Security review completed for authentication/authorization
[ ] Integration tests written for the endpoint
\`\`\`
`
    },
    testing: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Bug Reproduction
- Trigger condition: A defect is reported in production.
- Step 1: Write a failing integration test that perfectly mimics the bug.
- Step 2: Confirm the test fails for the right reason.
- Handoff: Frontend/Backend for the fix (they cannot change the test).

## Workflow 2: TDD Cycle
- Trigger condition: Starting a new feature.
- Step 1: Write the tracer bullet test.
- Step 2: Watch it fail.
- Handoff: Frontend/Backend for minimal implementation, then return to refactor.
`,
      skill: `---
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

\`\`\`
WRONG: RED: test1, test2, test3 → GREEN: impl1, impl2, impl3
RIGHT: RED→GREEN: test1→impl1 / RED→GREEN: test2→impl2
\`\`\`

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
\`\`\`
[ ] Test describes behavior, not implementation
[ ] Test uses public interface only
[ ] Test would survive internal refactor
[ ] Code is minimal for this test
[ ] No speculative features added
\`\`\`
`
    },
    qa: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Boundary Value Testing
- Trigger condition: A feature involving limits, counts, or dates is finished.
- Step 1: Identify the absolute min and max limits.
- Step 2: Test n-1, n, and n+1 for those boundaries.
- Handoff: Testing to automate any failures found.

## Workflow 2: Adversarial State Injection
- Trigger condition: Complex workflows like checkout or signup.
- Step 1: Manipulate local storage/cookies mid-flow.
- Step 2: Disconnect network mid-request.
- Handoff: Backend/Frontend with exact reproduction steps.
`,
      skill: `---
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
\`\`\`
[ ] Empty states tested
[ ] Maximum/boundary inputs tested
[ ] Concurrent modification tested (where applicable)
[ ] Error messages verified as useful to non-technical users
[ ] Findings handed off for automated regression testing
\`\`\`
`
    },
    security: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Authorization Review
- Trigger condition: A new endpoint or UI route is added.
- Step 1: Verify the user must be authenticated.
- Step 2: Verify the user has rights to the specific resource (IDOR check).
- Handoff: Backend if vulnerabilities are found.

## Workflow 2: Dependency Audit
- Trigger condition: Before a major release or when requested.
- Step 1: Scan \`package.json\` / \`requirements.txt\` for known CVEs.
- Step 2: Map the exploitability of the CVEs in this specific context.
- Handoff: DevOps to update dependencies.
`,
      skill: `---
name: security
description: Security analysis and threat modeling. Use when user wants to review code for vulnerabilities, design secure authentication, or assess risk of new features.
---

# Security

## Philosophy

**Core principle**: Security is about attack surfaces, not checklists. A checklist is a starting point, not an ending point. We assume the network is hostile and inputs are malicious.

## Anti-Pattern: Checkbox Security

**DO NOT run the OWASP Top 10 list once and call it done.**

This produces vulnerable systems:
- Relying entirely on automated scanners
- Ignoring business logic flaws (e.g., IDOR)
- Slapping "auth" on at the end of development

Correct approach: threat model first (who is the attacker, what is the target, what is the path), then controls, then verification.

## Workflow

### 1. Threat Modeling
- [ ] Identify the assets being protected
- [ ] Identify potential attackers (internal, external, automated)
- [ ] Map out the attack vectors for the new feature

### 2. Implementation Review
- [ ] Verify all user input is sanitized and validated at the boundary
- [ ] Verify authorization (not just authentication) at every endpoint
- [ ] Ensure no secrets or PII are logged

### 3. Verification
- [ ] Test auth with a valid token from the wrong user (IDOR check)
- [ ] Review cryptographic choices and secure defaults
- [ ] Update [decisions.md](../../project/decisions.md) with any security-related architectural choices

See [memory.json](memory.json) for historical security findings.
Consult [backend/SKILL.md](../backend/SKILL.md) when reviewing API endpoints.

## Checklist Per Cycle
\`\`\`
[ ] Threat model considered before implementation
[ ] Input sanitized and validated
[ ] No secrets ever logged
[ ] Every endpoint authenticated AND authorized
[ ] Cross-user access blocked and tested
\`\`\`
`
    },
    devops: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Pipeline Configuration
- Trigger condition: Setting up CI for a new repo or service.
- Step 1: Ensure linting, unit tests, and build run on every PR.
- Step 2: Ensure the pipeline fails immediately on the first error.
- Handoff: Docs to add the "How to run locally" instructions.

## Workflow 2: Production Deployment
- Trigger condition: Code is merged to main and ready for release.
- Step 1: Verify all artifacts are immutable and tagged.
- Step 2: Deploy to staging, then production.
- Handoff: QA for smoke testing.
`,
      skill: `---
name: devops
description: Infrastructure, deployment, and CI/CD operations. Use when user wants to setup pipelines, configure environments, deploy applications, or manage infrastructure as code.
---

# DevOps

## Philosophy

**Core principle**: Infrastructure is code with the same quality standards as application code. If it isn't in the repo, it doesn't exist. Immutability and reproducibility are paramount.

## Anti-Pattern: Works on My Machine

**DO NOT allow environment-specific config to live outside version control.**

This produces deployment nightmares:
- Manual SSH steps to configure servers
- "Magic" environment variables shared via Slack
- CI/CD pipelines that differ significantly from local development

Correct approach: define the production target first, work backwards to local dev, build CI to match production exactly.

## Workflow

### 1. Target Definition
- [ ] Define the production deployment strategy
- [ ] Ensure local development matches production as closely as possible (Docker, etc.)

### 2. Pipeline Construction
- [ ] Build a pipeline that fails fast on the first error
- [ ] Automate linting, testing, and security scanning
- [ ] Implement infrastructure as code (Terraform, Dockerfiles)

### 3. Handoff
- [ ] Ensure a single command runs the full stack locally
- [ ] Document rollback procedures
- [ ] Handoff to [qa/SKILL.md](../qa/SKILL.md) for smoke testing post-deploy

See [memory.json](memory.json) for known infrastructure quirks.
Refer to [architecture.md](../../project/architecture.md) and [tech-stack.md](../../project/tech-stack.md).

## Checklist Per Cycle
\`\`\`
[ ] Single command to run full stack locally
[ ] Pipeline fails fast on first error
[ ] No secrets in environment variables that aren't in a secrets manager
[ ] Rollback procedure documented and tested
[ ] Infrastructure changes version controlled
\`\`\`
`
    },
    docs: {
      workflows: `See [SKILL.md](SKILL.md) for philosophy and rules.
See [memory.json](memory.json) for known failure patterns in this project.

## Workflow 1: Feature Documentation
- Trigger condition: A new feature is completed.
- Step 1: Identify if this needs newcomer, operator, or contributor docs.
- Step 2: Write the "why" and provide a working example.
- Handoff: QA to verify the example actually works.

## Workflow 2: Glossary Update
- Trigger condition: A new domain term is introduced.
- Step 1: Define the term concisely in \`shared/glossary.md\`.
- Step 2: Provide an example of how it's used in this codebase.
- Handoff: None.
`,
      skill: `---
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
\`\`\`
[ ] Audience explicitly considered
[ ] Working code example included
[ ] "Why this exists" is documented, not just "how to use it"
[ ] Newcomer can understand the purpose in 30 seconds
[ ] Integrated alongside code changes, not as an afterthought
\`\`\`
`
    }
  },
  supervisor: {
    'routing.md': `# Agent Routing

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
`,
    'orchestration.md': `# Orchestration Chains

Explicit coordination chains for complex workflows.

## 1. UI Change
- **Trigger**: A new user-facing feature or modification to an existing interface.
- **Steps**:
  1. \`frontend\`: Implement the component API and styling.
  2. \`testing\`: Ensure regression tests pass and new behavior is covered.
  3. \`docs\`: Update UI documentation or storybooks.
  4. \`qa\`: Test edge cases (accessibility, responsive design).
- **Handoff Responsible**: The agent completing the previous step.
- **Blocker**: Missing tests block docs and QA.

## 2. New API Endpoint
- **Trigger**: A requirement for new data access or mutation from the client.
- **Steps**:
  1. \`backend\`: Define contract and implement logic.
  2. \`testing\`: Write integration tests.
  3. \`docs\`: Update API specifications.
  4. \`security\`: Perform authorization review.
- **Handoff Responsible**: \`backend\` initiates the chain.
- **Blocker**: Missing security review blocks deployment.

## 3. Security Finding
- **Trigger**: A vulnerability is discovered by tools or manual review.
- **Steps**:
  1. \`security\`: Assess and document the threat model.
  2. \`architect\`: Review structural implications of the fix.
  3. \`backend\`/\`frontend\`: Implement the fix.
  4. \`qa\`: Verify the fix effectively mitigates the vulnerability.
- **Handoff Responsible**: \`security\` oversees the entire chain.
- **Blocker**: Unclear threat model blocks implementation.

## 4. Deploy
- **Trigger**: A release candidate is ready.
- **Steps**:
  1. \`devops\`: Prepare infrastructure and execute deployment.
  2. \`qa\`: Perform smoke testing in production/staging.
  3. \`docs\`: Publish release notes.
- **Handoff Responsible**: \`devops\`
- **Blocker**: Failing smoke tests mandate immediate rollback.
`,
    'project_state.json': (projectName, techStack, teamSize) => `{
  "projectName": "${projectName}",
  "techStack": "${techStack}",
  "teamSize": "${teamSize}",
  "lastUpdated": "",
  "activeWorkstreams": [],
  "recentMilestones": [],
  "openBlockers": [],
  "currentPhase": "",
  "agentMemoryVersions": {
    "frontend": 0, "backend": 0, "architect": 0,
    "planner": 0, "testing": 0, "qa": 0,
    "security": 0, "devops": 0, "docs": 0
  }
}`
  },
  project: {
    'PRD.md': `# Product Requirements Document

## Overview
[One paragraph description of the product or feature.]

## Problem
[What user problem are we solving?]

## Goals
- [Goal 1]
- [Goal 2]

## Non-Goals
- [What are we explicitly NOT doing?]

## User Stories & Acceptance Criteria
- As a [user type], I want [action], so that [value].
  - AC: Given [precondition], when [action], then [result within X seconds].

## Out of Scope
- [Feature X]
`,
    'architecture.md': `# System Architecture

## System Overview
[High-level description of how the system works.]

## Component Map
[ASCII Diagram Placeholder]

## Data Flow
[Describe how data moves through the system.]

## External Dependencies
- [Dependency 1]: [Purpose]

## Key Constraints
- [Constraint 1]

## Forces (Tradeoffs)
- Consistency vs. Availability: [Choice and Why]
`,
    'roadmap.md': `# Roadmap

## Phase 1: Foundation
### Goals
- [Goal]
### Key Features
1. [Feature 1]
2. [Feature 2]
### Success Metrics
- [Metric]

## Phase 2: Expansion
### Goals
- [Goal]
### Key Features
1. [Feature 1]
### Success Metrics
- [Metric]

## Phase 3: Maturity
### Goals
- [Goal]
### Key Features
1. [Feature 1]
### Success Metrics
- [Metric]
`,
    'tech-stack.md': `# Tech Stack

- **Language**: [Name], [Version] - [Why chosen]
- **Framework**: [Name], [Version] - [Why chosen]
- **Database**: [Name], [Version] - [Why chosen]
- **CI/CD**: [TBD]
`,
    'decisions.md': `# Architecture Decision Records (ADRs)

## 1. Initial Architecture
- **Status**: Accepted
- **Context**: We need a starting structure that balances speed of development with long-term maintainability.
- **Decision**: We will use a modular monolith approach with strict domain boundaries before considering microservices.
- **Consequences**: Easier deployments and refactoring in the short term, but requires discipline to maintain boundaries.
`
  },
  shared: {
    'conventions.md': `# Engineering Conventions

## Naming Rules
- Functions: camelCase, verb-noun format (e.g., \`getUserData\`)
- Files: kebab-case for modules, PascalCase for components

## Code Quality
- Max function length: 50 lines
- No \`console.log\` in production code. Use the structured logger.

## Review Process
- PR size limit: 400 lines of code max.
- Code review turnaround SLA: 24 hours.
`,
    'glossary.md': `# Glossary

- **DevBrain**: A persistent engineering intelligence layer. Example: "Check the DevBrain for the latest architectural decision."
- **[Domain Term]**: [One-sentence definition]. Example: "[Usage context]"
`,
    'repo-map.md': `# Repository Map

## Top-Level Structure
- \`src/\`: Application source code
- \`tests/\`: Test suites
- \`.devbrain/\`: Agentic intelligence layer

## Key Entry Points
- \`src/index.js\` (or equivalent): Main application entry

## Where to Add Features
- Add new domains under \`src/domains/\`

## Do NOT Touch
- \`generated/\`: Auto-generated code schemas.
`
  }
};

const writeDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const writeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf-8');
};

const main = async () => {
  console.log(ASCII_HEADER);
  
  let pName = path.basename(process.cwd());
  const projectName = await ask('Project name', pName);
  const techStack = await ask('Primary tech stack', 'Node.js');
  const teamSize = await ask('Team size (just me / 2-5 / 6+)', 'just me');

  if (fs.existsSync(DEV_BRAIN_DIR)) {
    const overwrite = await ask('.devbrain/ directory already exists. Overwrite? (y/N)', 'N');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Aborting initialization.');
      rl.close();
      return;
    }
  }

  console.log('\nInitializing DevBrain...');

  // Create base directories
  writeDir(DEV_BRAIN_DIR);
  writeDir(path.join(DEV_BRAIN_DIR, 'agents'));
  writeDir(path.join(DEV_BRAIN_DIR, 'supervisor'));
  writeDir(path.join(DEV_BRAIN_DIR, 'project'));
  writeDir(path.join(DEV_BRAIN_DIR, 'shared'));

  // Root files
  writeFile(path.join(DEV_BRAIN_DIR, 'README.md'), templates.root['README.md'](projectName));
  writeFile(path.join(DEV_BRAIN_DIR, 'manifest.json'), templates.root['manifest.json'](projectName, techStack, teamSize));

  // Agents
  const agentNames = ['planner', 'architect', 'frontend', 'backend', 'testing', 'qa', 'security', 'devops', 'docs'];
  for (const agent of agentNames) {
    const agentDir = path.join(DEV_BRAIN_DIR, 'agents', agent);
    writeDir(agentDir);
    writeFile(path.join(agentDir, 'SKILL.md'), templates.agents[agent].skill);
    writeFile(path.join(agentDir, 'workflows.md'), templates.agents[agent].workflows);
    writeFile(path.join(agentDir, 'memory.json'), templates.agents.memory());
  }

  // Supervisor
  writeFile(path.join(DEV_BRAIN_DIR, 'supervisor', 'routing.md'), templates.supervisor['routing.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'supervisor', 'orchestration.md'), templates.supervisor['orchestration.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'supervisor', 'project_state.json'), templates.supervisor['project_state.json'](projectName, techStack, teamSize));

  // Project
  writeFile(path.join(DEV_BRAIN_DIR, 'project', 'PRD.md'), templates.project['PRD.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'project', 'architecture.md'), templates.project['architecture.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'project', 'roadmap.md'), templates.project['roadmap.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'project', 'tech-stack.md'), templates.project['tech-stack.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'project', 'decisions.md'), templates.project['decisions.md']);

  // Shared
  writeFile(path.join(DEV_BRAIN_DIR, 'shared', 'conventions.md'), templates.shared['conventions.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'shared', 'glossary.md'), templates.shared['glossary.md']);
  writeFile(path.join(DEV_BRAIN_DIR, 'shared', 'repo-map.md'), templates.shared['repo-map.md']);

  console.log('\nGenerated File Tree:');
  console.log('.devbrain/');
  console.log('├── README.md');
  console.log('├── manifest.json');
  console.log('├── agents/');
  for (const agent of agentNames) {
    console.log(`│   ├── ${agent}/`);
    console.log('│   │   ├── SKILL.md');
    console.log('│   │   ├── workflows.md');
    console.log('│   │   └── memory.json');
  }
  console.log('├── supervisor/');
  console.log('│   ├── routing.md');
  console.log('│   ├── orchestration.md');
  console.log('│   └── project_state.json');
  console.log('├── project/');
  console.log('│   ├── PRD.md');
  console.log('│   ├── architecture.md');
  console.log('│   ├── roadmap.md');
  console.log('│   ├── tech-stack.md');
  console.log('│   └── decisions.md');
  console.log('└── shared/');
  console.log('    ├── conventions.md');
  console.log('    ├── glossary.md');
  console.log('    └── repo-map.md');

  console.log('\n✅ DevBrain initialized successfully!');
  console.log('\nNext Steps:');
  console.log('1. Read the newly created .devbrain/README.md to understand how AI agents will interact with this system.');
  console.log('2. Fill out .devbrain/project/PRD.md with your project details and requirements.');
  console.log('3. Run your preferred AI agent (Claude Code, Cursor, Codex) in this repository — they will automatically ingest the DevBrain context.');

  rl.close();
};

main().catch(err => {
  console.error('Error during DevBrain initialization:', err);
  process.exit(1);
});
