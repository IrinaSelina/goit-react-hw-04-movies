import React from "react";

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};
export default CastList;
