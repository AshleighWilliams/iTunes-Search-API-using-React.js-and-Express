import React from 'react';
//import external stylesheet app.css.
import './App.css';
//import header.js from components.
import Header from "./components/header.js";
//import search.js from components.
import Search from "./components/search.js";
//import favourites.js from components.
import Favourites from "./components/favourites.js";
//import landingpage.js from components.
import LandingPage from "./components/landingpage.js";
//import route, switch and browser router from react-router-dom.
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//return and display all components.
function App() {
return (
    <div>
      <BrowserRouter>
      < Header />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/search" component={Search} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

//export code to make it available outside this module.
export default App;