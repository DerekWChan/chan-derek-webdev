(function() {
  angular
    .module("WebAppMaker")
    .controller("flickrController", flickrController);

  function flickrController($routeParams, flickrService, widgetService, $location) {
    var model = this;
    model.userId = $routeParams['userId'];
    model.websiteId = $routeParams['websiteId'];
    model.pageId = $routeParams['pageId'];
    model.widgetId = $routeParams['widgetId'];
    model.searchPhotos = searchPhotos;
    model.selectPhoto = selectPhoto;

    function searchPhotos(searchTerm) {
      flickrService
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

      widgetService
        .findWidgetById(model.widgetId)
        .then(function(widget) {
          widget.url = url;
          widgetService
            .updateWidget(model.widgetId, widget)
            .then(function() {
              $location.url('/user/' + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
            });
        });
    }
  }
})();
