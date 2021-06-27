import React, { Suspense, lazy } from "react";
import { NavLink, Route } from "react-router-dom";
import PropTypes from "prop-types";
const Cast = lazy(() => import("../Cast/Cast.js"));
const Reviews = lazy(() => import("../Reviews/Reviews.js"));
const Informational = ({ match }) => {
  return (
    <div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink
            to={`${match.url}/cast`}
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Идет загрузка...</h1>}>
        <Route path={`${match.path}/cast`} component={Cast}></Route>
        <Route path={`${match.path}/reviews`} component={Reviews}></Route>
      </Suspense>
    </div>
  );
};
Informational.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Informational;
