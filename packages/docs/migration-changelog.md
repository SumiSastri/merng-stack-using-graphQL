# Migration changelog

This section time-lines the key migration phases from v1.0.0 to v2.0.0
Updates technical details and debugging in client and server README docs.

## January 2026

1._Node environment_

- nvm 0.39.7

Node LTS -  v24.13.0
Note odd numbers of Node versions will not work LTS v20, v22 and v24 only

2._Package-management_

- npm 10.2.4 to v11.7.0
- Lerna v5 to v9
- No breaking changes

### React from v17 to v18

Several migration steps with breaking changes:

- Remove CRA (Bootstrapped with `npx create-react-app`)
- Remove deps(`npm install @apollo/client grapql react-router react-router-dom react-icons lodash lodash.flowright`)
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

Non-breaking changes- refactors

- Use NavLinks HOC instead of Link for routing

### CSS

Add bootstrap CDK to `index.html` - vanilla CSS used for static components

 ```bash
<!-- Bootstrap CDN -->
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    crossorigin="anonymous"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"
  ></script>
<!-- Bootstrap CDN ends -->
```

### CSP - Cross Site Scripting Policy

The CSP in the index.html file has been added based on MDN docs

```bash
  <!-- CSP Policy -->
  <meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src https://*; child-src 'none';">
  <!-- CSP policy ends -->
```

This CSP policy can whitelist some sites - template for updates

```bash
<meta http-equiv="Content-Security-Policy"
      content="
        default-src 'self';
        script-src 'self' https://trusted-cdn.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' https://images.example.com;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https://api.example.com;
        frame-src 'none';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
      ">
```

__Server-side dependencies__

- [Apollo](https://www.npmjs.com/package/@apollo/client)
- [Apollo getting started](https://www.apollographql.com/docs/react/get-started?utm_source=github&utm_medium=apollographql_apollo-client&utm_campaign=readme)


There are several options like grapql-yoga and systems like graph-cms, etc.,

The libraries used in this repo are:

`npm install express express-router graphql express-graphql helmet cors dotenv nodemon lodash lodash.flowright mongoose colors --save-dev`

express-graphql works well with JavaScript, express in a node environment.

__Package management__
Lerna can be added to manage the 2 repos more efficiently.

1. Install lerna in root `npm install lerna --save-dev`
2. Initialise the package `npx lerna init`
You should have an empty packages folder in root as well as a `lerna.json` and `package.json` file
3. Add a `.gitignore` file to ignore node modules

Run these package methods if needed.
`npx lerna clean -y` removes duplicate node modules and any mismatches in the existing packages
`npx lerna bootstrap --hoist` - hoists dependencies from all packages in the root node module

Server-side:
- set up MongoDb/ whitelist IP/ check password and `.env` file for MONGO_URI

cd packages/server - `nodemon server`
cd server and `nodemon server` to spin up server in local host (port 4000 || port of your choice)

entry-point in package-json
 `"main": "server.js",`
LocalHost: `http://localhost:4000/graphql` once you have set up the express server 

__dotenv file__

NODE_ENV="development"
PORT=4000
MONGO_URI=mongodb+srv://username:password@cluster0.slip5.mongodb.net/test? (or name of db)

__graphiql__

`http://localhost:4000/graphql`
# Dbs
MongoDb
Mongoose - ORM
Connect with Mongo Atlas

To ensure you can get the `graphql` data in the express server ensure that in the `helmet` midware CSP is set to false

```bash
app.use(helmet({
  contentSecurityPolicy: false,
}));
```
