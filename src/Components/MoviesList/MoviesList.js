import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./MoviesList.css";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="moviesList">
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
export default withRouter(MoviesList);
