# Playwright Demo Framework

## Tech Stack

- Playwright
- JavaScript
- Page Object Model

## Features

- UI Testing
- API Testing
- Reporting
- CI/CD Ready

## Execution

npm install

npm run test:api
# or
npx playwright test

## API framework

- `fixtures/api/base.fixture.js` creates the shared `apiClient` for worker-scoped API requests.
- `fixtures/api/auth.fixture.js` adds the `authService` fixture for authentication flows.
- `fixtures/api/user.fixture.js` adds the `userService` fixture for user endpoints.
- `fixtures/api/services/BaseApiService.js` is the shared base class for service objects.
- `fixtures/api/services/AuthService.js` and `fixtures/api/services/UserService.js` wrap endpoint-specific actions such as login and user CRUD calls.
- Tests import the relevant fixture for the module they cover, e.g. `fixtures/api/base.fixture.js`, `fixtures/api/auth.fixture.js`, or `fixtures/api/user.fixture.js`.
- Set `API_BASE_URL`, `API_LOGIN_PATH`, `API_USERS_PATH`, and optionally `API_TOKEN` in a `.env` file to configure requests.
