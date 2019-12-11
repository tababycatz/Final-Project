import React from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './components/navbar/NavBar';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const App = () => (
  <div className="App">
    <Routes />
    </div>
);


export default App;
