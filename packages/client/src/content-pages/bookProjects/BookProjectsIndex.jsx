import { NavLink } from "react-router-dom";

import "../.././App.css";
import DisplayBookProjectsList from "./display/DisplayBookProjectsList";
import AddBookProjectForm from "./forms/AddBookProjectForm";

const BookProjectsIndex = () => {
  return (
    <div>
      <h2>Book Project's Page</h2>
      <NavLink to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
        Back to Home Page
      </NavLink>
      <div className='container p-3'>
        <AddBookProjectForm />
      </div>
      <DisplayBookProjectsList />
    </div>
  );
};

export default BookProjectsIndex;
