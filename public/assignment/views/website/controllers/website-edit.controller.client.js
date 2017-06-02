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
      model.website = WebsiteService.findWebsiteById(model.websiteId);
      model.websites = WebsiteService.findWebsitesByUser(model.userId);
    }
    init();

    function updateWebsite(website) {
      WebsiteService.updateWebsite(model.websiteId, website);
      $location.url('/user/' + model.userId + '/website');
    }

    function deleteWebsite(websiteId) {
      WebsiteService.deleteWebsite(model.websiteId);
      $location.url('/user/' + model.userId + '/website');
    }
  }
})();
