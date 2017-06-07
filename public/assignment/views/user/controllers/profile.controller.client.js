(function() {
    angular
      .module("WebAppMaker")
      .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
      var model = this;
      model.userId = $routeParams["userId"];
      model.updateUser = updateUser;
      model.deleteUser = deleteUser;

      UserService
        .findUserById(model.userId)
        .then(renderUser, userNotFound);

      function renderUser(user) {
        model.user = user;
      }

      function userNotFound() {
        model.message = "The username was not found.";
      }

      function updateUser(userId, user) {
        UserService
          .updateUser(userId, user)
          .then(profileUpdated, profileNotUpdated);

        function profileUpdated() {
          model.message = "Profile was updated successfully.";
        }

        function profileNotUpdated() {
          model.message = "Profile could not be updated.";
        }
      }

      function deleteUser(userId) {
        UserService
          .deleteUser(userId)
          .then(profileDeleted, profileNotDeleted);

        function profileDeleted() {
          $location.url('/login');
        }

        function profileNotDeleted() {
          model.message = "Profile could not be deleted.";
        }
    }
  }
})();
