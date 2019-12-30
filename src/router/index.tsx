import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as React from "react";
import User from "../views/user/users/components/User";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/user" exact component={User} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;