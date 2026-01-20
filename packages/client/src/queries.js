// parses graph query language - GQL
import { gql } from '@apollo/client/core';

const GET_AUTHORS = gql`
    {
        authors {
            name
            id
        }
    }
`;

// function to get the data
const GET_BOOKS = gql`
    {
        books {
            name
            id
        }
    }
`;

export { GET_AUTHORS, GET_BOOKS }