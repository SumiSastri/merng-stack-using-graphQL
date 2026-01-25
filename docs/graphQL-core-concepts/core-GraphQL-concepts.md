# GraphQL core concepts

GraphQL sends string queries to a server for interpretation and fulfilment. The response is returned in a `.json` file format. It is consumed by the user interface (UI) components of an application to manage UI-state. Queries on the front end are language agnostic, front-end clients such as Apollo-Client.

Apollo Client should not be confused with Apollo Server. Apollo Client is a GraphQL runner in the same way Axios is an HTTP runner. Apollo Server is a GraphQL execution engine that runs on top of HTTP servers such as Express or Fastify. It is not a replacement for these services but an add-on service.

To query graph-based API calls, you can use GraphiQL [available here](https://graphql.org/swapi-graphql/) as you would use Postman or Insomnia for REST APIs. GraphiQL an in-browser IDE, documentation browser, and query runner initially used internally by Facebook only, but now made open-source.

For easy access, the keyboard shortcuts provided in the comments are posted here:

- Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
- Merge Query:  Shift-Ctrl-M (or press the merge button above)
- Run Query:  Ctrl-Enter (or press the play button above)
- Auto Complete:  Ctrl-Space (or just start typing)

Versions of the GraphQL runtime are being built in many languages, including Go, Ruby, Scala, Java, .Net, and Python.

## Understanding the execution architecture

The GraphQL server owns the data and enforces the schema. Apollo Client does not own the data or the contract; instead, it consumes and parses GraphQL documents (queries and mutations), executes them against the (GraphQL) remote server, normalises and caches the results, and notifies subscribers (typically UI components). It mirrors the GraphQL schema as part of the normalisation of data during data caching. In summary, it parses GraphQL documents into an internal AST for execution and caching.

In this sense, Apollo Client behaves as a state-management system layered on top of a remote data source, and conceptually resembles Redux. The key difference is that the Apollo Client caches and mirrors the GraphQL remote state, while Redux stores and owns local state in a Redux store. Redux is a state container, while GraphQL is primarily a query runner, middleware that caches data and makes local UI components "aware" of the remote state via internal queries or subscriptions.

This decoupled system allows data to be shared between diverse platforms. Instead of being "locked" into a local state, the data can flow from platform to platform, solving the challenge of interoperability of the same data across multiple platforms.

To elaborate on how this layered system works, at the top of this layered system is the design layer - the components that render the user interfaces. State, or the data of these UI components, changes with user interactions - clicks of buttons, navigation from page to page, and inputs into forms. The design layer consumes data provided by data fetching tools (runners) - Axios and Apollo Client - to change the look and feel or state of the UI.

At the application layer, the software in the front-end drives the UI behaviour. Individual application software ships with methods to handle the jobs it is performing. React components have state-management hooks and routing methods that drive the UI application, while Apollo has its own methods to handle GraphQL queries and mutations for the consumption of the UI libraries. The application's business logic depends on the features, UI-UX design, branding rules, and CSS libraries that an enterprise may wish to display or use.

The foundation layer or the infrastructure layer takes care of HTTP servers, storage of applications, deployment of cloud services, databases and database connections, caching and encryption layers and servers that connect front-end applications with infrastructure applications. The GraphQL Server is another cloud-based or on-premise server used to fetch data from storage systems.

## GraphQL queries - how they work within the architectural framework

Through the lens of the architecture described above, at the server-level, GraphQL queries are written in the GraphQL Query Language (GQL), consisting of operations and selection sets. They are not runtime objects; they are static documents that get parsed into an Abstract Syntax Tree(AST) by the Apollo Client.

Fields map to GraphQL schema resolvers, not endpoints. Nodes in the AST represent fields, arguments, operations, and fragments. Edges represent nesting (e.g., a field inside another field). This allows Apollo Client to analyze which parts of the query are requested, normalize and cache data by entity and track dependencies for UI updates as well as
execute the query efficiently against the remote server by selecting only the requested fields.

 Using GraphiQL run this query to see how the tool works. The StarWars Films API endpoint is provided by GraphQL in its official docs and training.

```bash
# operation name
query GetAllFilms {
# nested query exposes endpoint
  allFilms {
  # nested query exposes data you require
    films {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
}
```

All queries are strongly typed. A basic query has an operation name, and may accept arguments. Advanced queries would also use fragments, which are resuable units. Fragments are closer to macros, not functions (they don’t accept arguments).

_GraphQL Types_

- Integers: signed 32-bit integer
- Floats: double-precision floating point value
- Strings: text characters (UTF-8 text)
- Booleans: true or false
- Enums: special scalar types that are restricted to a particular set of allowed values
- ID : used to re-fetch an object or used as a unique key for a cache
- **non-nullable types (!)** : A type can be either set to one type or null, if we do not want a null value, a non-nullable type is set with a non-null modifier `!`.

```bash
# non-nullable types and variables that are strongly typed
query GetAllFilms($firstFilms: Int) {
# query GetAllFilms($firstFilms: Int!) { # Int! makes the variable required or non-nullable; the server will reject if missing
  allFilms(first: $firstFilms) {
    films {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
}
```

This contract is validated by the GraphQL server and consumed by clients such as Apollo Client, which parse the query document and use variables at runtime. Runtime parsing is decoupled from compile time composition.

The `gql` tag parses the GraphQL document into an AST so Apollo can analyse it for caching, data normalisation, and execution in UI state-management.

```bash
import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query GetAllFilms($firstFilms: Int) {
    allFilms(first: $firstFilms) {
      films {
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
      }
    }
  }
`;
```

A specific query is then written as a utility method to be used to manage state of an individual UI component.

```bash
useQuery(GET_ALL_FILMS, {
  variables: { firstFilms: 3 }
});
```

This query can be repurposed for another UI component with a different variable set

```bash
useQuery(GET_ALL_FILMS, {
  variables: { firstFilms: 10 }
});
```

Initially repetitive and confusing is the fact that GraphQL queries written server-side mirror the query written on a client data fetching tool such as Apollo Client. Once the architecture of the request-response cycle is clear, the benefit of this precision is that it easy to predict the shape of the data returned by the remote server from a client-based query string. It also simplifies how to write a query if you know the data your app needs.

Importantly, the strong-typing and mirrorring helps GraphQL to provide descriptive error messages before executing a query. It also plays well with the strongly typed native (mobile) environments.

## GraphQL mutations and resolver functions

Mutations are similar to the REST-API verbs create-update-delete.

GraphQL assumes there will be side-effects ater mutation operations and changes the dataset after mutation
key word `mutation` the operation defined in an object.

A resolver function is a function that resolves a value for a type or field in a GraphQL schema. Resolvers can return objects or scalars like strings, numbers, booleans.

They can also resolve values from another REST API, database, cache, or any other source. The GraphQL Server is where  resolver functions are written to mutate the data.

## What is introspection in GraphQL

Introspection is the ability to query which resources are available in an API-schema. Introspection allows us to see types, fields, queries and mutations in GrapQL API calls.

`__schema` with the double underscore allows the parsing of the introspection.

As a run-time environment, GraphQL validates, queues and batches, organises and directs data with inbuilt algorithms to make the request-response mechanism fluid and accurate.

It is agnostic of protocols in the service-layer and HTTP (hyper-text-transfer-protocol), SSH, Sockets (using polling and subscriptions), CLI (command line interface) can be used depending on the use case. GraphiQL helps developers learn and explore an API quickly without grepping the codebase or wrangling with cURL.

## FURTHER READING

- Benny Au, "Querying Data with GraphQL", [Available at PluralSight:](https://app.pluralsight.com/guides/querying-data-with-graphql)

- Lee Byron, "GraphQL a data query language"[Available at GraphQL blogs](https://graphql.org/blog/2015-09-14-graphql/)
