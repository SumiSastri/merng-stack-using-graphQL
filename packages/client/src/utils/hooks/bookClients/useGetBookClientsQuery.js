import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client/core';
// matches server schema name
const GET_BOOK_CLIENTS = gql`
  query {
    bookClients {
      name
      email
      phone
      id
    }
  }
`;

export const useGetBookClientsQuery = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOK_CLIENTS);
  return {
    error,
    data,
    loading,
    refetch,
  };
};
