import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

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

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

export default AppRouter;
