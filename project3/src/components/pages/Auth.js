import React from 'react';
import Button from '@material-ui/core/Button';


const Auth = () => (
  <div className="home-page">
    <Button 
    variant="outlined" color="primary" link="/register">
        Register
      </Button>
      <Button 
    variant="outlined" color="secondary" link="/Login">
        Login
      </Button>
  </div>
);

export default Auth;
