import React from "react";
import { Switch, Route } from "react-router-dom";
import Pop from "../Popularity/";
import Home from "../Home/";
import Rate from "../Rating/";
import Auth from "../Static/Authorization/";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/popular" component={Pop} />
      <Route exact path="/rating" component={Rate} />
      <Route exact path="/auth/:type" component={Auth} />
    </Switch>
  );
}
