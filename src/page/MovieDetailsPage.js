import React from "react";
import { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import moviesApi from "../api/moviesApi";
import MovieCard from "../Components/MovieCard/MovieCard";
import Button from "../Components/Button/Button";
import Informational from "../Components/Information/Information";
import Routs from "../routes";

class MovieDetailsPage extends PureComponent {
  state = {
    movie: {},
    original_title: "",
    overview: "",
    genres: [],
  };
  componentDidMount() {
    const options = {
      path: "movie/",
      param: "?",
      id: this.props.match.params.movieId,
    };
    // console.log(moviesApi.fetchMoviesWithQuery(options));
    return moviesApi.fetchMoviesWithQuery(options).then((response) =>
      // console.log(response.data)
      this.setState({
        movie: response.data,
        original_title: response.data.original_title,
        overview: response.data.overview,
        genres: response.data.genres,
        backdrop_path: `https://image.tmdb.org/t/p/w500/${response.data.backdrop_path}`,
        vote_average: response.data.vote_average,
        release_date: response.data.release_date,
      })
    );
  }
  handleOnClick = () => {
    // window.history.back();
    const { location, history } = this.props;
    console.log(location.state.from);
    history.push(location.state.from, { search: location.state.search });
  };
  render() {
    const {
      original_title,
      backdrop_path,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;
    return (
      <>
        {/* <button type="button" onClick={this.handleOnClick}>
          <a href="#">Go back</a>
        </button> */}
        <Button type="button" onClick={this.handleOnClick}>
          Go back
        </Button>
        <MovieCard
          original_title={original_title}
          backdrop_path={backdrop_path}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <Informational match={this.props.match} />
      </>
    );
  }
}
export default MovieDetailsPage;
//
