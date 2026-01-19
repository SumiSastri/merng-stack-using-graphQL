# The MERNG stack - Mongo-Express-React-Node-GraphQL

Client:
React-19
Typescript

Server:
MongoDb
Express
Node: v21.6.1 upgraded to v25.4.0 with `nvm install node`

Query Language:
GraphQL

Package manager:
npm 10.2.4 upgraded to v11.7.0
Lerna

nvm 0.39.7

## Migration updates

### Lerna from v5 to v9

No breaking changes

### React from 17 to 18 as interim move stablise at 18 before migrating to 19

Several migration steps with breaking changes:

- Removing CRA
- Uninstall recompose
- Add Vite as compiler
- Move to strict mode all file extensions changed

### React Router v5 to v6

Breaking changes:

- Switch replaced by Routes HOC 
-  `<Route path="/books-and-authors" element={<BooksIndex />} />`
