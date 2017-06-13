var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model('websiteModel', websiteSchema);
var userModel = require('../user/user.model.server');

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

websiteModel.addPage = addPage;
websiteModel.deletePage = deletePage;

module.exports = websiteModel;

// Creates a new website instance for user whose _id is userId
function createWebsiteForUser(userId, website) {
  website._user = userId;
  return websiteModel
    .create(website)
    .then(function(website) {
      return userModel
        .addWebsite(userId, website._id);
    });
}

// Retrieves all website instances for user whose  _id is userId
function findAllWebsitesForUser(userId) {
  return websiteModel
    .find({
      _user: userId
    })
    .populate('_user', 'username')
    .exec();
}

// Retrieves single website instance whose _id is websiteId
function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}

// Updates website instance whose _id is websiteId
function updateWebsite(websiteId, website) {
  return websiteModel.update({
    _id: websiteId
  }, {
    $set: website
  });
}

// Removes website instance whose _id is websiteId
function deleteWebsite(userId, websiteId) {
  return websiteModel
    .remove({
      _id: websiteId
    })
    .then(function(status) {
      return userModel
        .deleteWebsite(userId, websiteId);
    });
}

function addPage(websiteId, pageId) {
  return websiteModel
    .findById(websiteId)
    .then(function(website) {
      website.pages.push(pageId);
      return website.save();
    });
}

function deletePage(websiteId, pageId) {
  return websiteModel
    .findById(websiteId)
    .then(function(website) {
      var index = website.pages.indexOf(pageId);
      website.pages.splice(index, 1);
      return website.save();
    });
}
