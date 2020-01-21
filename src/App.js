import React, { lazy, Suspense } from "react";
import Header from "./component/Header/Header";
import TobacoListContainer from "./component/TobacoList/TobacoListContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import BlenderContainer from './component/Blender/BlenderContainer';
import FindMixesBtn from "./component/FindMixes/FindMixes";
import { MainPageWrapper } from './App.styled';
import HamburgerMenu from "./common/HamburgerMenu/HumburgerMenu"
import BlenderMenu from "./common/BlenderMenu/BlenderMenu"
import ProducersContainer from './component/Side/ProducersContainer';
import MixesContainer from './component/Mixes/MixesContainer';
import Footer from './component/Footer/Footer';



const App = ({ state }) => {

  return (
    <Switch>

      <MainPageWrapper>
        <Header />
        <Redirect from='/' to='/tobacco/Adalya' />
        <Route
          path="/tobacco/:id"
          render={(props) => (
            < TobacoListContainer dispatch={state.dispatch} />
          )}
        />
        <Route path="/mixes">

          <MixesContainer></MixesContainer>

        </Route>


        <BlenderContainer dispatch={state.dispatch} />
        <HamburgerMenu ></HamburgerMenu>
        <ProducersContainer />
        <FindMixesBtn></FindMixesBtn>
        <BlenderMenu ></BlenderMenu>
        <Footer></Footer>
      </MainPageWrapper >
    </Switch>



  );
};

export default App;
