 const express = require('express');
 const cors = require('cors');
 const passport = require('passport');
 const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
 const FacebookStrategy = require('passport-facebook').Strategy;
 const keys = require('../../config/');
 let user = {};

 //Facebook Strategy//
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret : keys.FACEBOOK.clientSecret,
    callbackURL: '/auth/facebook/callback'
},
    (accessToken, refreshToken, profile, cb) => {
        user = {...profile};
        return cb(null,profile);

    }
));

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret : keys.GOOGLE.clientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, cb) => {
        user = {...profile};
        return cb(null,profile);

    }
));

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
passport.authenticate('facebook', 
    { successRedirect: '/profile',
    failureRedirect: '/' }));



app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));
app.get('/auth/google/callback',
passport.authenticate('google', 
    { successRedirect: '/profile',
    failureRedirect: '/' }));

app.get('/user', (req,res) => {
    console.log('getting user data');
    res.send(user);
});

app.get('/auth/logout', (req, res) => {
    console.log('logging out');
    user = {};
    res.redirect('/');
})
    

const PORT = process.env.PORT || 5000;
app.listen(PORT);

