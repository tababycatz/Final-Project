import React from 'react'
import PlayerCharacter from '../game_components/PlayerCharacter'
import NavBar from '../navbar/NavBar'

class CharacterTab extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <PlayerCharacter info="true"/>
            </div>
        )
    }
}

export default CharacterTab