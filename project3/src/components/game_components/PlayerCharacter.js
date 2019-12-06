import React from 'react'
import CharacterInfo from './CharacterInfo'
import API from '../utils/API'

function PlayerCharacter(props){
    
    // getPlayerObject(){
    //     //get the player's name from SQL
    //     API.getOneChar(0).then(function (err,res) {
    //         if(err){
    //             return err;
    //         } else {
    //             return res;
    //         }
    //     })
    // }

    console.log(props)
        if(props.info){
            let newBtn;
            if(props.item){
                newBtn = <button onClick={props.dropFunct}className="btn btn-primary">{props.item.object_name}</button>
            }
            return(
            <CharacterInfo characterName={props.playerChar.char_name} age={props.playerChar.age} weight={props.playerChar.weight} skills={props.playerChar.skills} inventory={newBtn}/>
            )
        }
    
}

export default PlayerCharacter