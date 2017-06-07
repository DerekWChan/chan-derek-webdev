(function() {
  angular
    .module("WebAppMaker")
    .controller("WidgetListController", WidgetListController);

  function WidgetListController($routeParams, WidgetService, $sce) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.trustThisContent = trustThisContent;
    model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
    model.getWidgetUrlForType = getWidgetUrlForType;

    function init() {
      WidgetService
        .findAllWidgetsForPage(model.pageId)
        .then(function(widgets) {
          model.widgets = widgets;
        });
    }
    init();

    function trustThisContent(html) {
      return $sce.trustAsHtml(html);
    }

    function getYouTubeEmbedUrl(youTubeLink) {
      var embedUrl = 'https://www.youtube.com/embed/';
      var youTubeLinkParts = youTubeLink.split('/');
      var id = youTubeLinkParts[youTubeLinkParts.length - 1];
      embedUrl += id;
      return $sce.trustAsResourceUrl(embedUrl);
    }

    function getWidgetUrlForType(widget) {
      var url = 'views/widget/templates/widget-' + widget.toLowerCase() + '.view.client.html';
      return url;
    }
  }
})();
