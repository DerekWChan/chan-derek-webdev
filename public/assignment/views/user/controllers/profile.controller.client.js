(function() {
  angular
    .module('WebAppMaker')
    .controller('profileController', profileController);

  function profileController($location, $routeParams, userService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.updateUser = updateUser;
    model.deleteUser = deleteUser;
    model.logout = logout;

    userService
      .findUserById(model.userId)
      .then(renderUser, userNotFound);

    function renderUser(user) {
      model.user = user;
    }

    function userNotFound() {
      model.message = 'The username was not found.';
    }

    function updateUser(userId, user) {
      userService
        .updateUser(userId, user)
        .then(profileUpdated, profileNotUpdated);

      function profileUpdated() {
        model.message = 'Profile was updated successfully.';
      }

      function profileNotUpdated() {
        model.message = 'Profile could not be updated.';
      }
    }

    function deleteUser(userId) {
      userService
        .deleteUser(userId)
        .then(profileDeleted, profileNotDeleted);

      function profileDeleted() {
        $location.url('/login');
      }

      function profileNotDeleted() {
        model.message = 'Profile could not be deleted.';
      }
    }

    function logout() {
      userService
        .logout()
        .then(function() {
          $location.url('/login');
        });
    }
  }
})();
