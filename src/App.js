import React from "react";
import s from "./App.module.css";
import Header from "./component/Header/Header";
import Producers from "./component/Side/Producers";
import TobacoListContainer from "./component/TobacoList/TobacoListContainer";
import { Route, Switch } from "react-router-dom";
import BlenderContainer from './component/Blender/BlenderContainer';
import MixesContainer from "./component/Mixes/MixesContainer";
import FindMixesBtn from "./component/FindMixes/FindMixes";



const App = ({ state }) => {
  return (
    <div className={s.my_page}>
      <Header />
      <div className={s.wrapper}>
        <Producers />
        <Switch>
          <Route
            path="/tobacco/:id"
            render={(props) => (
              < TobacoListContainer dispatch={state.dispatch} />
            )}
          />
          <Route path="/mixes"><MixesContainer></MixesContainer></Route>

        </Switch>

        <BlenderContainer dispatch={state.dispatch} />
        <FindMixesBtn></FindMixesBtn>
      </div>
    </div>
  );
};

export default App;
