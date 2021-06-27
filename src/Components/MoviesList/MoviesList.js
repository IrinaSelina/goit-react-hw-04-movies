import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
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
