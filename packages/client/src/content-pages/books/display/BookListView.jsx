import { useParams, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import DisplayCard from "../../../common/displayCard/DisplayCard";

const BookListView = ({
  book,
}) => {
  
// handle routing
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <DisplayCard>
      <div className="card-content-left"
       onClick={() => navigate(`/books/${book.id}`)} >
        <h5>{book.name}</h5>
        <p>Author: <strong>{book.author.name}</strong></p>

      </div>
    </DisplayCard>
  );
};

export default BookListView;
