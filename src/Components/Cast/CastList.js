import React from "react";
import PropTypes from "prop-types";
// import "./CastList.css";

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path != null
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : "#"
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};
export default CastList;
