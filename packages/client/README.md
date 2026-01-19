# Scaffolding

## Migration from Lerna 5 to v9.0.3

Update version in `package.json` file
`rm package-lock.json`
`npm install`

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
    "@apollo/client": "^3.5.5",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "graphql": "^16.5.0",
    "lodash": "^4.17.21",
    "lodash.flowright": "^3.5.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
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
