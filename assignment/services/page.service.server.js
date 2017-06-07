var app = require('../../express');
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
];

app.post('/api/assignment/website/:websiteId/page', createPage);
app.get('/api/assignment/website/:websiteId/page', findAllPagesForWebsite);
app.get('/api/assignment/page/:pageId', findPageById);
app.put('/api/assignment/page/:pageId', updatePage);
app.delete('/api/assignment/page/:pageId', deletePage);

function createPage(req, res) {
  var page = req.body;

  page._id = (new Date()).getTime() + "";
  page.websiteId = websiteId;
  pages.push(page);
  res.json(page);
}

function findAllPagesForWebsite(req, res) {
  var websiteId = req.params.websiteId;
  var results = [];

  for(i = 0; i < pages.length; i++) {
    if(pages[i].websiteId == websiteId) {
      results.push(pages[i]);
    }
  }
  res.json(results);
}

function findPageById(req, res) {
  var pageId = req.params.pageId;

  for(i = 0; i < pages.length; i++) {
    if(pages[i]._id == pageId) {
      res.json(pages[i]);
      return;
    }
  }
  res.json(404);
}

function updatePage(req, res) {
  var pageId = req.params.pageId;
  var page = req.body;

  for(i = 0; i < pages.length; i++) {
    if(pages[i]._id == pageId) {
      pages[i] = page;
      res.sendStatus(200)
      return;
    }
  }
  res.sendStatus(404);
}

function deletePage(req, res) {
  var pageId = req.params.pageId;
  
  for(i = 0; i < pages.length; i++) {
    if(pages[i]._id == pageId) {
      pages.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}
