(function() {
  angular
    .module("WebAppMaker")
    .controller("EditWebsiteController", EditWebsiteController);

  function EditWebsiteController($routeParams, $location, WebsiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.updateWebsite = updateWebsite;
    model.deleteWebsite = deleteWebsite;

    function init() {
      WebsiteService
        .findWebsiteById(model.websiteId)
        .then(function(websites) {
          model.websites = websites;
        });

      WebsiteService
        .findAllWebsitesForUser(model.userId)
        .then(function(websites) {
          model.websites = websites;
        });
    }
    init();

    function updateWebsite(website) {
      WebsiteService
        .updateWebsite(model.websiteId, website)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }

    function deleteWebsite(websiteId) {
      WebsiteService
        .deleteWebsite(model.websiteId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }
  }
})();
