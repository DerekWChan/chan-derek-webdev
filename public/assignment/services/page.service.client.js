(function() {
  angular
    .module('WebAppMaker')
    .factory('PageService', PageService);

  function PageService($http) {
    var pages = [{
        "_id": "321",
        "name": "Post 1",
        "websiteId": "456",
        "description": "Lorem"
      },
      {
        "_id": "432",
        "name": "Post 2",
        "websiteId": "456",
        "description": "Lorem"
      },
      {
        "_id": "543",
        "name": "Post 3",
        "websiteId": "456",
        "description": "Lorem"
      }
    ]
    var api = {
      "createPage": createPage,
      "findAllPagesForWebsite": findAllPagesForWebsite,
      "findPageById": findPageById,
      "updatePage": updatePage,
      "deletePage": deletePage
    };
    return api;

    // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    function createPage(page, websiteId) {
      var url = "/api/assignment/website/" + websiteId + "/page";
      return $http.post(url, page)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    function findAllPagesForWebsite(websiteId) {
      var url = "/api/assignment/website/" + websiteId + "/page";
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the page in local pages array whose _id matches the pageId parameter
    function findPageById(pageId) {
      var url = "/api/assignment/page/" + pageId;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // updates the page in local pages array whose _id matches the pageId parameter
    function updatePage(pageId, page) {
      var url = "/api/assignment/page/" + pageId;
      return $http.put(url, newPage)
        .then(function(response) {
          return response.data;
        });
    }

    // removes the page from local pages array whose _id matches the pageId parameter
    function deletePage(pageId) {
      var url = "/api/assignment/page/" + pageId;
      return $http.delete(url)
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
