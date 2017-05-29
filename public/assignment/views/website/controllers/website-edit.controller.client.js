(function() {
  angular
    .module("WebAppMaker")
    .controller("EditWebsiteController", EditWebsiteController);

  function EditWebsiteController($routeParams, $location, WebsiteService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.deleteWebsite = deleteWebsite;

    function init() {
      model.websites = WebsiteService.findWebsitesByUser(model.userId);
      model.websites = WebsiteService.findWebsiteById(model.websiteId);
    }
    init();

    function deleteWebsite(websiteId) {
      WebsiteService.deleteWebsite(websiteId);
      $location.url('/user/' + model.userId + '/website');
    }
  }
})();
