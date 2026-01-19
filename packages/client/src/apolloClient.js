// Apollo client and error logging
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// apollo client  and error initialisation
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.error(`GraphQL error: ${message}`);
    });
  }
  if (networkError) {
    console.error(`Network error: ${networkError}`);
  }
});



const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          books: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          authors: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          bookClients: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          bookProjects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          
        },
      },
    },
  })
});

export default client;