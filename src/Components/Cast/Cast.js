import React from "react";
import { PureComponent } from "react";
import CastList from "../Cast/CastList";
import moviesApi from "../../api/moviesApi";

class Cast extends PureComponent {
  state = {
    cast: [],
  };
  componentDidMount() {
    // const { location, history } = this.props;

    // history.push(location.state.from, { search: location.state.search });
    const options = {
      path: "movie/",
      id: this.props.match.params.movieId,
      param: "/credits?",
    };

    return moviesApi.fetchMoviesWithQuery(options).then((response) =>
      this.setState({
        cast: response.data.cast,
      })
    );
  }
  render() {
    return <CastList cast={this.state.cast} />;
  }
}
export default Cast;
