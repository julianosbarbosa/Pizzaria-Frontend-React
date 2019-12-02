import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// import { Container } from './styles';
const routes = [
  { path: "/rota1", content: "Rota 1" },
  { path: "/rota2", content: "Rota 2" }
];

export default function Main() {
  return (
    <Fragment>
      <h1>Main</h1>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={() => <h2>{route.content}</h2>}
          />
        ))}
      </Switch>
    </Fragment>
  );
}
