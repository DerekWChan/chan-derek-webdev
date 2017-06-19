(function() {
  angular
    .module("WebAppMaker")
    .controller("widgetEditController", widgetEditController);

  function widgetEditController($routeParams, $location, widgetService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetId = $routeParams['widgetId'];
    model.getWidgetEditUrl = getWidgetEditUrl;
    model.updateWidget = updateWidget;
    model.deleteWidget = deleteWidget;

    function init() {
      widgetService
        .findWidgetById(model.widgetId)
        .then(function(widgets) {
          model.widgets = widgets;
        });
    }
    init();

    function getWidgetEditUrl(widget) {
      console.log(widget);
      var url = 'views/widget/editors/widget-' + widget.toLowerCase() + '-edit.view.client.html';
      return url;
    }

    function updateWidget(widget) {
      if (widget.name === '' || widget.name === null || typeof widget.name === 'undefined') {
        model.message = "Please enter a widget name.";
        return model.message;
      }

      widgetService
        .updateWidget(model.widgetId, widget)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
        });
    }

    function deleteWidget(widget) {
      widgetService
        .deleteWidget(model.widgetId)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
        });
    }
  }
})();
