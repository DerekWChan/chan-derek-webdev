(function() {
  angular
    .module('WebAppMaker')
    .controller('registerController', registerController);

  function registerController($location, userService) {
    var model = this;
    model.register = register;

    function register(username, password, verifyPassword) {
      if (username === '' || username === null || username === undefined) {
        model.message = 'Please type in a username.';
        return;
      }

      if (password === '' || password === null || password === undefined) {
        model.message = 'Please type in a password.';
        return;
      }

      if (password !== verifyPassword) {
        model.message = 'The passwords do not match.';
        return;
      }

      userService
        .findUserByUsername(username)
        .then(usernameUnavailable, usernameAvailable);

      function usernameUnavailable() {
        model.message = 'Username ' + username + ' is not available.';
      }

      function usernameAvailable() {
        var newUser = {
          _id: (new Date()).getTime() + '',
          username: username,
          password: password
        };
        return userService
          .register(newUser)
          .then(function(user) {
            $location.url('/profile');
          });
      }
    }
  }
})();
