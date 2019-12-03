import React from 'react';

function MiniMap(props){
    return(<div>
        <div className="row">
            <button><div style={{height:"25px",width:"25px"}}></div></button>

            <button onClick={(e) => props.move("north",e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
            

            <button>
            <div style={{height:"25px",width:"25px"}}></div></button>
            
        </div>

        <div className="row">
            <button onClick={(e) => props.move("west",e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
           <button><div style={{backgroundColor:"black", height:"25px", width:"25px"}}></div></button>

            <button onClick={(e) => props.move("east",e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>
        </div>
        <div className="row">
            <button>
            <div style={{height:"25px",width:"25px"}}></div></button>

            <button onClick={(e) => props.move("south",e)}><div style={{backgroundColor:"black", height:"25px", width:"25px"}}>
            </div></button>

            <button>
            <div style={{height:"25px",width:"25px"}}></div></button>
        </div>
    
    </div>)
}
export default MiniMap