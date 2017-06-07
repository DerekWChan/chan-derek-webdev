var app = require('../../express');
var widgets = [{
    "_id": "123",
    "widgetType": "HEADING",
    "pageId": "321",
    "size": 2,
    "text": "GIZMODO"
  },
  {
    "_id": "234",
    "widgetType": "HEADING",
    "pageId": "321",
    "size": 4,
    "text": "Lorem ipsum"
  },
  {
    "_id": "345",
    "widgetType": "IMAGE",
    "pageId": "321",
    "width": "100%",
    "url": "http://lorempixel.com/400/200/"
  },
  {
    "_id": "456",
    "widgetType": "HTML",
    "pageId": "321",
    "text": "<p>Lorem ipsum</p>"
  },
  {
    "_id": "567",
    "widgetType": "HEADING",
    "pageId": "321",
    "size": 4,
    "text": "Lorem ipsum"
  },
  {
    "_id": "678",
    "widgetType": "YOUTUBE",
    "pageId": "321",
    "width": "100%",
    "url": "https://youtu.be/AM2Ivdi9c4E"
  },
  {
    "_id": "789",
    "widgetType": "HTML",
    "pageId": "321",
    "text": "<p>Lorem ipsum</p>"
  }
];

app.post('/api/assignment/page/:pageId/widget', createWidget);
app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/widget/:widgetId', deleteWidget);

function createWidget(req, res) {
  var pageId = req.params.pageId;
  var widget = req.body;

  widget._id = (new Date()).getTime() + "";
  widget.pageId = pageId;
  widgets.push(widget);
  res.json(widget);
}

function findAllWidgetsForPage(req, res) {
  var pageId = req.params.pageId;
  var results = [];

  for(i = 0; i < widgets.length; i++) {
    if(widgets[i].pageId === pageId) {
      results.push(widgets[i]);
    }
  }
  res.json(results);
}

function findWidgetById(req, res) {
  var widgetId = req.params.widgetId;

  for(i = 0; i < widgets.length; i++) {
    if(widgets[i]._id === widgetId) {
      res.json(widgets[i]);
    }
  }
}

function updateWidget(req, res) {
  var widgetId = req.params.widgetId;
  var widget = req.body;

  for(i = 0; i < widgets.length; i++) {
    if(widgets[i]._id === widgetId) {
      widgets[i] = widget;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function deleteWidget(req, res) {
  var widgetId = req.params.widgetId;

  for(i = 0; i < widgets.length; i++) {
    if(widgets[i]._id === widgetId) {
      widgets.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}
