import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
    <Nav routes={routes} />
  </Router>
);

export default AppRouter;
