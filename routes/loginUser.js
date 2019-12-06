const jwt = require('jsonwebtoken');
const passport = require('passport');
const jwtSecret = require('../config/jwtConfig');
const User = require ('../sequelize').User;

module.exports = app => {
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, users, info) => {
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        if (info.message === 'bad username') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
        console.log("USER: ", User)
        console.log(req.body)
        req.logIn(users, () => {
          User.findOne({
            where: {
              username: req.body.username,
            }
          }).then(user => {
            console.log(user.id)
            const token = jwt.sign({ id: user.user_id }, jwtSecret.secret, {
              expiresIn: 60 * 60,
            });
            res.status(200).send({
              auth: true,
              token,
              message: 'logged in!',
            });
          });
        });
      }
    })(req, res, next);
  });
};
