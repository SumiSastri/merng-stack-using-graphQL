import { NavLink } from "react-router-dom";

import { FaList, FaUser } from "react-icons/fa";
import "../.././App.css";
import DisplayBookList from "./display/DisplayBookList";
import BackToHome from "../../common/back-to-home";

const BooksIndex = () => {
  return (
    <div>
      <h2>Books and Authors Page</h2>
<BackToHome />
      <NavLink to='/add-book-form'>
       <button className='btn-secondary m-3'>     
          <FaList className='icon' />
          <FaUser className='icon' />
      Add A Book & Author
        </button>
      </NavLink>
      <DisplayBookList />
      <div className='container p-3'>
      </div>
    </div>
  );
};

export default BooksIndex;
