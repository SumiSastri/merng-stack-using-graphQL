import { NavLink } from "react-router-dom";
import { FaList} from "react-icons/fa";
import "../.././App.css";

import DisplayBooks from "./display/DisplayBooks";
import BackToHome from "../../common/back-to-home";

const BooksIndex = () => {
  return (
    <div>
      <h2>Book Catalog</h2>
<BackToHome />
      <NavLink to='/add-book-form'>
       <button className='btn-secondary m-3'>     
          <FaList className='icon' />
      Add Book
        </button>
      </NavLink>
      <section>
      <DisplayBooks />
</section>
    </div>
  );
};

export default BooksIndex;
