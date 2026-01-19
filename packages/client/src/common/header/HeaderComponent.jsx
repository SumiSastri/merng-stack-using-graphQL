import React from "react";
import PropTypes from "prop-types";

const HeaderComponent = ({
  children,
  className,
  datatestid,
  id,
  image,
  name,
  isopen,
  onClick,
}) => {
  return (
    <div
      className={className}
      data-testid={datatestid}
      id={id}
      onClick={onClick}
    >
      {image && <img src={image} alt={name || "logo"} className={className} />}
      {children}
    </div>
  );
};

HeaderComponent.propTypes = {
  children: PropTypes.node, 
  className: PropTypes.string,
  datatestid: PropTypes.string,
  id: PropTypes.string,
  isopen: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default HeaderComponent;


