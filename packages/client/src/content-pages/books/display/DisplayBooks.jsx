import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

// mock data
import { booksMocks } from "../../../mocks/booksMockData";

// api data
import { useGetBooksQuery } from "../../../apolloClient/utils/hooks/book/useGetBooksQuery";
import { GET_BOOKS } from "../../../apolloClient/utils/queries";

// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import BookListView from "./BookListView";
import SearchInput from "../../../common/searchBar";
import { FaSearch } from "react-icons/fa";

const DisplayBooks = ({USE_API=false, bookMocks }) => {
  // handle routing
  const { id } = useParams();
  const navigate = useNavigate();

  const { error, loading, data } = useGetBooksQuery(GET_BOOKS, {
    variables: { id },
    skip: !USE_API, // skip query if not using API
  });

  // resolve data source
  const books = USE_API ? data?.books ?? [] : booksMocks;
  
  // guard against rendering before query completes
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

  // conditionally render only when not using API or when using API and data is loaded
    if(!USE_API || (USE_API && !loading && !error))
    {
  return (
    <section>
          <p>
      Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique
      risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel
      pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed
      lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
      interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi
      id consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
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
}  return (
null
);  
};

export default DisplayBooks;
