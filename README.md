# The MERNG stack - Mongo-Express-React-Node-GraphQL

A book repo using GraphQL-React-MongoDb and Lerna as a package manager. This repo is updated and key packages migrated in phases.

<img src="packages/docs/assets/GraphQL-React-Mongo-App.png" alt="Book publishing repo using GraphQL-React-MongoDb" height="350"/>

- Code editor : VSCode

- Scripts
- Client: `nvm use && npm run dev` 
- LocalHost: `http://localhost:3000/`
- In root `npx lerna bootstrap` - once all packages are updated, this is a quick way to update dependencies across packages

## January 2026

1._Node environment_

Node 24.13.0 (LTS) - latest v25 non-stable version

2._Package-management_

- npm 10.2.4 to npm v11.6.2
- Lerna v5 to v9

3._Client-side_

- React-17 to React-18
- Compiler Vite
- ReactRouter-5 to v6

4._Admin_

- Documentation updates
- Migration changelog
- CSS - combination of bootstrap and vanilla css (cosmetic changes - add mobile breakpoints and styling)

5._Client-side-server_

- Apollo v3 to v4 - React-19 ready

## In planning

_Client-side_

- React-18 to React-19
- React PropTypes to TypeScript
- Zod validation
- Vite testing

_Query Language_

- GraphQL
- Client-server - Apollo

_Server-side_

MongoDb
Express

### Detailed documentation

See detailed migration changelog in README for docs folder. Technical details of migration in README docs in client and server packages.
