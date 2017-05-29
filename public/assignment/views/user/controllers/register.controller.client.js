(function() {
  angular
    .module("WebAppMaker")
    .controller("RegisterController", RegisterController);

  function RegisterController($location, UserService) {
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

      var found = UserService.findUserByUsername(username);
      if (found !== null) {
        model.message = "Username " + username + " is not available."
      } else {
        var newUser = {
          _id: (new Date()).getTime() + "",
          username: username,
          password: password
        };
        UserService.createUser(newUser);
        $location.url('/user/' + newUser._id);
      }
    }
  }
})();
