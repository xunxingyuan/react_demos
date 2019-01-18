import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../components/index";
import Users from "../components/users";
import About from "../components/about";
import Nav from "../components/common/nav";

const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    main: Index
  },
  {
    name: "about",
    path: "/about",
    main: About
  },
  {
    name: "users",
    path: "/users",
    main: Users
  }
];

const AppRouter = () => (
  <Router>
    <div className="mainPage">
      <Nav routes={routes} />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </Router>
);

export default AppRouter;
