(function() {
  angular
    .module('WebAppMaker')
    .controller('pageEditController', pageEditController);

  function pageEditController($routeParams, $location, pageService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.updatePage = updatePage;
    model.deletePage = deletePage;

    function init() {
      pageService
        .findAllPagesForWebsite(model.websiteId)
        .then(function(pages) {
          model.pages = pages;
        });

      pageService
        .findPageById(model.pageId)
        .then(function(page) {
          model.page = page;
        });
    }
    init();

    function updatePage(page) {
      pageService
        .updatePage(model.pageId, page)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }

    function deletePage(pageId) {
      pageService
        .deletePage(pageId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }
  }
})();
