(function() {
  angular
    .module("WebAppMaker")
    .controller("widgetNewController", widgetNewController);

  function widgetNewController($location, $routeParams, widgetService) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetId = $routeParams['widgetId'];
    model.widgetType = $routeParams['widgetType'];
    model.getWidgetEditUrl = getWidgetEditUrl;
    model.updateWidget = updateWidget;
    model.showWidgetPage = showWidgetPage;

    function init() {
      model.widgets = {
        'widgetType': model.widgetType
      };
    }
    init();

    function getWidgetEditUrl(widget) {
      var url = 'views/widget/templates/widget-' + widget.toLowerCase() + '-edit.view.client.html';
      return url;
    }

    function updateWidget(widget) {
      var widgets = {
        _id: model.widgetId,
        widgetType: model.widgetType,
        pageId: model.pageId,
        size: widget.size,
        text: widget.text,
        width: widget.width,
        url: widget.url
      };

      widgetService
        .updateWidget(model.widgetId, widgets)
        .then(function() {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
        });
    }

    function showWidgetPage(widgetType) {
      var widget = {
        widgetType: widgetType
      };
      console.log(model.pageId);
      widgetService
        .createWidget(model.pageId, widget)
        .then(function(widget) {
          $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget/new/' + widgetType.toLowerCase() + "/" + widget._id);
        });
    }
  }
})();
