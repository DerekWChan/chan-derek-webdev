var app = require('../../express');
var multer = require('multer');
var upload = multer({
  dest: __dirname + '/../../public/assignment/uploads'
});
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
app.post("/api/assignment/upload", upload.single('myFile'), uploadImage);
app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.put('/api/assignment/page/:pageId/widget', sortWidget);
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

  for (var i in widgets) {
    if (widgets[i].pageId === pageId) {
      results.push(widgets[i]);
    }
  }
  res.json(results);
}

function findWidgetById(req, res) {
  var widgetId = req.params.widgetId;

  for (var i in widgets) {
    if (widgets[i]._id === widgetId) {
      res.json(widgets[i]);
    }
  }
}

function updateWidget(req, res) {
  var widgetId = req.params.widgetId;
  var widget = req.body;

  for (var i in widgets) {
    if (widgets[i]._id === widgetId) {
      widgets[i] = widget;
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function deleteWidget(req, res) {
  var widgetId = req.params.widgetId;

  for (var i in widgets) {
    if (widgets[i]._id === widgetId) {
      widgets.splice(i, 1);
      res.sendStatus(200);
      return;
    }
  }
  res.sendStatus(404);
}

function sortWidget(req, res) {
  var initial = req.query['initial'];
  var final = req.query['final'];
  var pageId = req.params['pageId'];
  var resultWidgets = [];

  for (var i in widgets) {
    if (widgets[i].pageId === pageId) {
      resultWidgets.push(widgets[i]);
    }
  }

  for (i = 0; i < resultWidgets.length; i++) {
    var index = widgets.indexOf(resultWidgets[i]);
    widgets.splice(index, 1);
  }

  resultWidget.splice(final - 1, 0, resultWidgets.splice(initial - 1, 1)[0]);

  for (i = 0; i < resultWidgets.length; i++) {
    widgets.push(resultWidgets[i]);
  }
}

function uploadImage(req, res) {
  var widgetId = req.body.widgetId;
  var width = req.body.width;
  var myFile = req.file;

  var userId = req.body.userId;
  var websiteId = req.body.websiteId;
  var pageId = req.body.pageId;

  var originalname = myFile.originalname;
  var filename = myFile.filename;
  var path = myFile.path;
  var destination = myFile.destination;
  var size = myFile.size;
  var mimetype = myFile.mimetype;

  var widget = getWidgetById(widgetId);
  widget.url = '/assignment/uploads/' + filename;

  var callbackUrl = "/assignment/index.html#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/";

  res.redirect(callbackUrl);

}
