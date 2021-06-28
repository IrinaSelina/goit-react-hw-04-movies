import React, { Suspense, lazy } from "react";
import { NavLink, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Information.css";
const Cast = lazy(() => import("../Cast/Cast.js"));
const Reviews = lazy(() => import("../Reviews/Reviews.js"));
const Informational = ({ match }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="Informational">
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location?.state?.from },
            }}
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location?.state?.from },
            }}
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
