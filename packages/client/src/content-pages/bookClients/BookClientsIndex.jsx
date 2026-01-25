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
            <p>
      Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique
      risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel
      pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed
      lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
      interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi
      id consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
        {/* FIXME - ADD RENDERS */}
        {/* <AddBookClient />
        <DisplayBookClientsList /> */}
      </div>
    </div>
  );
};

export default BookClientsIndex;
