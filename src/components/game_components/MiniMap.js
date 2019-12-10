import React from 'react';


function MiniMap(props){
  

    return(<div className="miniMap">
        <div className="row">
            <button className="col-md-10" onClick={(e) => props.move("north",e)}><div className="miniMapT">N
            </div></button>

            
        </div>

        <div className="row">
            <button className="col-md-4"onClick={(e) => props.move("west",e)}><div className="miniMapL">W</div></button>

            <div className="miniMapMid col-sm-2"></div>

            <button className="col-md-4" onClick={(e) => props.move("east",e)}><div className="miniMapR">
            E</div></button>
        </div>
        <div className="row">

            <button className="col-md-10"onClick={(e) => props.move("south",e)}><div className="miniMapB">
            S</div></button>
        </div>
    
    </div>)
}
export default MiniMap