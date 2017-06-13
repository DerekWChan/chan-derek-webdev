var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model('widgetModel', widgetSchema);
var pageModel = require('../page/page.model.server');

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = pageModel;

// Creates new widget instance for parent page whose _id is pageId
function createWidget(pageId, widget) {
  widget._page = pageId;
  return widgetModel
    .create(widget)
    .then(function(widget) {
      return pageModel
        .addWidget(pageId, widget._id)
    })
}

// Retrieves all widgets for parent page whose _id is pageId
function findAllWidgetsForPage(pageId) {
  return pageModel
    .findPageById(pageId)
    .then(function(page) {
      return page.widgets;
    });
}

// Retrieves widget whose _id is widgetId
function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

// Updates widget whose _id is widgetId
function updateWidget(widgetId, widget) {
  return widgetModel.update({
    _id: widgetId
  }, {
    $set: widget
  });
}

// Removes widget whose _id is widgetId
function deleteWidget(widgetId) {
  return widgetModel
    .remove({
      _id: widgetId
    })
    .then(function(status) {
      return pageModel
        .deleteWidget(pageId, widgetId);
    });
}

// Modifies the order of widget at position start into final position end in page whose _id is pageId
function reorderWidget(pageId, start, end) {
  return pageModel
    .findPageById(pageId)
    .then(function(page) {
      var widgets = page.widgets;
      widgets.splice(end - 1, 0, widgets.splice(start - 1, 1)[0]);
      page.widgets = widgets;

      return pageModel
        .updatePage(page, pageId);
    })
}
