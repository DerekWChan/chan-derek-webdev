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

app.post('/api/assignment/user', createUser);
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user', findUserByCredentials);
app.get('/api/assignment/user', findUserByUsername);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);

function createUser(req, res) {
  var user = req.body;

  user._id = (new Date()).getTime() + "";
  users.push(user);
  res.send(user);
}

function findUserById(req, res) {
  var userId = req.params['userId'];

  for(var i in users) {
    if(users[i]._id === userId) {
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

  for(var i in users) {
    if(users[i].username === username && users[i].password === password) {
      res.json(users[i]);
      return;
    }
  }
  res.sendStatus(404);
}

function findUserByUsername(req, res) {
  var username = req.query['username'];

  for(var i in users) {
    if(users[i].username === username) {
      res.json(user);
      return;
    }
  }
  res.send(null);
}

function updateUser(req, res) {
  var userId = req.params['userId'];
  var user = req.body;

  for(var i in users) {
    if(users[i]._id === userId) {
      users[i] = user;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function deleteUser(req, res) {
  var userId = req.params['userId'];

  for(var i in users) {
    if(users[i]._id === userId) {
      users.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}
