import React from "react";
import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const KEY = "80863ea9669b5cd16d82c240f389e037";

const fetchMoviesWithQuery = ({
  path,
  param = "",
  id = "",
  query = "",
  currentPage = 1,
}) => {
  return axios.get(
    `${URL}${path}${id}${param}&page=${currentPage}&api_key=${KEY}${query}`
  );
};
const moviesApi = {
  fetchMoviesWithQuery,
};
export default { fetchMoviesWithQuery };
