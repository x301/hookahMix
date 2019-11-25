import React from "react";
import s from "./App.module.css";
import Header from "./component/Header/Header";
import Producers from "./component/Side/Producers";
import TobacoListContainer from "./component/TobacoList/TobacoListContainer";
import { Route, Switch } from "react-router-dom";
import BlenderContainer from './component/Blender/BlenderContainer';



const App = props => {
  return (
    <div className={s.my_page}>
      <Header />
      <div className={s.wrapper}>
        <Producers />
        <Switch>
          <Route
            path="/:id"
            render={props => (
              <TobacoListContainer state={props.state} />
            )}
          />
        </Switch>

        <BlenderContainer state={props.state} />
      </div>
    </div>
  );
};

export default App;
