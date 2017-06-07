(function() {
  angular
    .module("WebAppMaker")
    .controller("NewWebsiteController", NewWebsiteController);

  function NewWebsiteController($location, $routeParams, WebsiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.createWebsite = createWebsite;

    function init() {
      WebsiteService
        .findAllWebsitesForUser(model.userId)
        .then(function() {
          model.websites = websites;
        });
    }
    init();

    function createWebsite(website) {
      website.developerId = model.userId;
      WebsiteService
        .createWebsite(website)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }
  }
})();
