import axios from "axios";

export default {
  // gets all rooms
  getRooms: function() {
    return axios.get("https://dogmudserv.herokuapp.com/dmxapi/getRooms");
  },
  // gets the character with this id
  getOneChar: function(id) {
    return axios.get("https://dogmudserv.herokuapp.com/dmxapi/getOneChar/" + id);
  },
  // gets all characters
  getChars: function() {
    return axios.get("https://dogmudserv.herokuapp.com/dmxapi/getChars");
  },
  // updates character info
  updateChar: function(id) {
    return axios.post("https://dogmudserv.herokuapp.com/dmxapi/updateChar", id);
  },
  getRoom: function (id) {
    return axios.get("https://dogmudserv.herokuapp.com/dmxapi/getroominv/" + id);
  },
  moveRoom: function(id,dir) {
    return axios.get("https://dogmudserv.herokuapp.com/dmxapi/moveChar/" + id + "/" + dir)
  },
  pickUpObj: function(charID,objID){
    return(axios.get("https://dogmudserv.herokuapp.com/dmxapi/pickupobj/" + charID + "/" + objID))
  },
  dropObj: function(charID){
    return(axios.get("https://dogmudserv.herokuapp.com/dmxapi/pickupobj/" + charID))
  },
  getMap: function(charID) {
    return(axios.get("https://dogmudserv.herokuapp.com/dmxapi/getviewport/" + charID))
  }
  
};
