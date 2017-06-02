(function() {
  angular
    .module("WebAppMaker")
    .controller("EditPageController", EditPageController);

  function EditPageController($routeParams, $location, PageService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.updatePage = updatePage;
    model.deletePage = deletePage;

    function init() {
      model.pages = PageService.findPageByWebsiteId(model.websiteId);
      model.page = PageService.findPageById(model.pageId);
    }
    init();

    function updatePage(page) {
      PageService.updatePage(model.pageId, page);
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
    }

    function deletePage(pageId) {
      PageService.deletePage(pageId);
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
    }
  }
})();
