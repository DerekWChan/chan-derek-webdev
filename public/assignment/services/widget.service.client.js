(function() {
  angular
    .module('WebAppMaker')
    .factory('WidgetService', WidgetService);

  function WidgetService() {
    var widgets = [{
        "_id": "123",
        "widgetType": "HEADING",
        "pageId": "321",
        "size": 2,
        "text": "GIZMODO"
      },
      {
        "_id": "234",
        "widgetType": "HEADING",
        "pageId": "321",
        "size": 4,
        "text": "Lorem ipsum"
      },
      {
        "_id": "345",
        "widgetType": "IMAGE",
        "pageId": "321",
        "width": "100%",
        "url": "http://lorempixel.com/400/200/"
      },
      {
        "_id": "456",
        "widgetType": "HTML",
        "pageId": "321",
        "text": "<p>Lorem ipsum</p>"
      },
      {
        "_id": "567",
        "widgetType": "HEADING",
        "pageId": "321",
        "size": 4,
        "text": "Lorem ipsum"
      },
      {
        "_id": "678",
        "widgetType": "YOUTUBE",
        "pageId": "321",
        "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
      },
      {
        "_id": "789",
        "widgetType": "HTML",
        "pageId": "321",
        "text": "<p>Lorem ipsum</p>"
      }
    ]
    var api = {
      "createWidget": createWidget,
      "findWidgetsByPageId": findWidgetsByPageId,
      "findWidgetById": findWidgetById,
      "updateWidget": updateWidget,
      "deleteWidget": deleteWidget
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
    function findWidgetsByPageId(pageId) {
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
      var url = "/api/assignment/widget/" + widgetId;
      return $http.delete(url)
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
