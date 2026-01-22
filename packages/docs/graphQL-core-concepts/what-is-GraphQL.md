# What is GraphQL

Facebook started GraphQL as an internal project. They started the GraphQL project to overcome data fetching issues in their native mobile platform. In 2015, Facebook [open-sourced GraphQL](https://graphql.org/)

GraphQL is not a library. It's not a product. It's not a database. It is both a language and a run-time environment. It's main function was to query data from backend databases and then manage this data in the state of a React UI component.

Prounounced `grafical`, and written in JavaScript it is database and storage engine agonstic.

It is an alternative to the REST API, GraphQL allows you to write a strongly-typed query to request for exactly the data required and receive type-safe results.

## How is GraphQL different from REST?

REST APIs, or representational state transfer APIs, transfers a representation of the state in the data-layer of the app in the form of a request header to the API-end point. The request is then matched and a response is sent back through the HTTP (Hyper-Text-Transfer-Protocol) request-response cycle. Each data-set required by the data-layer in the front-end of the app needs a matching API.

For example, to create a book app, an API for the books, authors, the genres of books require a create-update-delete (CRUD) route for each of these operations. The request send out sends back a response in a `.json` file, all the data is sent back. There is a data-transformation process in the front-end of the app. Data is mutated (modified) after the `.json` response is received.

With GraphQL, this filtering out of unwanted data happens in the query method and the response is returned `.json` ready for use in the application state. With one query GraphQl aggregates the data you require for the application. There is no under or over fetching of data - this improves the efficiency of the call.

REST retreives a significant amount of data, inbuilt in the HTTP request as cached data ( data saved in a buffer temporarily). This is not a feature of GraphQL. Client-side servers like Apollo, used in this application, cache data.

In terms of testing and deployment, GraphQL queries are easier and quicker to test than REST where every route has to be tested and data validated. GraphQL is also easy to integrate into legacy systems that use REST. A hybrid system can operate until the switch over.

## GraphQL advantages

- Aggregated queries in one query
- Exact requirements met - language agnostic
- Strongly-typed - predictability of query - error-handling with the schema validation with resolver functions
- Eco-system and tooling - server libraries batch resolving
  -- IDE's - GraphQL Visual Editor
  -- GraphQL Client libraries like (Apollo-Client- most widely adopted) (Relay-Client - specifically for react for data-fetching) writing queries to the backend to get the data. Incerceptors for caching query results as it does not come out of the box with GraphQL
  -- GraphQL Server libraries send responses back (Apollo-Serverside) (ExpressGraphQL) (GraphQL Yoga) Network-Layer - GraphQL Execution Engine - query from client to backend parsed or read - schema validated - query received is traversed field by field with resolver function for each field the execution alogrithm sending data back in the right order and shape as requested as json )
  -- Database to GraphQL server - Prisma (supports RDBMS and noSQL dbs) replaces ORMs - subscriptions
  -- GraphQL Voyager - schema representation with entity mapping
  -- GraphQL Faker - mock data
 - increase the multi-team productivity BE-FE teams can work in parallel, which enhances the multi-team productivity. Increased productivity among developers lead to a speed-up in the product development. With GraphQL, it is possible to completely redesign the UI of your app without needing to touch the back-end. 
 
- no multiple roundtrips to fetch data, and with no reason for over-fetching data, GraphQL is naturally more efficient. This improves performance of your API calls, hence, speeding up your app. 

-  GraphQL APIs need to be tested only when there is a change in the schema or if there's a fresh schema. This means reduced cost in testing for your business. This also holds true for deployments. Compared to REST, GraphQL is much less expensive for testing and deployments. 
-  GraphQL can be used to unify your existing legacy systems and hide the complexities behind the new GraphQL API. Now your new front-end applications can be developed to simply talk to the GraphQL server. They can fetch the data that they need. The GraphQL server is then responsible to fetch the data from the existing systems and return the right JSON back. This would be a good addition to your code, making front-end applications communication with your server much better and clearer.

- Developer community (Twitter/ Facebook/ )

## GraphQL trade-offs

- One of the cons is developers can do anything against schema - aliases of the same query to return different bits of information
- Caching not embedded as in HTTP - so you have to refetch data (done with Apollo)
- Error handling and schema validation require client-server libraries as add-ons (or write logger functions)
- Hack risks due to CSP allowing access to internals of the schema


#### FURTHER READING

- Lee Byron, "GraphQL a data query language"[Available at GraphQL blogs](https://graphql.org/blog/2015-09-14-graphql/)