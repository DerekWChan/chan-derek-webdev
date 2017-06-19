(function() {
  angular
    .module('WebAppMaker')
    .controller('websiteNewController', websiteNewController);

  function websiteNewController($location, $routeParams, websiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.createWebsite = createWebsite;

    function init() {
      websiteService
        .findAllWebsitesForUser(model.userId)
        .then(function(websites) {
          model.websites = websites;
        });
    }
    init();

    function createWebsite(website) {
      if (name === '' || name === null || typeof name === 'undefined') {
        model.message = "Please enter a website name.";
        return model.message;
      }
      website.developerId = model.userId;
      websiteService
        .createWebsite(website)
        .then(function() {
          $location.url('/user/' + model.userId + '/website');
        });
    }
  }
})();
