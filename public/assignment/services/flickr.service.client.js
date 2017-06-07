(function() {
  angular
    .module('WebAppMaker')
    .factory('FlickrService', FlickrService);

  function FlickrService($http) {
    this.searchPhotos = searchPhotos;
    var key = "cf3dd455ab304d7f1dd12917f0c47933";
    var secret = "02d88711c2fcdf0a";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function searchPhotos(searchTerm) {
      var url = urlBase
        .replace("API_KEY", key)
        .replace("TEXT", searchTerm);
      return $http.get(url);
    }
  }
})();
