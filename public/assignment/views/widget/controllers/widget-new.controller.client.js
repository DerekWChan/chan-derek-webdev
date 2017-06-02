(function() {
  angular
    .module("WebAppMaker")
    .controller("NewWidgetController", NewWidgetController);

  function NewWidgetController($location, $routeParams, WidgetService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetType = $routeParams['widgetType'];
    model.getWidgetEditUrl = getWidgetEditUrl;
    model.createWidget = createWidget;
    model.showWidgetPage = showWidgetPage;

    function init() {
      model.widgets = {'widgetType' : model.widgetType};
    }
    init();

    function getWidgetEditUrl(widget) {
      var url = 'views/widget/templates/widget-' + widget.toLowerCase() + '-edit.view.client.html';
      return url;
    }

    function createWidget(widget) {
      WidgetService.createWidget(model.pageId, widget);
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
    }

    function showWidgetPage(widgetType) {
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget/new/' + widgetType.toLowerCase());
    }
  }
})();
