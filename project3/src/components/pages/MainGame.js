import React from 'react'
import NavBar from '../NavBar'
import DisplayTerm from '../game_components/DisplayTerm'
import MiniMap from '../game_components/MiniMap'
import PlayerCharacter from '../game_components/PlayerCharacter'
import API from '../utils/API'
import Card from "../game_components/Card"

let bttns = []

class MainGame extends React.Component {
    state = {
        char: {},
        currentRoomNum: 3,
        currentRoomInv: {},
        allR: {},
        buttons:[]
    }

    constructor(props){
        
        super(props)

        let allRms = {};


        API.getRooms().then(({data:allRooms}) => {
            this.allRms = allRooms;

            this.state ={allR:this.allRms}

        }).catch(err => console.log(err))


    }
    

    componentDidMount(){
        API.getOneChar(1).then(({data: char}) => {
            this.setState({char})
        }).catch(err => console.log(err));

    
        API.getRooms().then(({data:allRooms}) => {
            this.allRms = allRooms;

            this.setState({allR:this.allRms})
            this.newRoom()

        }).catch(err => console.log(err))
        

        // this.pullRoom(1)
    }

    handleChange(){
        
    }

    interactWithObject = (obj_id) => {
        console.log(obj_id)
        // console.log(this.state.currentRoomInv)
        console.log("this worked, you clicked: " + this.state.currentRoomInv.objects[0].object_name)
    }

    lookInRoom(){
        var newRoomObjects = <Card key="0" type="objects" title="Objects in Room"  objects={this.state.currentRoomInv.objects} objClickFunct={this.interactWithObject}/>
        bttns.push(newRoomObjects)
        this.setState({buttons:bttns})
    }

    newRoom(){
        var newRoomButton = <Card key="1" type="room" title="New Room Entered"  body={this.state.allR[this.state.currentRoomNum].descript} click1Text="Check Room" click1={this.pullRoom}/>
        bttns.push(newRoomButton)
        this.setState({buttons:bttns})
    }

    pullRoom = () => {
        let cr = this.state.currentRoomNum

        API.getRoom(cr).then(({data: currentRoomInv}) => {
            this.setState({currentRoomInv})
            if(this.state.currentRoomInv != {}){
            this.lookInRoom()
            }
        }).catch(err => console.log(err))
    } 
    

    moveRooms(dir){
        switch(dir){
            case "N":
                this.setState({currentRoomNum: this.currentRoomNum - 9});
                this.pullRoom();
                break;
            case "S":
                this.setState({currentRoomNum: this.currentRoomNum + 9});
                this.pullRoom();
                break;
            case "E":
                this.setState({currentRoomNum: this.currentRoomNum - 1});
                this.pullRoom();
                break;
            case "W":
                this.setState({currentRoomNum: this.currentRoomNum + 1});
                this.pullRoom();
                break;
        }
    }

    

    render(){

    return(<div className="container-fluid">
    <div className="row align-items-end">
    <div className="col-md">

    <DisplayTerm buttons={this.state.buttons} refreshFunction={this.pullRoom} currentRoomInv={this.state.currentRoomInv} />
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