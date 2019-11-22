import React from 'react';
import Card from './Card';
import API from '../utils/API'

class DisplayTerm extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {

        }
        
        this.buttons = [];
        
    }

    componentDidMount(){
        // this.checkRoom();

    }

    

    checkRoom(){
        this.props.refreshFunction();  
        setInterval(this.handleChange, 1000);  
    }

    render() {
        // var rendy = <InputChoice question="THIS IS A QUESTION"/>
        return(
            <div style={{backgroundColor:"pink", height:"100%", width:"100%"}}>
            {this.props.buttons}
            </div>
    )
    }
    
}
export default DisplayTerm