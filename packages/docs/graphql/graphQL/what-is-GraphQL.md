# What is GraphQL

Facebook started GraphQL as an internal project. They started the GraphQL project to overcome data fetching issues in their native mobile platform. 

GraphQL was Facebook's opportunity to rethink mobile app data fetching from the perspective of product designers and developers. It moved the focus of development to the client apps where designers and developers spend their time and attention on. In 2015, Facebook open-sourced GraphQL.

GraphQL today is an open source query language to call APIs. It's not a library. It's not a product. It's not a database. It is both a language and a run-time environment.

The language is strongly-typed, with methods for queries, mutations, subscriptions and fragments.

The run-time environment fulfils queries that have come back from the server response data.

It is an alternative to the REST API - so instead of hitting a URL endpoint and getting a massive JSON object back, the GraphQL language lets you write a query to request for exactly the data that you want and receive the results while the GraphQL runtime environment helps you filter out all the data that is not required.

GraphQL provides clients the power to ask for exactly what they need and receive the response with what they asked for. With GraphQL you can get all the data that you need within a single request. GraphQL allows you to aggregate queries and fetch all the data in one request, avoiding multiple request-response cycles.

# What is Introspection in GraphQL

Introspection is the ability to query which resources are available in an API-schema. Introspection allows us to see types, fields, queries and mutations in GrapQL API calls.

`__schema` with the double underscore allows the parsing of the introspection.

As a run-time environment, GraphQL validates, queues and batches, organises and directs data with inbuilt algorithms to make the request-response mechanism fluid and accurate.

It is agnostic of protocols in the service-layer and HTTP (hyper-text-transfer-protocol), SSH, Sockets (using polling and subscriptions), CLI (command line interface) can be used depending on the use case.

It is just a query language and it is completely agnostic of the language. Due to this, plenty of client and server libraries have evolved across multiple languages in the GraphQL ecosystem.

Facebook started GraphQL as an internal project. They started the GraphQL project to overcome data fetching issues in their native mobile platform. GraphQL was Facebook's opportunity to rethink mobile app data fetching from the perspective of product designers and developers.

It moved the focus of development to the client apps where designers and developers spend their time and attention on. In 2015, Facebook open-sourced GraphQL, and ever since then has been huge community involvement with GraphQL.

Today there are a huge number of tools and libraries that have been developed to support the GraphQL ecosystem across several languages.

GraphQL came into existence due to the need for better flexibility and efficiency in client-server communication.

Today, GraphQL has become comparable, or an even better alternative to REST APIs with the wide adoption among several Fortune 500 companies and has even replaced REST APIs.

PayPal, Yelp, GitHub and Twitter are early adopters.
