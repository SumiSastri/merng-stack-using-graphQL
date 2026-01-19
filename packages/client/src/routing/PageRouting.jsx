import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLinks from "./PageLinks";

import BookClientsIndex from "../content-pages/bookClients/BookClientsIndex";
import BookProjectsIndex from "../content-pages/bookProjects/BookProjectsIndex";
import BooksIndex from "../content-pages/books/BooksIndex";
import DisplayBookProject from "../content-pages/bookProjects/display/DisplayBookProject";
import AddBook from "../content-pages/books/forms/AddBook";
import DisplayBook from "../content-pages/books/display/DisplayBook";
import UpdateBook from "../content-pages/books/forms/UpdateBook";

const PageRouting = () => {
  return (
    <Router>
      <Routes>
        {/* home */}
        <Route path="/" element={<PageLinks />} />

        {/* books */}
        <Route path="/books-and-authors" element={<BooksIndex />} />
        <Route path="/add-book-form" element={<AddBook />} />

        {/* book clients */}
        <Route path="/book-clients" element={<BookClientsIndex />} />

        {/* book projects */}
        <Route path="/book-projects" element={<BookProjectsIndex />} />

        {/* Routes with IDs */}
        <Route path="/books-and-authors/:id" element={<DisplayBook />} />
        <Route path="/update-book-form/:id" element={<UpdateBook />} />
        <Route path="/book-projects/:id" element={<DisplayBookProject />} />
      </Routes>
    </Router>
  );
};

export default PageRouting;
