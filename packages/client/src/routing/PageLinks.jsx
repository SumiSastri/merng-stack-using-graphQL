import {NavLink } from "react-router-dom";
// refactor using NavLink for routing links
import "./pageLinkStyles.css";

const PageLinks = () => {
  return (
    <nav className="page-links">
      <ul className="page-links-list">
              <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/books">Book Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/clients">Client List</NavLink>
        </li>
        <li>
          <NavLink to="/workflows">Workflows</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageLinks;
