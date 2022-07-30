import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
// queries
import { GET_BOOK_ID, GET_BOOKS } from "../../../utils/queries/queries";
import { useGetBookIdQuery } from "../../../utils/hooks/book/useGetBookIdQuery";
// mutations
import { DELETE_BOOK } from "../../../utils/mutations/book-mutations/deleteBook";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import UpdateBook from "../forms/UpdateBook";

const DisplayBook = ({ bookId, }) => {
  const { error, loading, data } = useGetBookIdQuery(bookId);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: bookId },
    refetchQueries: [{ 
      query: GET_BOOK_ID,
      variables: {
        id: bookId,
      },
    }, { query: GET_BOOKS }],
  });
  
  if (error)
    return (
      <div>
        <ErrorHasOccurredComponent />
      </div>
    );
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      <h2>{data.book.name}</h2>
      <h5>Genre</h5>
      <p>{data.book.genre}</p>
      <UpdateBook bookId={data.book.id} />   
      <h5>Author</h5>
      <p>{data.book.author.name}</p>
      <h6>More by the same author</h6>
      {data.book.author.books.map((item) => {
        return (
          <div className='other-books' key={item.id}>
            <ul id='book-details'>
              <li>{item.name}</li> 
              <button className='btn-danger' onClick={deleteBook}>
                Delete <FaTrash />
              </button>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBook;
