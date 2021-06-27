import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Form = ({ onSetQuery, searchQuery, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="searchQuery"
        value={searchQuery}
        onChange={onSetQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onInput={onSetQuery}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
export default Form;
