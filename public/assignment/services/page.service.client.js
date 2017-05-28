(function() {
    angular
      .module('WebAppMaker')
      .factory('PageService', PageService);

    function PageService() {
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
        "findPageByWebsiteId": findPageByWebsiteId,
        "findPageById": findPageById,
        "updatePage": updatePage,
        "deletePage": deletePage
      };
      return api;

      // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
      function createPage(websiteId, page) {
        page.websiteId = websiteId;
        pages.push(page);
      }

      // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
      function findPageByWebsiteId(websiteId) {
        var results = [];
        for(i = 0; i < pages.length; i++) {
          if(pages[i].websiteId == websiteId) {
            results.push(pages[i]);
          }
        }
        return results;
      }

      // retrieves the page in local pages array whose _id matches the pageId parameter
      function findPageById(pageId) {
        for(i = 0; i < pages.length; i++) {
          if(pages[i]._id == pageId) {
            return pages[i];
          }
        }
      }

      // updates the page in local pages array whose _id matches the pageId parameter
      function updatePage(pageId, page) {
        for(i = 0; i < pages.length; i++) {
          if(pages[i]._id == pageId) {
            pages[i] = page;
          }
        }
      }

      // removes the page from local pages array whose _id matches the pageId parameter
      function deletePage(pageId) {
        for(i = 0; i < pages.length; i++) {
          if(pages[i]._id == pageId) {
            pages.splice(i, 1);
          }
        }
      }
    }
