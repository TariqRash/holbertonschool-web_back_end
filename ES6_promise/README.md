# ES6 Promises

A collection of JavaScript functions demonstrating ES6 Promises, async/await, and error handling.

## Learning Objectives

- Promises (how, why, and what)
- How to use `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an `async` function

## Requirements

- Node 20.x.x
- npm 9.x.x
- Jest for testing
- Babel for transpilation
- ESLint for linting

## Tasks

| File | Description |
|------|-------------|
| `0-promise.js` | Returns a basic Promise |
| `1-promise.js` | Resolves or rejects based on a boolean argument |
| `2-then.js` | Handles promise resolution and rejection with `.then` / `.catch` / `.finally` |
| `3-all.js` | Resolves multiple promises with `Promise.all` |
| `4-user-promise.js` | Returns a resolved promise with user data |
| `5-photo-reject.js` | Returns a rejected promise with an error message |
| `6-final-user.js` | Uses `Promise.allSettled` to handle multiple promises |
| `7-load_balancer.js` | Returns the first resolved promise using `Promise.race` |
| `8-try.js` | Throws an error when dividing by zero |
| `9-try.js` | Uses try/catch/finally to build a guardrail queue |
| `100-await.js` | Async function using `await` with fallback on failure |

## Setup

```bash
npm install
```

## Run Tests

```bash
npm run full-test
```

## Author

Holberton School — Web Back End
