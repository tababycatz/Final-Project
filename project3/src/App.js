import React from 'react';
import './App.css';
import Routes from './Routes';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../config/firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

render(App) {
  const {
    user,
    signOut,
    signIn,
    signinWithGoogle
  } = this.props;

return (
  <div className="App">
    <Routes />
    </div>
);
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
