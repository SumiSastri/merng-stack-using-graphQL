import {NavLink } from "react-router-dom";
// refactor using NavLink for routing links
import "./pageLinkStyles.css";

const PageLinks = () => {
  return (
    <nav className="page-links">
      <ul className="page-links-list">
        <li>
          <NavLink to="/books-and-authors">Books and Authors</NavLink>
        </li>
        <li>
          <NavLink to="/book-clients">Book Clients</NavLink>
        </li>
        <li>
          <NavLink to="/book-projects">Book Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageLinks;
