(function() {
  angular
    .module("WebAppMaker")
    .controller("PageListController", PageListController);

  function PageListController($routeParams, PageService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];

    function init() {
      PageService
        .findAllPagesForWebsite(model.websiteId)
        .then(function() {
          model.pages = pages;
        });
    }
    init();
  }
})();
