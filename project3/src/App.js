import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import CharacterTab from './components/pages/CharacterTab'
import MainGame from './components/pages/MainGame'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router><div>
      <NavBar />
      <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/play">
        <MainGame />
      </Route>

      <Route path="/char">
        <CharacterTab />
      </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
