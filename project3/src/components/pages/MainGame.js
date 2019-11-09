import React from 'react'
import NavBar from '../NavBar'
import DisplayTerm from '../game_components/DisplayTerm'
import MiniMap from '../game_components/MiniMap'
import PlayerCharacter from '../game_components/PlayerCharacter'


function MainGame(props){
    return(<div className="container-fluid">
    <div className="row align-items-end">
    <div className="col-md">

    <DisplayTerm />
    </div>

    <div className="col-md-auto">
    <MiniMap />
    <PlayerCharacter info="true" />
    </div>
    </div>
    </div>)
}

export default MainGame