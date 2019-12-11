import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import MainGame from './components/pages/MainGame'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/play" component={MainGame} />
    </Switch>
  </div>
);


export default Routes;