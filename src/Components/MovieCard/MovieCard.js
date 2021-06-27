import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({
  original_title,
  backdrop_path,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div>
      <img src={backdrop_path} alt={original_title} />
      <div>
        <h1>
          {original_title} <span>({release_date})</span>
        </h1>
        <p>User score: {vote_average}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  original_title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
export default MovieCard;
