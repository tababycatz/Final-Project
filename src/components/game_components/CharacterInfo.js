import React from 'react'

function CharacterInfo(props){
    return(
        <div>
            <h3>{props.characterName}</h3>
            <ul>
                <li>
                    Age: {props.age}
                </li>
                <li>
                    Weight: {props.weight}
                </li>
                <li>
                    Skills: {props.skills}
                </li>
                <li>
                    Breed: {props.breed}
                </li>
                <li>
                    Room: {props.room}
                </li>
                <li>
                    Carrying: {props.inventory}
                </li>
            </ul>
        </div>
    )
}

export default CharacterInfo