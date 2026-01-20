# Scaffolding

## Node environment

- [Guidance - geek-for-geeks](https://www.geeksforgeeks.org/node-js/update-node-js-and-npm-to-latest-version/)

nvm - update with `nvm install -g @latest`

Node LTS -  v24.13.0 (explicitly install)

```bash
rm -rf node_modules package-lock.json
nvm install 24.13.0   
npm install
```

## Package management

npm 10.2.4 to (npm v11.6.2)

Check file path of your node and npx packages - should be in binary files (bin/node)

```bash
where node
where npm
where npx
node -e "console.log('node:', process.version, '\nexe:', process.execPath)"
```

Pin to root with dot files

```bash
.npmrc
.nvmrc
```

### Migration from Lerna 5 to v9.0.3

Update version in `package.json` file - no breaking changes

```bash
rm -rf node_modules package-lock.json
npm install
```

## Migration from React 17 to 19

- Resolving several dependency errors from v-17 which used CRA (create-react-app)
- Migrate to v-18 and stablise as there are several breaking changes in 19

- [Upgrade guide docs](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [Change-log](https://github.com/facebook/react/blob/main/CHANGELOG.md)

- _Cheatsheet_

1.Remove all CRA deps

```bash
rm -rf node_modules
rm -rf build
rm -rf public
rm package-lock.json
```

- `npm uninstall recompose` deprecated dependency since React-18 and migration to Hooks
- Remove old deps like react-scripts from package-json and change deps to

```bash
  "dependencies": {
    "@apollo/client": "^4.1.0",
    "graphql": "^16.12.0",
    "lodash": "^4.17.21",
    "lodash.flowright": "^3.5.0",
    "prop-types": "^15.8.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "rxjs": "^7.8.2",
    "web-vitals": "^2.1.4"
  },
  ```

2.Run `npm install` and check deps correctly installed

```bash
npm ls react (all deps should be 18.1.0 or above but not 19.0)
npm ls react-scripts (should be empty)
npm ls react-router-dom (should be 6.30.3)
```

3.Install Vite plugin `npm install -D vite @vitejs/plugin-react`

- Add scripts to `.package-json`

```bash
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

- Add `vite.config.js` to root

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

- Ensure `App.js` changed to `jsx` v18 changelog is stricter. Every `.js` file will have to change to `.jsx` to compile

### React Router v5-v6 breaking changes

- [Upgrade to React Router v6 Documentation](https://reactrouter.com/upgrading/v6)
- [Changelog React Router](https://github.com/remix-run/react-router/blob/main/CHANGELOG.md#futurev7_starttransition)

- _Cheatsheet_

1. Change imports to Routes instead of Switch, the Route paths now take the HOC Routes
2. `<Route path="/book-clients" element={<BookClientsIndex />} />`

```javascript
      <Routes>
        {/* home */}
        <Route path="/" element={<PageLinks />} />
```

- Route HOC props naming convention has changed from component to element, props have to be explicity declared
- Router HOC is used only once in the `index.jsx` root of the app as `BrowserRouter` and is removed as `Router` HOC from a routing page
- `useHistory` hook changed to `useNavigate`

### Debug logs and challenges

- Node versions not matching required Vite packages - change from v21 upgraded to v24
- React components not rendering - change components `.js` files to `.jsx` to adhere to strict mode in v18
- React components not rendering after `.jsx` updates - ReactRouter v5-v6 fixes required
- React components not rendering - errorBoundary added to `index.jsx`
- No errors, no console errors - components still not rendering - debug logs added

```bash
// console.log("Index.jsx loaded");

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("Root container:", document.getElementById('root'));
// console.log("Rendering App now...");
```

- Logs showed script tags mandatory although Vite docs say No script tags needed: Vite injects your entry point automatically

### Apollo client-side server for GraphQL v3.3-v4 breaking changes

- [Changelog Apollo client-side server](https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md)

- Key changes from v3
- Framework-agnostic core with React exports moved to @apollo/client/react
- Observable implementation now uses rxjs instead of zen-observable
[Codemods](https://www.apollographql.com/docs/react/migrating/apollo-client-4-migration#codemod)

_Cheatsheet_

| Key Import codemod                           | Apollo Client 4 import         |
| -------------------------------------------- | ------------------------------ |
| `useQuery`, `useMutation`, `useSubscription` | `@apollo/client/react`         |
| `ApolloClient`, `InMemoryCache`, `HttpLink`  | `@apollo/client/core`          |
| `gql`                                        | `@apollo/client/core`          |
| React context utilities                      | `@apollo/client/react/context` |
| ApolloProvider                               | `@apollo/client/react`         |
