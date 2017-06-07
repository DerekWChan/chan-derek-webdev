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
      PageService
        .findAllPagesForWebsite(model.websiteId)
        .then(function(pages) {
          model.pages = pages;
        });

      PageService
        .findPageById(model.pageId)
        .then(function() {
          model.pages = pages;
        });
    }
    init();

    function updatePage(page) {
      PageService
        .updatePage(model.pageId, page)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }

    function deletePage(pageId) {
      PageService
        .deletePage(pageId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }
  }
})();
