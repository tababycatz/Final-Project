import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../config/firebaseConfig';
import Navbar from "../navbar/NavBar";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


  export default function SignUp() {
    const classes = useStyles();

    return (
<div className="main-body">
    <Navbar />
    <div id="container">
      <div className="row">
<script src="/__/firebase/7.5.0/firebase-app.js"></script>
<script src="/__/firebase/init.js"></script>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="first_name"
                label="first_name"
                // value={first_name}
                // onChange={this.handleChange('first_name')}
                placeholder="First Name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="last_name"
                label="last_name"
                // value={last_name}
                // onChange={this.handleChange('first_name')}
                placeholder="Last Name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="username"
                // value={username}
                // onChange={this.handleChange('first_name')}
                placeholder="username"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                // value={email}
                // onChange={this.handleChange('first_name')}
                placeholder="email"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                // value={password}
                // onChange={this.handleChange('first_name')}
                placeholder="password"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
    </div>
    </div>
  </div>
  );
}

