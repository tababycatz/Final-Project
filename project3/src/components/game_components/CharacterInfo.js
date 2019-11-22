import React from 'react'

function CharacterInfo(props){
    return(
        <div>
            {/* <img src="src/logo192.png" style={{height: "250px", width: "250px"}}></img> */}
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
                    Carrying: {props.inventory}
                </li>
            </ul>
        </div>
    )
}

export default CharacterInfo