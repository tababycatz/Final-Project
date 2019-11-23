import React from 'react';

function MiniMap(props){
    return(<div>
        <div className="row">
            <button onClick={(e) => props.move(1,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
            <button onClick={(e) => props.move(2,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
            <button onClick={(e) => props.move(3,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
        </div>

        <div className="row">
            <button onClick={(e) => props.move(4,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
           <button onClick={(e) => props.move(5,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}></div></button>

            <button onClick={(e) => props.move(6,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
        </div>
        <div className="row">
            <button onClick={(e) => props.move(7,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
            <button onClick={(e) => props.move(8,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
            <button onClick={(e) => props.move(9,e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
        </div>
    
    </div>)
}
export default MiniMap