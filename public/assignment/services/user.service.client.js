(function() {
  angular
    .module('WebAppMaker')
    .factory('userService', userService);

  function userService($http) {
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
      var url = "/api/assignment/user?username=" + username;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // returns the user whose username and password match the username and password parameters
    function findUserByCredentials(username, password) {
      var url = "/api/assignment/user?username=" + username + "&password=" + password;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // updates the user in local users array whose _id matches the userId parameter
    function updateUser(userId, user) {
      var url = "/api/assignment/user/" + userId;
      return $http.put(url, user)
        .then(function(response) {
          return response.data;
        });
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(userId) {
      var url = "/api/assignment/user/" + userId;
      return $http.delete(url)
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
