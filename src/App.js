import React, { lazy, Suspense } from "react";
import Header from "./component/Header/Header";
import TobacoListContainer from "./component/TobacoList/TobacoListContainer";
import { Route, Switch } from "react-router-dom";
import BlenderContainer from './component/Blender/BlenderContainer';
import FindMixesBtn from "./component/FindMixes/FindMixes";
import { MainPageWrapper } from './App.styled';
import HamburgerMenu from "./common/HamburgerMenu/HumburgerMenu"
import BlenderMenu from "./common/BlenderMenu/BlenderMenu"
import ProducersContainer from './component/Side/ProducersContainer';
import MainPreloader from './common/MainPreloader/MainPreloader';
const MixesContainer = React.lazy(() => import("./component/Mixes/MixesContainer"));
const App = ({ state }) => {


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

        <Route path="/mixes">
          <Suspense fallback={<MainPreloader></MainPreloader>}>
            <MixesContainer></MixesContainer>
          </Suspense>

        </Route>
      </Switch>

      <BlenderContainer dispatch={state.dispatch} />
      <HamburgerMenu ></HamburgerMenu>
      <ProducersContainer />
      <FindMixesBtn></FindMixesBtn>
      <BlenderMenu ></BlenderMenu>
    </MainPageWrapper>


  );
};

export default App;
