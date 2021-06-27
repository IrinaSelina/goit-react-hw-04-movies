import React from "react";
import PropTypes from "prop-types";
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="form-button">
      {" "}
      {children}{" "}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
