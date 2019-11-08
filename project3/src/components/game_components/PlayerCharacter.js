import React from 'react'
import CharacterInfo from './CharacterInfo'

class PlayerCharacter extends React.Component{
    constructor(props){
        super(props)
    }

    getPlayerObject(){
        //get the player's name from SQL
    }

    getPCharacterName(){
        
        return "Frankie"
    }


    getPCharacterAge(){
        return "8"
    }
    
    getPCharacterDesc(){
        return "a small dog"
    }

    getPCharacterSkills(){
        return "nunchucks"
    }

    render(){
        if(this.props.info){
            return(
            <CharacterInfo characterName={this.getPCharacterName()} age={this.getPCharacterAge()} appearance={this.getPCharacterDesc()} skills={this.getPCharacterSkills()} />
            )
        }
    }
    
}

export default PlayerCharacter