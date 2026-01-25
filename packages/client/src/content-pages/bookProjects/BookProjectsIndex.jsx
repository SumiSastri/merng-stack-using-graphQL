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
          <p>
      Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique
      risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel
      pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed
      lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor
      interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi
      id consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
      {/* FIXME RENDERS ONLY ON DATA LOADED*/}
      <DisplayBookProjectsList />
    </div>
  );
};

export default BookProjectsIndex;
