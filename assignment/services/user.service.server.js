var app = require('../../express');
var users = [{
    _id: "123",
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonder"
  },
  {
    _id: "234",
    username: "bob",
    password: "bob",
    firstName: "Bob",
    lastName: "Marley"
  },
  {
    _id: "345",
    username: "charly",
    password: "charly",
    firstName: "Charly",
    lastName: "Garcia"
  },
  {
    _id: "456",
    username: "jannunzi",
    password: "jannunzi",
    firstName: "Jose",
    lastName: "Annunzi"
  }
];

app.post('/api/user', createUser);
app.get('/api/user/:userId', findUserById);
app.get('/api/user', findUserByCredentials);
app.get('/api/user', findUserByUsername);
app.put('/api/user/:userId', updateUser);
app.delete('/api/user/:userId', deleteUser);

function createUser(req, res) {
  var newUser = req.body;
  newUser._id = (new Date()).getTime() + "";
  users.push(newUser);
  res.send(newUser);
}

function findUserById(req, res) {
  var userId = req.params['userId'];
  for(i = 0; i < users.length; i++) {
    if(users[i]._id == userId) {
      res.send(users[i]);
      return;
    }
  }
  res.sendStatus(404);
  return;
}

function findUserByCredentials(req, res) {
  var username = req.query['username'];
  var password = req.query['password'];
  for(i = 0; i < users.length; i++) {
    if(users[i].username == username && users[i].password == password) {
      res.json(user);
      return;
    }
  }
  res.sendStatus(404);
}

function findUserByUsername(req, res) {
  var username = req.query['username'];
  for(i = 0; i < users.length; i++) {
    if(users[i].username == username) {
      res.json(user);
      return;
    }
  }
  res.send(null);
}

function updateUser(req, res) {
  var userId = req.params['userId'];
  var user = req.body;
  for(i = 0; i < users.length; i++) {
    if(users[i]._id == userId) {
      users[i] = user;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function deleteUser(req, res) {
  var userId = req.params['userId'];
  for(i = 0; i < users.length; i++) {
    if(users[i]._id == userId) {
      users.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}
