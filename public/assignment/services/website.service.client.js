(function() {
  angular
    .module('WebAppMaker')
    .factory('WebsiteService', WebsiteService);

  function WebsiteService() {
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
      "findWebsitesByUser": findWebsitesByUser,
      "findWebsiteById": findWebsiteById,
      "updateWebsite": updateWebsite,
      "deleteWebsite": deleteWebsite
    };
    return api;

    // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
    function createWebsite(website) {
      website._id = (new Date()).getTime() + "";
      websites.push(website);
    }

    // retrieves the websites in local websites array whose developerId matches the parameter userId
    function findWebsitesByUser(userId) {
      var results = [];
      for (i = 0; i < websites.length; i++) {
        if (websites[i].developerId === userId) {
          results.push(websites[i]);
        }
      }
      return results;
    }

    // retrieves the website in local websites array whose _id matches the websiteId parameter
    function findWebsiteById(websiteId) {
      for (i = 0; i < websites.length; i++) {
        if (websites[i]._id === websiteId) {
          return websites[i];
        }
      }
    }

    // updates the website in local websites array whose _id matches the websiteId parameter
    function updateWebsite(websiteId, website) {
      for (i = 0; i < websites.length; i++) {
        if (websites[i]._id === websiteId) {
          websites[i] = website;
        }
      }
    }

    // removes the website from local websites array whose _id matches the websiteId parameter
    function deleteWebsite(websiteId) {
      for (i = 0; i < websites.length; i++) {
        if (websites[i]._id === websiteId) {
          websites.splice(i, 1);
        }
      }
    }
  }
})();