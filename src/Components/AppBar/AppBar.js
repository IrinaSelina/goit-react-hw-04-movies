import React from "react";
import { Route, NavLink } from "react-router-dom";
import Routs from "../../routes";
const AppBar = () => (
  <nav>
    <NavLink
      exact
      to={Routs.home}
      className="NavLink"
      activeClassName="NavLink-active"
    >
      Home
    </NavLink>
    <NavLink
      to={Routs.movies}
      className="NavLink"
      activeClassName="NavLink-active"
    >
      Movies
    </NavLink>
  </nav>
);
export default AppBar;
