(function() {
  angular
    .module("HearthstoneTheorycraftr")
    .config(Config);

  function Config($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home/templates/home.view.client.html",
        controller: "homeController",
        controllerAs: "model"
      })
      .when("/login", {
        templateUrl: "views/user/templates/login.view.client.html",
        controller: "loginController",
        controllerAs: "model"
      })
      .when("/register", {
        templateUrl: "views/user/templates/register.view.client.html",
        controller: "registerController",
        controllerAs: "model"
      })
      .when("/user/:userId", {
        templateUrl: "views/user/templates/profile.view.client.html",
        controller: "profileController",
        controllerAs: "model"
      })
      .when("/user/:userId/decks", {
        templateUrl: "views/deck/templates/deck-collection.view.client.html",
        controller: "deckCollectionController",
        controllerAs: "model"
      })
      .when("/user/:userId/deck/:deckId/details", {
        templateUrl: "views/deck/templates/deck-details.view.client.html",
        controller: "deckDetailsController",
        controllerAs: "model"
      })
      .when("/deck/builder", {
        templateUrl: "views/deck/templates/deck-builder.view.client.html",
        controller: "deckBuilderController",
        controllerAs: "model"
      })
      .when("/deck/editor", {
        templateUrl: "views/deck/templates/deck-editor.view.client.html",
        controller: "deckEditorController",
        controllerAs: "model"
      })
      .when("/card/details", {
        templateUrl: "views/card/templates/card-details.view.client.html",
        controller: "cardDetailsController",
        controllerAs: "model"
      })
  }
})();
