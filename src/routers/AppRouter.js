import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App } from "../App";
export const customHistory = createBrowserHistory();
export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <App exact path="/" />
        </Route>
      </Switch>
    </Router>
  );
};
