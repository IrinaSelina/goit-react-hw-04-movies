import React from "react";
import { PureComponent } from "react";
import queryString from "query-string";
import moviesApi from "../api/moviesApi";
import MoviesList from "../Components/MoviesList/MoviesList";
import Form from "../Components/Form/Form";

class MoviesPage extends PureComponent {
  state = {
    searchQuery: "",
    movies: [],
    error: null,
  };
  componentDidMount() {
    const { history, location } = this.props;
    const { search } = this.props.location;
    const query = search.slice(1);
    if (query.length === 0) {
      return;
    }

    const options = {
      path: "search/movie",
      param: "?",
      query: `&query=${query}`,
    };

    moviesApi.fetchMoviesWithQuery(options).then((response) =>
      this.setState({
        movies: response.data.results,
      })
    );
  }

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `${this.state.searchQuery}`,
    });
  };
  onSetQuery = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const options = {
      path: "search/movie",
      param: "?",
      query: `&query=${searchQuery}`,
    };

    moviesApi.fetchMoviesWithQuery(options).then((response) =>
      this.setState({
        movies: response.data.results,
      })
    );
    this.onQueryChange();
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Form onSetQuery={this.onSetQuery} onSubmit={this.onSubmit} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
