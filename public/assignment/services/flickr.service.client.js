(function() {
  angular
    .module('WebAppMaker')
    .factory('flickrService', flickrService);

  function flickrService($http) {
    var key = "cf3dd455ab304d7f1dd12917f0c47933";
    var secret = "02d88711c2fcdf0a";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
    var api = {
      searchPhotos: searchPhotos
    };

    return api;

    function searchPhotos(searchTerm) {
      var url = urlBase
        .replace("API_KEY", key)
        .replace("TEXT", searchTerm);
      return $http.get(url);
    }
  }
})();
