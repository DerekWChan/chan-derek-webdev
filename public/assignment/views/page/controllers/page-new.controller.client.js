(function() {
  angular
    .module('WebAppMaker')
    .controller('pageNewController', pageNewController);

  function pageNewController($routeParams, $location, pageService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.createPage = createPage;

    function init() {
      pageService
        .findAllPagesForWebsite(model.websiteId)
        .then(function(pages) {
          model.pages = pages;
        });
    }
    init();

    function createPage(page) {
      if (page.name === '' || page.name === null || typeof page.name === 'undefined') {
        model.message = "Please enter a page name.";
        return model.message;
      }

      page.websiteId = model.websiteId;
      pageService
        .createPage(page, model.websiteId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        });
    }
  }
})();
