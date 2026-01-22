import { NavLink } from "react-router-dom";

import "../.././App.css";
import DisplayBookProjectsList from "./display/DisplayBookProjectsList";
import AddBookProjectForm from "./forms/AddBookProjectForm";
import BackToHome from "../../common/back-to-home";

const BookProjectsIndex = () => {
  return (
    <div>
      <h2>Book Project's Page</h2>
      <BackToHome />
      <div className='container p-3'>
        <AddBookProjectForm />
      </div>
      {/* FIXME RENDERS ONLY ON DATA LOADED*/}
      <DisplayBookProjectsList />
    </div>
  );
};

export default BookProjectsIndex;
