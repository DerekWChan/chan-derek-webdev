var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('userModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

userModel.addWebsite = addWebsite;
userModel.deleteWebsite = deleteWebsite;

module.exports = userModel;

// Creates a new user instance
function createUser(user) {
  return userModel.create(user);
}

// Retrieves a user instance whose _id is equal to parameter userId
function findUserById(userId) {
  return userModel.findById(userId);
}

// Retrieves a user instance whose username is equal to parameter username
function findUserByUsername(username) {
  return userModel.findOne({
    username: username
  });
}

// Retrieves a user instance whose username and password are equal to parameters userId and password
function findUserByCredentials(username, password) {
  return userModel.findOne({
    username: username,
    password: password
  });
}

// Updates user instance whose _id is equal to parameter userId
function updateUser(userId, user) {
  delete user.username;
  return userModel
    .update({
      _id: userId
    }, {
      $set: newUser
    });
}

// Removes user instance whose _id is equal to parameter userId
function deleteUser(userId) {
  return userModel.remove({
    _id: userId
  });
}

function addWebsite() {
  return userModel
    .findById(userId)
    .then(function(user) {
      user.websites.push(websiteId);
      return user.save();
    });
}

function deleteWebsite() {
  return userModel
    .findById(userId)
    .then(function(user) {
      var index = user.websites.indexOf(websiteId);
      user.websites.splice(index, 1);
      return user.save();
    });
}
