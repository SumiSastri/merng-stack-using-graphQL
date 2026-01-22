import DisplayCard from "../../../common/displayCard/DisplayCard";
import { booksMocks } from "../../../mocks/booksMockData";

const DisplayBookCard = ({ book = booksMocks[0] }) => {
  return (
    <DisplayCard>
      <div className="card-content-left">
        <h5>{book.name}</h5>
        <p className>
          Genre: <strong>{book.genre}</strong>
        </p>
        <p>
          Author: <strong>{book.author.name}</strong>
        </p>
      </div>
    </DisplayCard>
  );
};

export default DisplayBookCard;
