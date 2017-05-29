(function() {
  angular
    .module("WebAppMaker")
    .controller("NewWebsiteController", NewWebsiteController);

  function NewWebsiteController($routeParams,$location, WebsiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.createWebsite = createWebsite;

    function init() {
      model.websites = WebsiteService.findWebsitesByUser(model.userId);
    }
    init();

    function createWebsite(website) {
      website.developerId = model.userId;
      WebsiteService.createWebsite(website);
      $location.url('/user/' + model.userId + '/website');
    }

  }
})();
