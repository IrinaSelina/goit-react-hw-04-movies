import React from "react";
import { PureComponent } from "react";
import moviesApi from "../../api/moviesApi";
import ReviewsList from "../Reviews/ReviewsList";
// import Routs from "../../routes";

class Reviews extends PureComponent {
  state = {
    reviews: [],
    error: "",
  };
  componentDidMount() {
    const options = {
      path: "movie/",
      id: this.props.match.params.movieId,
      param: "/reviews?",
    };

    return moviesApi.fetchMoviesWithQuery(options).then((response) =>
      this.setState({
        reviews: response.data.results,
      })
    );
  }
  render() {
    const { reviews } = this.state;
    console.log(reviews);
    return <ReviewsList reviews={reviews} />;
  }
}
export default Reviews;
