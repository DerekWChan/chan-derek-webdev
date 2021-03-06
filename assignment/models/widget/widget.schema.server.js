var mongoose = require('mongoose');

var widgetSchema = mongoose.Schema({
  _page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pageModel"
  },
  type: {
    type: String,
    enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']
  },
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deleteable: Boolean,
  formatted: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
}, {
  collection: "webappmaker_widget"
});

module.exports = widgetSchema;
