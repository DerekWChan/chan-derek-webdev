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
