import PropTypes from "prop-types";
import "./cardStyles.css"; 

const DisplayCard = ({ children, className = "" }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card-body">
          <div className="card-content">
            {children}
             {/* Eg of children and routing embedded {apiData} goes here
            <Link
              className='btn btn-light'
              to={`/${apiData.id}`}
            >
              View
            </Link>
          // ApiData props data goes here
          <p className='small'>
            Status: <strong>{apiData.name}</strong>
          </p>
           */}
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisplayCard;
