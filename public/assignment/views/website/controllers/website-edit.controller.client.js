(function() {
  angular
    .module('WebAppMaker')
    .controller('websiteEditController', websiteEditController);

  function websiteEditController($routeParams, $location, websiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.updateWebsite = updateWebsite;
    model.deleteWebsite = deleteWebsite;

    function init() {
      websiteService
        .findAllWebsitesForUser(model.userId)
        .then(function(websites) {
          model.websites = websites;
        });

      websiteService
        .findWebsiteById(model.websiteId)
        .then(function(website) {
          model.website = website;
        });
    }
    init();

    function updateWebsite(website) {
      if (website.name === '' || website.name === null || typeof website.name === 'undefined') {
        model.message = "Please enter a website name.";
        return model.message;
      }

      websiteService
        .updateWebsite(model.websiteId, website)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }

    function deleteWebsite(websiteId) {
      websiteService
        .deleteWebsite(model.websiteId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }
  }
})();
