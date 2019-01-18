import React, { Component } from "react";

class UsersItem extends Component {
  constructor(props) {
    super(props);
    this.state = { Id: "loading" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Id: this.props.match.params.Id });
    }, 1000);
  }

  render() {
    return <h2>{this.state.Id}</h2>;
  }
}

export default UsersItem;
