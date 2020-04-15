
import React from "react";
import { Switch, Route } from "react-router-dom";
import App from 'containers/App'

export default function RouteWithSubRoutes({ pages }) {
  const Template = App(pages);
  return (
    <Template>
      <Switch>
        {pages.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Template>
  );
}