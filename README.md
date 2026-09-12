# Playwright Demo Framework

## Tech Stack

- Playwright
- JavaScript
- Page Object Model
- API testing with service classes
- UI testing with page objects

## Features

- UI Testing
- API Testing
- Reusable fixtures and service classes
- Public sample API default configuration
- CI/CD ready setup

## Project Structure

```text
playwright-demo-framework/
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
├── README.md
├── fixtures/
│   ├── api/
│   │   ├── api.base.fixture.js
│   │   ├── api.auth.fixture.js
│   │   ├── api.user.fixture.js
│   │   ├── api.client.js
│   │   └── services/
│   │       ├── api.base.service.js
│   │       ├── api.auth.service.js
│   │       └── api.user.service.js
│   └── ui/
│       └── ui.base.fixture.js
├── pages/
│   └── login.page.js
├── tests/
│   ├── api/
│   │   ├── api.test.spec.js
│   │   ├── auth.api.spec.js
│   │   └── user.api.spec.js
│   └── ui/
│       ├── ui.login.spec.js
│       └── ui.login.page.spec.js
├── test-data/
├── utils/
│   └── Config.js
├── reports/
└── .github/
```

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env` and update values as needed.

```bash
copy .env.example .env
```

Example values:

```env
API_BASE_URL=https://jsonplaceholder.typicode.com
API_TOKEN=
API_LOGIN_PATH=/login
API_USERS_PATH=/users
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run API tests only

```bash
npx playwright test tests/api
```

### Run UI tests only

```bash
npx playwright test tests/ui
```

### Run a single API test file

```bash
npx playwright test tests/api/api.test.spec.js --reporter=line
```

### Run a single UI test file

```bash
npx playwright test tests/ui/ui.login.page.spec.js --reporter=line
```

## API Framework

- `fixtures/api/api.base.fixture.js` creates the shared `apiClient` fixture for worker-scoped API requests.
- `fixtures/api/api.auth.fixture.js` adds the API auth-related fixture using `AuthApi`.
- `fixtures/api/api.user.fixture.js` adds the user-related fixture using `UserApi`.
- `fixtures/api/api.client.js` is the central HTTP wrapper for request handling and headers.
- `fixtures/api/services/api.base.service.js` keeps the shared base class for API services.
- `fixtures/api/services/api.auth.service.js` exposes login-related endpoints.
- `fixtures/api/services/api.user.service.js` exposes user-related endpoints.
- The default `API_BASE_URL` is configured to use a public sample API, so example tests work without a local backend.

## UI Framework

- `fixtures/ui/ui.base.fixture.js` is the base UI fixture used for browser-based tests.
- `pages/login.page.js` is the page object model for login-related UI flows.
- UI tests live under `tests/ui` and can reuse the same page objects and fixture patterns.

## Notes

- API tests are separated from UI tests under their respective folders.
- This makes it easier to run, maintain, and scale both automation areas in the same project.
- For real projects, update `.env` values and service endpoints to match your actual application APIs.
