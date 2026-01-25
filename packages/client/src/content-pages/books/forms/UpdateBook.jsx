import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client/react";
import { FaUser } from "react-icons/fa";

// data fetching
import { GET_BOOK_ID } from "../../../apolloClient/utils/queries/index";
import { UPDATE_BOOK } from "../../../apolloClient/utils/mutations/book-mutations/updateBook";
import { useGetBookIdQuery } from "../../../apolloClient/utils/hooks/book/useGetBookIdQuery";

// components
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import Loading from "../../../common/loading/Loading";


const UpdateBook = ({ bookId }) => {
  const { error, loading, data } = useGetBookIdQuery(bookId);
  console.log(data, "Query Data: Update Book Form");

// async flow - initalise form state
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [formError, setFormError] = useState("");

  // hydrate form once data arrives
  useEffect(() => {
    if (data?.book) {
      setName(data.book.name);
      setGenre(data.book.genre);
    }
  }, [data]);


  const [updateBook] = useMutation(UPDATE_BOOK);

// guard against rendering before query completes
   if (loading) return <Loading />;
  if (error) return <ErrorHasOccurredComponent />;
  if (!data?.book) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log default book update:", name, genre);

    // basic validation
if (!name || !genre) {
  setFormError("Please fill in all fields");
  return;
}

setFormError(""); // clear error on success
    // send payload to backend Db
     updateBook({
      variables: {
        id: data.book.id,
        name,
        genre,
      },
      refetchQueries: [
        {
          query: GET_BOOK_ID,
          variables: { id: data.book.id },
        },
      ],
    });
  };
console.log("Log updated book data:", data.book.id, name, genre);

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input
          className='form-control'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input
          className='form-control'
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button
        type='submit'
        data-bs-dismiss='modal'
        className='btn btn-secondary'
          disabled={!name || !genre}
      >
        Submit<FaUser />
      </button>
    </form>
  );
};

export default UpdateBook;
