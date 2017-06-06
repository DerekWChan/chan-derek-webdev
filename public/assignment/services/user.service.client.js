(function() {
  angular
    .module('WebAppMaker')
    .factory('UserService', UserService);

  function UserService($http) {
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
    var api = {
      "createUser": createUser,
      "findUserById": findUserById,
      "findUserByUsername": findUserByUsername,
      "findUserByCredentials": findUserByCredentials,
      "updateUser": updateUser,
      "deleteUser": deleteUser
    };
    return api;

    // adds the user parameter instance to the local users array
    function createUser(newUser) {
      var url = "/api/assignment/user";
      return $http.post(url, newUser)
        .then(function(response) {
          return response.data;
        });
    }

    // returns the user in local users array whose _id matches the userId parameter
    function findUserById(userId) {
      var url = "/api/assignment/user/" + userId;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // returns the user in local users array whose username matches the parameter username
    function findUserByUsername(username) {
      for (i = 0; i < users.length; i++) {
        if (users[i].username == username) {
          return users[i];
        }
      }
      return null;
    }

    // returns the user whose username and password match the username and password parameters
    function findUserByCredentials(username, password) {
      for (i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
          return users[i];
        }
      }
      return null;
    }

    // updates the user in local users array whose _id matches the userId parameter
    function updateUser(userId, user) {
      for (i = 0; i < users.length; i++) {
        if (users[i]._id == userId) {
          users[i] = user;
        }
      }
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(userId) {
      for (i = 0; i < users.length; i++) {
        if (users[i]._id == userId) {
          users.splice(i, 1);
        }
      }
    }
  }
})();
