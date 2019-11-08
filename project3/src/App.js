import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import CharacterInfo from './components/game_components/CharacterInfo'
import DisplayTerm from "./components/game_components/DisplayTerm"
import './App.css';
import MiniMap from './components/game_components/MiniMap';

import PlayerCharacter from "./components/game_components/PlayerCharacter"

function App() {
  return (<div className="container-fluid">
    <NavBar />
    <div className="row align-items-end">
    <div className="col-md">

    <DisplayTerm />
    </div>

    <div className="col-md-auto">
    <MiniMap />
    <PlayerCharacter info="true" />
    </div>
    </div>
    </div>
  );
}

export default App;
