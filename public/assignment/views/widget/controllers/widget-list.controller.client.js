(function() {
  angular
    .module("WebAppMaker")
    .controller("WidgetListController", WidgetListController);

  function WidgetListController($routeParams, WidgetService, $sce) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];

    function init() {
      model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
    }
    init();

    model.getWidgetUrlForType = getWidgetUrlForType;
    model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
    model.trustThisContent = trustThisContent;

    function getWidgetUrlForType(type) {
      return 'views/widget/templates/widget-' + type.toLowerCase() + '.view.client.html';
    }

    function getYouTubeEmbedUrl(youTubeLink) {
      var embedUrl = 'https://www.youtube.com/embed/';
      var youTubeLinkParts = youTubeLink.split('/');
      var id = youTubeLinkParts[youTubeLinkParts.length - 1];
      embedUrl += id;
      console.log(embedUrl);
      return $sce.trustAsResourceUrl(embedUrl);
    }

    function trustThisContent(html) {
      return $sce.trustAsHtml(html);
    }
  }
})();
