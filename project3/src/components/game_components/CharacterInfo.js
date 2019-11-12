import React from 'react'

function CharacterInfo(props){
    return(
        <div>
            <img src="src/logo192.png" style={{height: "250px", width: "250px"}}></img>
            <h3>{props.characterName}</h3>
            <ul>
                <li>
                    Age: {props.age}
                </li>
                <li>
                    Appearance: {props.appearance}
                </li>
                <li>
                    Skills: {props.skills}
                </li>
            </ul>
        </div>
    )
}

export default CharacterInfo