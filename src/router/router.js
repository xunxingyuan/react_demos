import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersItem from "../components/userItem";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = ({ match }) => (
  <div>
    <h2>Users</h2>
    <Route path={`${match.url}/:Id`} component={UsersItem} />
  </div>
);
// const UsersDetail = ({ match }) => <h2>{match.params.Id}</h2>;

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
    <div>
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

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
