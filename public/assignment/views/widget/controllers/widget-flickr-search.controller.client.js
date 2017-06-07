(function() {
  angular
    .module("WebAppMaker")
    .controller("FlickrController", FlickrController);

  function FlickrController($routeParams, FlickrService, WidgetService, $location) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetId = $routeParams['widgetId'];
    model.searchPhotos = searchPhotos;
    model.selectPhoto = selectPhoto;

    function searchPhotos(searchTerm) {
      FlickrService
        .searchPhotos(searchTerm)
        .then(function(response) {
          data = response.data.replace("jsonFlickrApi(", "");
          data = data.substring(0, data.length - 1);
          data = JSON.parse(data);
          model.photos = data.photos;
        });
    }

    function selectPhoto(photo) {
      var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
      url += "/" + photo.id + "_" + photo.secret + "_b.jpg";

      WidgetService
        .findWidgetById(model.widgetId)
        .then(function(widget) {
          widget.url = url;
          WidgetService
            .updateWidget(model.widgetId, widget)
            .then(function() {
              $location.url('/user/' + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
            });
        });
    }
  }
})();
