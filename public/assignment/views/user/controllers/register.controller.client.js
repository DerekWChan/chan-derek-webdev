(function() {
  angular
    .module("WebAppMaker")
    .controller("RegisterController", RegisterController)

  function RegisterController($location, UserService) {
    var vm = this;

    vm.register = function(username, password) {
      var found = UserService.findUserByUsername(username);
      if (found !== null) {
        vm.message = "Username " + username + " is not available."
      } else {
        var newUser = {
          _id: Math.floor(Math.random() * (1000 - 0)).toString(),
          username: username,
          password: password
        };
        UserService.createUser(newUser);
        $location.url('/user/' + newUser._id);
      }
    }
  }
})();
