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
      <Routes>
        {/* Home page with links */}
        <Route path="/" element={<PageLinks />} />

        {/* Books */}
        <Route path="/books-and-authors" element={<BooksIndex />} />
        <Route path="/books-and-authors/:id" element={<DisplayBook />} />


        {/* forms */}
        <Route path="/add-book-form" element={<AddBook />} />
        <Route path="/update-book-form/:id" element={<UpdateBook />} />

        {/* Book Clients */}
        <Route path="/book-clients" element={<BookClientsIndex />} />

        {/* Book Projects */}
        <Route path="/book-projects" element={<BookProjectsIndex />} />
        <Route path="/book-projects/:id" element={<DisplayBookProject />} />
      </Routes>
  );
};

export default PageRouting;
