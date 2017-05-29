(function() {
  angular
    .module("WebAppMaker")
    .controller("EditWidgetController", EditWidgetController);

  function EditWidgetController($routeParams, $location, WidgetService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetId = $routeParams['widgetId'];
    model.getWidgetEditUrlForType = getWidgetEditUrlForType;

    function init() {
      model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
      model.widgets = WidgetService.findWidgetById(model.widgetId);
    }
    init();

    function getWidgetEditUrl(widget) {
      var url = 'views/widget/templates/widget-' + widget.widgetType.toLowerCase() + '-edit.view.client.html';
      return url;
    }

    function deleteWidget(widgetId) {
      WidgetService.deleteWidget(model.widgetId);
      $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
    }
  }
})();
