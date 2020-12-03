import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter";
import { App } from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-bootstrap-typeahead/css/Typeahead.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
