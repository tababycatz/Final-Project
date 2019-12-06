import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import "../../style/index.css";
import Login from "../pages/Login";

const Home = () => (
  <div className="main-body">
    <Navbar />
    <div id="container">
      <div className="row">
        <Login />
      </div>
    </div>
  </div>
  // 
);

export default Home;