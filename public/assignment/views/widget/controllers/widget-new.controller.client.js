(function() {
  angular
    .module("WebAppMaker")
    .controller("NewWidgetController", NewWidgetController);

  function NewWidgetController($routeParams, WidgetService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];

    function init() {
      model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
    }
    init();
  }
})();
