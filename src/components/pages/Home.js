import React from "react";
import Navbar from "../navbar/NavBar";
import "../../style/index.css";
import Background from '../pics/bg.png';


const Home = () => (
  <div className="main-body">
    <Navbar />
    <div id="container">
      <img src={Background} className='dogPaw' alt='dogpaw' />
      <h2> Welcome to dogMUD. Let's play.</h2>
    </div>
  </div>
  // 
);

export default Home;