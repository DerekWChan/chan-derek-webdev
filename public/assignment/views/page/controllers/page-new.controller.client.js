(function() {
  angular
    .module("WebAppMaker")
    .controller("NewPageController", NewPageController);

  function NewPageController($routeParams, $location, PageService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.createPage = createPage;

    function init() {
      PageService
        .findAllPagesForWebsite(model.websiteId)
        .then(function() {
          model.pages = pages;
        });
    }
    init();

    function createPage(page) {
      PageService
        .createPage(model.websiteId, page)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }
  }
})();
