import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

import "./Form.css";

const Form = ({ onSetQuery, searchQuery, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form-group">
      <input
        className="form-input"
        name="searchQuery"
        value={searchQuery}
        onChange={onSetQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onInput={onSetQuery}
      />
      <Button type="submit" className="form-button">
        Search
      </Button>
    </form>
  );
};
Form.propTypes = {
  onSetQuery: PropTypes.func,
  onSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
};
export default Form;
