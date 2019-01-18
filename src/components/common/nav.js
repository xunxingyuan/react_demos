import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { routes: [] };
  }
  componentDidMount() {
    this.setState({ routes: this.props.routes });
  }
  render() {
    return (
      <div className="mainPage">
        <nav className="navBox">
          <ul>
            {this.state.routes.map((route, index) => (
              <li>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {this.state.routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    );
  }
}

export default Nav;
