(function() {
  angular
    .module("WebAppMaker")
    .controller("LoginController", LoginController);

  function LoginController($location, UserService) {
    var model = this;
    model.login = login;

    function login(username, password) {
      var found = UserService.findUserByCredentials(username, password);

      if (found !== null) {
        $location.url('/user/' + found._id);
      } else {
        model.message = "The username was not found.";
      }
    };
  }
})();
