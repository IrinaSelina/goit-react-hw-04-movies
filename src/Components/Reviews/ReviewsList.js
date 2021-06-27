import React from "react";
import PropTypes from "prop-types";
const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
export default ReviewsList;
