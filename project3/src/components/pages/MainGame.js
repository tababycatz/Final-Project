import React from 'react'
import NavBar from '../NavBar'
import DisplayTerm from '../game_components/DisplayTerm'
import MiniMap from '../game_components/MiniMap'
import PlayerCharacter from '../game_components/PlayerCharacter'
import API from '../utils/API'

class MainGame extends React.Component {
    state = {
        char: {}
    }

    componentDidMount(){
        // let newChar;
        // console.log(API.getOneChar(1))
        // API.getOneChar(1).then(function (res) {
        //     newChar = res
        // });
        // console.log(newChar);

        API.getOneChar(1).then(({data: char}) => {
            this.setState({char})
        }).catch(err => console.log(err));
        // this.getNewPlayer();
        
    }

    

    render(){
    console.log(this.state.char)

    return(<div className="container-fluid">
    <div className="row align-items-end">
    <div className="col-md">

    <DisplayTerm />
    </div>

    <div className="col-md-auto">
    <MiniMap />
    <PlayerCharacter info="true" playerChar={this.state.char}/>
    </div>
    </div>
    </div>)
    }
}

export default MainGame