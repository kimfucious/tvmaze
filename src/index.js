import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/custom.scss";
import "animate.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
