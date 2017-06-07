(function() {
  angular
    .module('WebAppMaker')
    .directive('WbdvSortable', WbdvSortable);

    function WbdvSortable() {
      function linkFunction(scope, element) {
        var initialIndex = -1;
        var finalIndex = -1;
        element.sortable({
          start: function(event, ui) {
            initialIndex = $(ui.item).index();
          },
          stop: function(event, ui) {
            finalIndex = $(ui.item).index();
            scope.SortWidgetController.sort(initialIndex, finalIndex);
          },
          axis: 'y'
        });
      }

      return {
        scope: {},
        link: linkFunction,
        controller: SortWidgetController,
        controllerAs: 'SortWidgetController'
      }
    }

    function SortWidgetController(WidgetService, $routeParams) {
      var model = this;
      model.pageId = $routeParams['pageId'];
      model.sort = sort;

      function sort(initialIndex, finalIndex) {
        WidgetService.sortWidget(initial, final, model.pageId);
      }
    }
  })();
