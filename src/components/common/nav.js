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
        <div className="navLogo">reactDemo</div>
        {this.state.routes.map((route, index) => (
          <div className="menuItem" key={index}>
            <Link to={route.path}>{route.name}</Link>
          </div>
        ))}
      </nav>
    );
  }
}

export default Nav;
