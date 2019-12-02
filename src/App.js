import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/main";
import Login from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={MainPage} />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
