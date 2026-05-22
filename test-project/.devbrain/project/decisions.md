# Architecture Decision Records (ADRs)

## 1. Initial Architecture
- **Status**: Accepted
- **Context**: We need a starting structure that balances speed of development with long-term maintainability.
- **Decision**: We will use a modular monolith approach with strict domain boundaries before considering microservices.
- **Consequences**: Easier deployments and refactoring in the short term, but requires discipline to maintain boundaries.
