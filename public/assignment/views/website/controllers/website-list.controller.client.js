(function() {
  angular
    .module("WebAppMaker")
    .controller("WebsiteListController", WebsiteListController);

  function WebsiteListController($routeParams, WebsiteService) {
    var model = this;
    model.userId = $routeParams['userId'];

    function init() {
      WebsiteService
        .findAllWebsitesForUser(model.userId)
        .then(function() {
          model.websites = websites;
        });
    }
    init();
  }
})();
