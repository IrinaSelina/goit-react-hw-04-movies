import React from "react";
import { PureComponent } from "react";
import moviesApi from "../api/moviesApi";
import MoviesList from "../Components/MoviesList/MoviesList";
class HomePage extends PureComponent {
  state = {
    movies: [],
  };
  componentDidMount() {
    const options = {
      path: "trending/movie/day",
      param: "?",
      id: "",
    };
    console.log(moviesApi.fetchMoviesWithQuery(options));
    return moviesApi.fetchMoviesWithQuery(options).then((response) =>
      this.setState({
        movies: response.data.results,
      })
    );
  }

  render() {
    const { movies } = this.state;
    console.log(this.props.match.url);

    return (
      <div>
        <h2>Trending today</h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
