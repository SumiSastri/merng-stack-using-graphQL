// wrapper component for page links
import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/books-and-authors">Books and Authors</Link>
        </li>
        <li>
          <Link to="/book-clients">Book Clients</Link>
        </li>
        <li>
          <Link to="/book-projects">Book Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageLinks;
