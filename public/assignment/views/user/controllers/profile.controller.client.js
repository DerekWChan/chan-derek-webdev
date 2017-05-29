(function() {
  angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController);

  function ProfileController($routeParams, UserService) {
    var model = this;
    var userId = $routeParams["userId"];
    model.user = UserService.findUserById(userId);
  }
})();
