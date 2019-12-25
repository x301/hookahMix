import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"
import { ReduxFirestoreProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import rrfConf from './config/rrfConf';
import firebase from "./config/fbConf"
import { GlobalStyle } from "./assets/styles/base"


const rrfProps = {
  firebase,
  config: rrfConf,
  dispatch: store.dispatch,
  createFirestoreInstance

}


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ReduxFirestoreProvider  {...rrfProps}>
        <React.Fragment>
          <GlobalStyle></GlobalStyle>
          <App state={store} />
        </React.Fragment>
      </ReduxFirestoreProvider>

    </Provider>
  </Router>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
