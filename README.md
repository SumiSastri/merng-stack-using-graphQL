# The MERNG stack - Mongo-Express-React-Node-GraphQL

This repo has been updated and key packages migrated in steps:

_Package-management_

nvm 0.39.7
npm 10.2.4 to v11.7.0
Node: v21.6.1 to 25.4.0 with `nvm install node`

Lerna v5 to v9

_Client-side_

- React-19
- Typescript added
- Compiler Vite

_Query Language_
GraphQL

_Server-side_
MongoDb
Express

## Migration changelog

### Lerna from v5 to v9

- No breaking changes

### React from 17 to 18 as interim move stablise at 18 before migrating to 19

Several migration steps with breaking changes:

- Removing CRA
- Uninstall recompose
- Add Vite as compiler
- Move to strict mode all file extensions changed
- Stablise at v18

### React Router v5 to v6

- Switch HOC replaced by Routes HOC, change imports and nesting of HOC
- Address breaking changes in Links HOC and routing requirements
