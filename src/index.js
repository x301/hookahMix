import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store, {subscribe} from "./redux/redux-store";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux"


  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App state={store}  />
      </Provider>
    </Router>,
    document.getElementById("root")
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
