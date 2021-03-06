var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "websiteModel"
  }],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  facebook: {
    id: String,
    token: String
  },
  google: {
    id: String,
    token: String
  }
}, {
  collection: "webappmaker_user"
});

module.exports = userSchema;
