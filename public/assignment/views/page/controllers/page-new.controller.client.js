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
      model.pages = PageService.findPageByWebsiteId(model.websiteId);
    }
    init();

    function createPage(page) {
      PageService.createPage(model.websiteId, page);
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
    }
  }
})();
