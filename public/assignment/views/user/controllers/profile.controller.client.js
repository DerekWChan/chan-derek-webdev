(function() {
  angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController);

  function ProfileController($location, $routeParams, UserService) {
    var model = this;
    model.userId = $routeParams["userId"];
    model.user = UserService.findUserById(model.userId);
    model.updateUser = updateUser;
    model.deleteUser = deleteUser;

    function updateUser(userId, user) {
      UserService.updateUser(userId, user);
      model.message = "Profile was updated successfully.";
    }

    function deleteUser(userId) {
      UserService.deleteUser(userId);
      $location.url('/login');
    }
  }
})();
