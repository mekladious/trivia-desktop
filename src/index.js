import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import "bootstrap/dist/css/bootstrap.css";

WebFont.load({
  google: {
    families: [
      "Roboto Mono:300,400,500,700",
      "Saira Semi Condensed:300,400,500,700"
    ]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
