import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client/react';
import { Link } from "react-router-dom";

// data fetching
import { useGetBooksQuery } from "../../../apolloClient/utils/hooks/book/useGetBooksQuery";
import { CREATE_BOOK } from "../../../apolloClient/utils/mutations/book-mutations/createBook";
import { GET_AUTHORS } from "../../../apolloClient/utils/queries/index";

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  // load authors
  const { loading, error, data } = useQuery(GET_AUTHORS);
  console.log("Load Authors", { error, data, loading });
  // load authors and custom function for the select filter
  
  function displayAuthors(loading, data) {
    if (error) return `Error! ${error.message}`;
    if (loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }
// set up payload
  const [createBook] = useMutation(CREATE_BOOK, {
    variables: {
      name,
      genre,
      authorId,
    },
  });

  // refetch data - call it within the submit function if page routed to custom form page
  const {refetch } = useGetBooksQuery();

  // guard against rendering before query completes
   if (loading) return <Loading />;
  if (error) return <ErrorHasOccurredComponent />;
  if (!data?.book) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log submit new book:", name, genre, authorId);
    createBook({ variables: { name, genre, authorId } })
  .then((result) => {
    console.log(result, "BOOK PAYLOAD");
    refetch(); // ✅ only after mutation
  });
  
    const resetFormFields = () => {
      setName("");
      setGenre("");
      setAuthorId("");
    };
    resetFormFields();
  };
  refetch();
  
  return (
    <form id='add-book' onSubmit={handleSubmit}>
          <h4>Add a new book</h4>
          <Link to='/books-and-authors' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
  Book Catalog
      </Link>
      <hr/>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors(loading, data)}
        </select>     
      </div>
      <button type='submit' className='btn btn-primary'>Save</button>     
    </form>
  );
};

export default AddBook;
