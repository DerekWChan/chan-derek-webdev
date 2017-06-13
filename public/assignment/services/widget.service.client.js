(function() {
  angular
    .module('WebAppMaker')
    .factory('widgetService', widgetService);

  function widgetService($http) {
    var api = {
      createWidget: createWidget,
      findAllWidgetsForPage: findAllWidgetsForPage,
      findWidgetById: findWidgetById,
      updateWidget: updateWidget,
      deleteWidget: deleteWidget,
      sortWidget: sortWidget
    };
    return api;

    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    function createWidget(pageId, widget) {
      var url = "/api/assignment/page/" + pageId + "/widget";
      return $http.post(url, widget)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    function findAllWidgetsForPage(pageId) {
      var url = "/api/assignment/page/" + pageId + "/widget";
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    function findWidgetById(widgetId) {
      var url = "/api/assignment/widget/" + widgetId;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // updates the widget in local widgets array whose _id matches the widgetId parameter
    function updateWidget(widgetId, widget) {
      var url = "/api/assignment/widget/" + widgetId;
      return $http.put(url, widget)
        .then(function(response) {
          return response.data;
        });
    }

    // removes the widget from local widgets array whose _id matches the widgetId parameter
    function deleteWidget(widgetId) {
      var url = "/api/assignment/page/" + pageId + "/widget/" + widgetId;
      return $http.delete(url)
        .then(function(response) {
          return response.data;
        });
    }

    function sortWidget(initial, final, pageId) {
      var url = "/api/assignment/page/" + pageId + "/widget?initial=" + initial + "&final=" + final;
      $http.put(url);
    }
  }
})();
