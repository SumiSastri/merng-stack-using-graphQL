# What is Apollo

Apollo is a client-server that implements GraphQL query rules (protocols) in queries between a client and server. As the TCP-IP network layer operates on a series of network handshakes, data queries between client and server can be exposed to man-in-the-middle attacks as the data scripts are not encrypted.

Raw data must be encrypted and decrypted via access rules, tokenisation and encryption protocols.

With native JavaScript, the native `fetch()` method in JavaScript is usedto run queries or other HTTP runners like the Axios library that abstracts some of the code to make the request-response cycle easier to handle and debug.

With Apollo the advantages over these other methods and libaries is that Appollo handles front-end HTTP requests and resolves key issues in the hand-over of data from the front-end to the back end specifically with GraphQL vs. REST.

Apollo has its own methods for the GraphQL library and resolves the front-end mutations handling the state-management in the front-end for the React library.

A cache for example, the in-memory cache, stores the data temporily in the Apollo client cache and displays the received data from the HTTP request without a delay.

There is some boiler plate/ config to set up an Apollo Client - look at `index.js` where the InMemoryCache and other Apollo state-management functionality is added and available right through the app as a wrapper (Provider).

## Section Resources

- [What is Apollo by Youtuber Syntax](https://www.youtube.com/watch?v=mSzUb7f47qk)