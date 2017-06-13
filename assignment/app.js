var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/webdev';
mongoose.Promise = require('q').Promise;

if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds137291.mlab.com:37291/heroku_tlmqrq0t';
}

mongoose.connect(connectionString);

require('./services/user.service.server');
require('./services/website.service.server');
require('./services/page.service.server');
require('./services/widget.service.server');
