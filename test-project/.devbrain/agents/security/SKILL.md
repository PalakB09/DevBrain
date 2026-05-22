---
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
```
[ ] Threat model considered before implementation
[ ] Input sanitized and validated
[ ] No secrets ever logged
[ ] Every endpoint authenticated AND authorized
[ ] Cross-user access blocked and tested
```
