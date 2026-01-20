# The MERNG stack - Mongo-Express-React-Node-GraphQL

<img src="packages/docs/assets/GraphQL-React-Mongo-App.png" alt="Authors Repo using GraphQL-React-MongoDb" height="350"/>

This repo has been updated and key packages migrated in phases

1._Node environment_

- nvm 0.39.7
- Node: v21.6.1 to 25.4.0 with `nvm install node`

2._Package-management_

- npm 10.2.4 to v11.7.0
- Lerna v5 to v9

3._Client-side_

- React-17 to React-18
- Compiler Vite
- ReactRouter-5 to v6

4._Admin_

- Documentation updates
- Migration changelog

_Query Language_

- GraphQL
- Client-server - Apollo

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

Several breaking changes some HOCs deprecated, others added

- BrowserRouter wraps all routes in root - top of the tree
- Switch HOC replaced by Routes HOC - next in the tree
- Route HOC props naming conventions changed - last in the tree
- Disambiguation Routes and Route are separate HOCs
