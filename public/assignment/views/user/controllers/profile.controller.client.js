(function() {
  angular
    .module("WebAppMaker")
    .controller("ProfileController", ProfileController)

  function ProfileController($routeParams, UserService) {
    var vm = this;
    var userId = $routeParams["userId"];

    function init() {
      vm.user = UserService.findUserById(userId);
      vm.updateUser = function() {
        UserService.updateUser(userId, vm.user);
        vm.message = "Profile was updated successfully."
      }
    }
    init();
  }
})();
