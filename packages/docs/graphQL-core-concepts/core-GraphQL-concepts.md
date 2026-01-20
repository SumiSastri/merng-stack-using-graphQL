# Data queries with GraphQL

Queries are used to query data in a database.

The query operation is composed of:

Fields - specific fields required by the front-end data-layer
Arguments -
Alias - if there are arguements with the same name, you need to create an alias to avoid errors
Fragments - reusable units (similar to functions - build sets of fields that you can use in mutliple queries) notated with 3 dots like the spread operator in JavaScript
Operation Name - unique name for the query keyword is `query` this is an anonymous query, you can also have unique named queries
Variables - similar to functions with input arguments

https://app.pluralsight.com/guides/querying-data-with-graphql

## How to set up a query with GraphQL

A query is set up as an object and related queries as nested objects.

eg:
```bash
{
  book(id:"1"){
    name
    id
    genre
  }
}
```

Accessed /graphiql (in local host)

An example GraphQL query might look like:

```bash
     {
       field(arg: "value") {
         subField
       }
     }
```

## Strongly typed GraphQL

- uses strongly-typed schema which serves as a contract between client & server

**scalar types or primitive data**

- Integers: a signed 32-bit integer
- Floats: a double-precision floating point value
- Strings: text characters
- Booleans: true or false
- Enums: special scalar types that are restricted to a particular set of allowed values
- ID : used to re-fetch an object or used as a key for a cache

**query and mutation types**
In a graphQL schema which is an object there are 2 additional types

query = request in REST
mutation = change api-data

query - mandatory
mutation - optional

**non-nullable types**

A type can be either set to one type or null, if we do not want a null value, a non-nullable type is set with `!`

## GraphQL mutations

Mutations are similar to the rest verbs create-update-delete.

GraphQL assumes there will be side-effects ater mutation operations and changes the dataset after mutation
key word `mutation` the operation defined in an object.

A resolver function is a function that resolves a value for a type or field in our GraphQL schema. Resolvers can return objects or scalars like strings, numbers, Booleans, et cetera. They can also resolve values from another REST API, database, cache, or any other source. So, the GraphQL Server is where we'd write these resolver functions that mutate the data.

## Keyboard shortcuts

Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
Merge Query:  Shift-Ctrl-M (or press the merge button above)
Run Query:  Ctrl-Enter (or press the play button above)
Auto Complete:  Ctrl-Space (or just start typing)


## What is introspection in GraphQL

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
