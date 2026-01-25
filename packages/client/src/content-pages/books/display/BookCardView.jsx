import { FaTrash , FaUser} from "react-icons/fa";
import { useMutation } from "@apollo/client/react";

// queries
import { GET_BOOK_ID, GET_BOOKS } from "../../../apolloClient/utils/queries/index"
import { useGetBookIdQuery } from "../../../apolloClient/utils/hooks/book/useGetBookIdQuery";
import { DELETE_BOOK } from "../../../apolloClient/utils/mutations/book-mutations/deleteBook";

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";

const BookCardView = ({ bookId}) => {
  // API data fetch - data shape data.book.name (mocks book.name)
  const { error, loading, data,  } = useGetBookIdQuery(bookId);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: bookId },
    refetchQueries: [{ 
      query: GET_BOOK_ID,
      variables: {
        id: bookId,
      },
    }, { query: GET_BOOKS }],
  });
  
// guard against rendering before query completes
   if (loading) return <Loading />;
  if (error) return <ErrorHasOccurredComponent />;
  if (!data?.book) return null;

  return (
    <section>
      <h2>{data.book.name}</h2>
      <h3>Author: {data.book.author.name}</h3>
      <h4>Genre: {data.book.genre} </h4>
      <h5> More books by {data.book.author.name} in this catalog</h5>
      {data.book.author.books.map((item) => {
        return (
          <div className='other-books' key={item.id}>
            <div id='book-details'>
              <p>{item.name}</p> 
              <container>
              <button className='btn btn-primary' onClick={() => navigate(`/update-book-form//${book.id}`)} >
                Update <FaUser />
              </button>
                      <button className='btnbtn-danger' onClick={deleteBook}>
                Delete <FaTrash />
              </button>
              </container>
            </div>
          </div>
          
        );
      })}
    </section>
  );
};

export default BookCardView;
