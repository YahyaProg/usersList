import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store/store";
import App from "./containers/App";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
import "./assets/css/index.css"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
