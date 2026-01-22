import { useParams, useNavigate } from "react-router-dom";

// mock data
import { booksMocks } from "../../../mocks/booksMockData";

// queries
import { useGetBooksQuery } from "../../../apolloClient/utils/hooks/book/useGetBooksQuery";
import { GET_BOOKS } from "../../../apolloClient/utils/queries";

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import DisplayCard from "../../../common/displayCard/DisplayCard";

const DisplayBookList = () => {
  // Toggle between API and Mock data
  const USE_API = false; // set to true to use API in dev mode

  // handle routing
  const { id } = useParams();
  const navigate = useNavigate();

// handle api data fetching
  const { error, loading, data } = useGetBooksQuery(GET_BOOKS, {
    variables: { id },
    skip: !USE_API, // skip query if not using API
  });

  // Handle data source (API or mocks)
  const books = USE_API ? data?.books ?? [] : booksMocks; // fall back to empty array if data is undefined

    // Optional loading and error states (only relevant when USE_API)
  if (USE_API && loading) return <Loading />;
  if (USE_API && error) return <ErrorHasOccurredComponent />;

  return (
    <div>
      <ul id="book-list">
        {books.map((book) => (
          <li
              key={book.id}
            id="book-details"
            onClick={() => {
              // Navigate to detail page
              navigate(`/books-and-authors/${book.id}`);
            }}
          >
 <DisplayCard>
              <h5> {book.name}{
                
               }</h5>
 </DisplayCard>
 
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default DisplayBookList;
