import React, { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

// import HomePage from "./page/HomePage";
// import MoviesPage from "./page/MoviesPage";
// import MovieDetailsPage from "./page/MovieDetailsPage";
import AppBar from "./Components/AppBar/AppBar";
import Routs from "../src/routes";

import "./App.css";
const HomePage = lazy(() => import("./page/HomePage.js"));
const MoviesPage = lazy(() => import("./page/MoviesPage.js"));
const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage.js"));
const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Идет загрузка...</h1>}>
      <Switch>
        <Route exact path={Routs.home} component={HomePage} />
        <Route exact path={Routs.movies} component={MoviesPage} />
        <Route path={Routs.movie} component={MovieDetailsPage} />

        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
