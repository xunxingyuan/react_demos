import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <nav className="navBox">
        <ul>
          {this.state.routes.map((route, index) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
