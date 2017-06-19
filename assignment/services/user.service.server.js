var app = require('../../express');
var userModel = require('../models/user/user.model.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
passport.use(new LocalStrategy(localStrategy));

var FacebookStrategy = require('passport-facebook').Strategy;
var facebookConfig = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'emails', 'name']
};
passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

app.post('/api/assignment/user', createUser);
app.get('/api/assignment/user', findAllUsers);
app.get('/api/assignment/user/:userId', findUserById);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);

app.post('/api/assignment/login', passport.authenticate('local'), login);
app.post('/api/assignment/logout', logout);
app.post('/api/assignment/register', register);
app.get('/api/assignment/checkLoggedIn', checkLoggedIn);

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/assignment/index.html#/profile',
  failureRedirect: '/assignment/index.html#/login'
}));

function createUser(req, res) {
  var user = req.body;

  userModel
    .createUser(user)
    .then(function(user) {
      res.json(user);
    }, function(error) {
      res.send(error);
    });
}

function findAllUsers(req, res) {
  var username = req.query['username'];
  var password = req.query['password'];

  if (username && password) {
    userModel
      .findUserByCredentials(username, password)
      .then(function(user) {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      });
  } else if (username) {
    userModel
      .findUserByUsername(username)
      .then(function(user) {
        if (user) {
          res.json(user);
        } else
          res.sendStatus(404);
      });
  } else {
    userModel
      .findAllUsers()
      .then(function(users) {
        res.json(users);
      })
  }
}

function findUserById(req, res) {
  var userId = req.params['userId'];
  userModel
    .findUserById(userId)
    .then(function(user) {
      res.json(user);
    });
}

function updateUser(req, res) {
  var userId = req.params['userId'];
  var user = req.body;

  userModel
    .updateUser(userId, user)
    .then(function(status) {
      res.send(status);
    });
}

function deleteUser(req, res) {
  var userId = req.params['userId'];

  userModel
    .deleteUser(userId)
    .then(function(status) {
      res.send(status);
    });
}

function serializeUser(user, done) {
  done(null, user);
}

function deserializeUser(user, done) {
  userModel
    .findUserById(user._id)
    .then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
}

function localStrategy(username, password, done) {
  userModel
    .findUserByCredentials(username, password)
    .then(
      function(user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function(err) {
        if (err) {
          return done(err);
        }
      }
    );
}

function login(req, res) {
  var user = req.user;
  res.json(user);
}

function logout(req, res) {
  req.logOut();
  res.send(200);
}

function register(req, res) {
  var user = req.body;

  user.password = bcrypt.hashSync(user.password);
  userModel
    .createUser(user)
    .then(function(user) {
      req.login(user, function(err) {
        res.send(err);
      });
    });
}

function checkLoggedIn(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.send('0');
  }
}

function facebookStrategy(token, refreshToken, profile, done) {
  userModel
    .findUserByFacebookId(profile.id)
    .then(function(user) {
      if (user) {
        return done(null, user);
      } else {
        var facebookUser = {
          facebook: {
            id: profile.id,
            token: token
          }
        };
        return userModel.createUser(facebookUser);
      }
    }, function(err) {
      if (err) {
        return done(err);
      }
    }).then(function(user) {
        return done(null, user);
      },
      function(err) {
        if (err) {
          return done(err);
        }
      });
}
