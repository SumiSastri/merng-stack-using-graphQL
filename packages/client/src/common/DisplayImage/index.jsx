import PropTypes from "prop-types";
import "./imageStyles.css";

const DisplayImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

DisplayImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DisplayImage;
