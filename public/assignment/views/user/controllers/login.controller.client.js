(function() {
  angular
    .module("WebAppMaker")
    .controller("LoginController", LoginController)

  function LoginController($location, UserService) {
    var vm = this;
    vm.login = function(username, password) {
      var found = UserService.findUserByCredentials(username, password);

      if (found !== null) {
        $location.url('/user/' + found._id);
      } else {
        vm.message = "Username " + username + " not found.";
      }
    }
  }
})();
