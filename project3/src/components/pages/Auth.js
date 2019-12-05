import React from 'react';
import {
  HeaderBar,
  LinkButtons,
  loginButton,
  registerButton,
} from '../buttons';

const title = {
  pageTitle: 'Home',
};

const Auth = () => (
  <div className="home-page">
    <HeaderBar title={title} />
    <LinkButtons
      buttonText="Register"
      buttonStyle={registerButton}
      link="/register"
    />
    <LinkButtons buttonText="Login" buttonStyle={loginButton} link="/login" />
  </div>
);

export default Auth;
