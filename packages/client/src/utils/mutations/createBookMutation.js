import {gql} from '@apollo/client';

const CREATE_BOOK_PROJECT = gql`
  mutation addBookProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $bookClientId: ID!
  ) {
    addBookProject(
      name: $name
      description: $description
      status: $status
      bookClientId: $bookClientId
    ) {
      bookClientId
      name
      description
      status
      bookClient {
        id
        name
        email
        phone
      }
    }
  }
`;

export {CREATE_BOOK_PROJECT}