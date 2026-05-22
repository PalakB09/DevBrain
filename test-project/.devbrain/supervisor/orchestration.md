# Orchestration Chains

Explicit coordination chains for complex workflows.

## 1. UI Change
- **Trigger**: A new user-facing feature or modification to an existing interface.
- **Steps**:
  1. `frontend`: Implement the component API and styling.
  2. `testing`: Ensure regression tests pass and new behavior is covered.
  3. `docs`: Update UI documentation or storybooks.
  4. `qa`: Test edge cases (accessibility, responsive design).
- **Handoff Responsible**: The agent completing the previous step.
- **Blocker**: Missing tests block docs and QA.

## 2. New API Endpoint
- **Trigger**: A requirement for new data access or mutation from the client.
- **Steps**:
  1. `backend`: Define contract and implement logic.
  2. `testing`: Write integration tests.
  3. `docs`: Update API specifications.
  4. `security`: Perform authorization review.
- **Handoff Responsible**: `backend` initiates the chain.
- **Blocker**: Missing security review blocks deployment.

## 3. Security Finding
- **Trigger**: A vulnerability is discovered by tools or manual review.
- **Steps**:
  1. `security`: Assess and document the threat model.
  2. `architect`: Review structural implications of the fix.
  3. `backend`/`frontend`: Implement the fix.
  4. `qa`: Verify the fix effectively mitigates the vulnerability.
- **Handoff Responsible**: `security` oversees the entire chain.
- **Blocker**: Unclear threat model blocks implementation.

## 4. Deploy
- **Trigger**: A release candidate is ready.
- **Steps**:
  1. `devops`: Prepare infrastructure and execute deployment.
  2. `qa`: Perform smoke testing in production/staging.
  3. `docs`: Publish release notes.
- **Handoff Responsible**: `devops`
- **Blocker**: Failing smoke tests mandate immediate rollback.
