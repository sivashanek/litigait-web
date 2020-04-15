
import React from "react";
import { Switch, Route } from "react-router-dom";

export default function RouteWithSubRoutes({ pages }) {
 
  return (
      <Switch>
        {pages.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
  );
}