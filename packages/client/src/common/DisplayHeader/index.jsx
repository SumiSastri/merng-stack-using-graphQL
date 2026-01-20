import PropTypes from "prop-types";
import "./headerStyles.css";

const DisplayHeader = ({
  className,
  // Explicity declare children prop
  children,
}) => {
  return (
    // use semantic html5 header tag
    <header
      className={className}
      
    >
          {children}
    </header> );
};

DisplayHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DisplayHeader;
