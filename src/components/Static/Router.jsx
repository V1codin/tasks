import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/";
import Home from "../Home/";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/popular" component={Main} />
    </Switch>
  );
}
