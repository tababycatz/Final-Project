import React from 'react';
import NavBar from "../src/components/navbar/NavBar";
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvier from './context/UserProvider';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import MainGame from './components/pages/MainGame';


const App = () => {
    return (
        <div>
          <Router history={history}>
            <UserProvier>
              <Route path='/' component={NavBar} />
              {/* <Route path='/home' component={Profile} /> */}
              <Route path="/play" exact component={MainGame} />
            </UserProvier>
              {/* <Route path='/home' exact component={Home} /> */}
          </Router>
    </div>
    );
};

export default App;