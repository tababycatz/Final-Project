import React from 'react';
import Card from './Card';

class DisplayTerm extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.buttons = [];
        for(let i=0;i<5;i++){
            this.buttons.push(<Card key={i} title="" body="this is descriptive text" interactable="true" click1Text="Yes" click2Text="No"/>)
        }
    }

    render() {
        // var rendy = <InputChoice question="THIS IS A QUESTION"/>
        return(
            <div style={{backgroundColor:"pink", height:"100%", width:"100%"}}>
            {this.buttons}
            </div>
    )
    }
    
}
export default DisplayTerm