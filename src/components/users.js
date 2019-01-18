import React from "react";
import { Route } from "react-router-dom";
import UsersItem from "./userItem";

const Users = ({ match }) => (
  <div className="userClass">
    <h2>Users,{match.url}</h2>
    <Route path={`${match.url}/:Id`} component={UsersItem} />
  </div>
);

export default Users;
