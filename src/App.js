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
import BlenderMenu from "./common/BlenderMenu/BlenderMenu"
import { useSelector } from 'react-redux';

const App = ({ state }) => {
  const [activeSide, setActiveSide] = useState(false)
  const [activeBlender, setActiveBlender] = useState(false)
  const getBlenderCount = useSelector(state => state.tobacoListPage.blenderCount)
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

      <BlenderContainer dispatch={state.dispatch} activeBlender={activeBlender} getBlenderCount={getBlenderCount} />
      <HamburgerMenu activeSide={activeSide} setActiveSide={setActiveSide} ></HamburgerMenu>
      <Producers activeSide={activeSide} setActiveSide={setActiveSide} />
      <FindMixesBtn></FindMixesBtn>
      <BlenderMenu activeBlender={activeBlender} setActiveBlender={setActiveBlender} BlenderCount={getBlenderCount}></BlenderMenu>
    </MainPageWrapper>


  );
};

export default App;
