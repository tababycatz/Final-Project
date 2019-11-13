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
  }
};
