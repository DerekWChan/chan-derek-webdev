var app = require('../../express');
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

app.post('/api/assignment/user/:userId/website', createWebsite);
app.get('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get('/api/assignment/website/:websiteId', findWebsiteById);
app.put('/api/assignment/website/:websiteId', updateWebsite);
app.delete('/api/assignment/website/:websiteId', deleteWebsite);

function createWebsite(req, res) {
  var website = req.body;

  website._id = (new Date()).getTime() + "";
  websites.push(website);
  res.json(website);
}

function findAllWebsitesForUser(req, res) {
  var userId = req.params.userId;
  var results = [];

  for (i = 0; i < websites.length; i++) {
    if (websites[i].developerId === userId) {
      results.push(websites[i]);
    }
  }
  res.json(results);
}

function findWebsiteById(req, res) {
  var websiteId = req.params.websiteId;

  for (i = 0; i < websites.length; i++) {
    if (websites[i]._id === websiteId) {
      res.json(websites[i]);
      return;
    }
  }
  res.sendStatus(404);
}

function updateWebsite(req, res) {
  var websiteId = req.params.websiteId;
  var website = req.body;

  for (i = 0; i < websites.length; i++) {
    if (websites[i]._id === websiteId) {
      websites[i] = website;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function deleteWebsite(req, res) {
  var websiteId = req.params.websiteId;

  for (i = 0; i < websites.length; i++) {
    if (websites[i]._id === websiteId) {
      websites.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}
