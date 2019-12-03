import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main";
import Login from "./pages/login";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
