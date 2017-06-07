(function() {
  angular
    .module('WebAppMaker')
    .factory('WebsiteService', WebsiteService);

  function WebsiteService($http) {
    var websites = [{
        "_id": "123",
        "name": "Facebook",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "234",
        "name": "Tweeter",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "456",
        "name": "Gizmodo",
        "developerId": "456",
        "description": "Lorem"
      },
      {
        "_id": "890",
        "name": "Go",
        "developerId": "123",
        "description": "Lorem"
      },
      {
        "_id": "567",
        "name": "Tic Tac Toe",
        "developerId": "123",
        "description": "Lorem"
      },
      {
        "_id": "678",
        "name": "Checkers",
        "developerId": "123",
        "description": "Lorem"
      },
      {
        "_id": "789",
        "name": "Chess",
        "developerId": "234",
        "description": "Lorem"
      }
    ];
    var api = {
      "createWebsite": createWebsite,
      "findAllWebsitesForUser": findAllWebsitesForUser,
      "findWebsiteById": findWebsiteById,
      "updateWebsite": updateWebsite,
      "deleteWebsite": deleteWebsite
    };
    return api;

    // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
    function createWebsite(website, userId) {
      var url = "/api/assignment/user/" + userId + "/website";
      return $http.post(url, website)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the websites in local websites array whose developerId matches the parameter userId
    function findAllWebsitesForUser(userId) {
      var url = "/api/assignment/user/" + userId + "/website";
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // retrieves the website in local websites array whose _id matches the websiteId parameter
    function findWebsiteById(websiteId) {
      var url = "/api/assignment/website/" + websiteId;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    // updates the website in local websites array whose _id matches the websiteId parameter
    function updateWebsite(websiteId, website) {
      var url = "/api/assignment/website/" + websiteId;
      return $http.put(url, website)
        .then(function(response) {
          return response.data;
        });
    }

    // removes the website from local websites array whose _id matches the websiteId parameter
    function deleteWebsite(websiteId) {
      var url = "/api/assignment/website/" + websiteId;
      return $http.delete(url)
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
