import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLinks from "./PageLinks";

import BookClientsIndex from "../content-pages/bookClients/BookClientsIndex";
import BookProjectsIndex from "../content-pages/bookProjects/BookProjectsIndex";
import BooksIndex from "../content-pages/books/BooksIndex";
import DisplayBookProject from "../content-pages/bookProjects/display/DisplayBookProject";
import AddBook from "../content-pages/books/forms/AddBook";
import BookCardView from "../content-pages/books/display/BookCardView";
import UpdateBook from "../content-pages/books/forms/UpdateBook";
import AboutPage from "../content-pages/AboutPage";

const PageRouting = () => {
  return (
      <Routes>
        {/* Home page with links */}
            <Route path="/about" element={<AboutPage/>} />
        <Route path="/" element={<PageLinks />} />

        {/* Books */}
        <Route path="/books" element={<BooksIndex />} />
        <Route path="/books/:id" element={<BookCardView />} />

        {/* forms stateful */}
        <Route path="/add-book-form" element={<AddBook />} />
        <Route path="/update-book-form/:id" element={<UpdateBook />} />

        {/* Book Clients */}
        <Route path="/clients" element={<BookClientsIndex />} />

        {/* Book Projects */}
        <Route path="/workflows" element={<BookProjectsIndex />} />
        <Route path="/workflows/:id" element={<DisplayBookProject />} />
      </Routes>
  );
};

export default PageRouting;
