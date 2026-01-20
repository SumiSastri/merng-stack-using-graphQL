import { NavLink } from "react-router-dom";

import { FaList, FaUser } from "react-icons/fa";
import "../.././App.css";
import DisplayBookList from "./display/DisplayBookList";

const BooksIndex = () => {
  return (
    <div>
      <h2>Books and Authors Page</h2>
      <NavLink to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </NavLink>
      <NavLink to='/add-book-form'>
       <button className='btn-secondary m-3'>     
          <FaList className='icon' />
          <FaUser className='icon' />
      Add A Book & Author
        </button>
      </NavLink>
      <DisplayBookList />
      <NavLink to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </NavLink>
      <div className='container p-3'>
      </div>
    </div>
  );
};

export default BooksIndex;
