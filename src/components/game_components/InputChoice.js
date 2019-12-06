import React from 'react'


function InputChoice(props){
    return(
        <div>
            <p>{props.question}</p>
            <button className="btn btn-warning">NO</button>
            <button className="btn btn-success">YES</button>
        </div>
    )
}

export default InputChoice