import React from 'react';

let mapData = [];

function MiniMap(props){
    mapData = [];
    let newBreak = <br></br>
    for(let i=0;i<9;i++){
        let newLine = props.map[i];
        mapData.push(<pre>{newLine}</pre>);
        console.log(mapData)
    }

    return(<div>
        {mapData}
        <div className="row">
            <button onClick={(e) => props.move("north",e)}><div style={{ height:"25px", width:"107px"}}>   
            </div></button>

            
        </div>

        <div className="row">
            <button onClick={(e) => props.move("west",e)}><div style={{backgroundColor:"black", height:"75px", width:"25px"}}>
            </div></button>

            <button><div style={{backgroundColor:"black", height:"25px", width:"25px"}}> 
            </div></button>

            <button onClick={(e) => props.move("east",e)}><div style={{backgroundColor:"black", height:"75px", width:"25px"}}>
            </div></button>
        </div>
        <div className="row">

            <button onClick={(e) => props.move("south",e)}><div style={{backgroundColor:"black", height:"25px", width:"75px"}}>
            </div></button>
        </div>
    
    </div>)
}
export default MiniMap