(function() {
  angular
    .module('WebAppMaker')
    .controller('loginController', loginController);

  function loginController($location, userService) {
    var model = this;
    model.login = login;

    function login(username, password) {
      if (username === '' || username === null || username === undefined) {
        model.message = 'Please type in a username.';
        return;
      }

      if (password === '' || password === null || password === undefined) {
        model.message = 'Please type in a password.';
        return;
      }

      userService
        .login(username, password)
        .then(userFound, userNotFound);

      function userFound(found) {
        if (found !== null) {
          $location.url('/user/' + found._id);
        }
      }

      function userNotFound(error) {
        model.message = 'The username was not found.';
      }
    }
  }
})();
