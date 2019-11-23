import React from 'react'
import NavBar from '../NavBar'
import DisplayTerm from '../game_components/DisplayTerm'
import MiniMap from '../game_components/MiniMap'
import PlayerCharacter from '../game_components/PlayerCharacter'
import API from '../utils/API'
import Card from "../game_components/Card"
import ReactModal from "react-modal"

let bttns = [];

class MainGame extends React.Component {
    state = {
        char: {},
        currentRoomNum: 3,
        currentRoomInv: {},
        allR: {},
        button: [],
        lastRoomLooked: 0,
        errorModalOpen: false
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

    interactWithObject = obj_id => {
        let thisObj = this.state.currentRoomInv.objects[obj_id];
        
        if(thisObj.held_by === 0){
            var objInspectCard = <Card type="object" title={this.state.currentRoomInv.objects[obj_id].object_name}
            object={this.state.currentRoomInv.objects[obj_id]}  click1={this.pickUpObject} click2={this.pullRoom} unOwned={true}/>
        } else {
            var objInspectCard = <Card type="object" title={this.state.currentRoomInv.objects[obj_id].object_name} object={this.state.currentRoomInv.objects[obj_id]}  click1={this.pickUpObject} click2={this.pullRoom}/>
        }
        bttns = []

        bttns.push(objInspectCard)
        this.setState({button:bttns})
    }

    checkPlayerInfo = playerId => {
        API.getOneChar(playerId).then(({data: newPlayerData}) => {
            console.log(newPlayerData);
            this.makeNewPlayerCard(newPlayerData)
        })
    }

    makeNewPlayerCard = playerData => {
        let newCard = <Card type="player" title={playerData.char_name} char={playerData} click2={this.pullRoom}/>
        bttns = []
        bttns.push(newCard);
        this.setState({button:bttns})

    }

    pickUpObject = object => {

    }

    lookInRoom = () => {
        bttns = []

        var newRoomObjects = <Card key="0" type="objects" title="Objects in Room"  objects={this.state.currentRoomInv.objects} click1={this.interactWithObject}/>
        var newRoomPlayers = <Card key="1" type="players" title="Players in Room" players={this.state.currentRoomInv.characters} click1={this.checkPlayerInfo}/>

        bttns.push(newRoomPlayers)
        bttns.push(newRoomObjects);
        console.log(bttns)

        this.setState({button:bttns})
    }

    movePlayer = dir => {
        if(this.state.currentRoomNum != dir){
            this.setState({currentRoomNum:dir})
            this.newRoom()
        }
    }

    newRoom = () => {
        bttns = []
        var newRoomButton = <Card key="1" type="room" title="New Room Entered"  body={this.state.allR[this.state.currentRoomNum].descript} click1Text="Check Room" click1={this.pullRoom}/>
        bttns.push(newRoomButton)
        this.setState({button:bttns})
    }

    pullRoom = () => {
        console.log("got here")
        let cr = this.state.currentRoomNum
        API.getRoom(cr).then(({data: currentRoomInv}) => {
            this.setState({currentRoomInv})
            console.log(currentRoomInv)
            this.lookInRoom()
        }).catch(err => console.log(err))
    } 

    closeModal = () => {
        this.setState({errorModalOpen: false})
    }

    

    render(){

    return(<div className="container-fluid">
    <div className="row align-items-end">
    <div className="col-md">
        <ReactModal isOpen={this.state.errorModalOpen}><h3>ERROR</h3><br></br><p>you just looked in here</p><button onClick={this.closeModal}>woof</button></ReactModal>
    <DisplayTerm buttons={this.state.button} refreshFunction={this.pullRoom} currentRoomInv={this.state.currentRoomInv} />
    </div>

    <div className="col-md-auto">
    <MiniMap move={this.movePlayer}/>
    <PlayerCharacter info="true" playerChar={this.state.char}/>
    </div>
    </div>
    </div>)
    }
}

export default MainGame