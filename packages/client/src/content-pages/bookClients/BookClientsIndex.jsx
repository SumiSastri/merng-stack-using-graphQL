import { NavLink } from "react-router-dom";

import "../.././App.css";
import DisplayBookClientsList from "./display/DisplayBookClientsList";
import AddBookClient from "./forms/AddBookClient";
import BackToHome from "../../common/back-to-home";

const BookClientsIndex = () => {
  return (
    <div>
      <h2>Book Client's Page</h2>
      <BackToHome />
      <div className='container'>
        <br />
        {/* FIXME - ADD RENDERS */}
        {/* <AddBookClient />
        <DisplayBookClientsList /> */}
      </div>
    </div>
  );
};

export default BookClientsIndex;
