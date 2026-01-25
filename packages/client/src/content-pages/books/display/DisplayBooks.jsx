import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

// mock data
import { booksMocks } from "../../../mocks/booksMockData";

// queries
import { useGetBooksQuery } from "../../../apolloClient/utils/hooks/book/useGetBooksQuery";
import { GET_BOOKS } from "../../../apolloClient/utils/queries";

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import BookListView from "./BookListView";
import SearchInput from "../../../common/searchBar";
import { FaSearch } from "react-icons/fa";

const DisplayBooks = () => {
  // handle routing
  const { id } = useParams();
  const navigate = useNavigate();

  // Toggle between API and Mock data
  const USE_API = false; // set to true to use API in dev mode
  const { error, loading, data } = useGetBooksQuery(GET_BOOKS, {
    variables: { id },
    skip: !USE_API, // skip query if not using API
  });

  const books = USE_API ? data?.books ?? [] : booksMocks; // fall back to empty array if data is undefined
  if (USE_API && loading) return <Loading />;
  if (USE_API && error) return <ErrorHasOccurredComponent />;

  // search state filter terms to search and memoize filtered books
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return books.filter((book) =>
      book.name.toLowerCase().includes(search) ||
      book.author.name.toLowerCase().includes(search)
    );
  }, [books, searchTerm]);


  return (
    <section>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        className="search-input"
        placeholder="Search books or authors"
        prefixIcon={<FaSearch />}
      />

      {filteredBooks.map((book) => (
        <section id="book-details" key={book.id}>
          <BookListView book={book} />
        </section>
      ))}
    </section>
  );
};

export default DisplayBooks;
