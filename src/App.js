import React, { useState } from "react";
import Header from "./component/Header/Header";
import Producers from "./component/Side/Producers";
import TobacoListContainer from "./component/TobacoList/TobacoListContainer";
import { Route, Switch } from "react-router-dom";
import BlenderContainer from './component/Blender/BlenderContainer';
import MixesContainer from "./component/Mixes/MixesContainer";
import FindMixesBtn from "./component/FindMixes/FindMixes";
import { MainPageWrapper } from './App.styled';
import HamburgerMenu from "./common/HamburgerMenu/HumburgerMenu"



const App = ({ state }) => {
  const [activeSide, setActiveSide] = useState(false)
  return (
    <MainPageWrapper>
      <Header />
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
      <HamburgerMenu activeSide={activeSide} setActiveSide={setActiveSide} ></HamburgerMenu>
      <Producers activeSide={activeSide} setActiveSide={setActiveSide} />
      <FindMixesBtn></FindMixesBtn>
    </MainPageWrapper>


  );
};

export default App;
