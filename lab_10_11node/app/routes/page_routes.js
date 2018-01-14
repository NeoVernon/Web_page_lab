var ObjectID = require('mongodb').ObjectID;
var _dirname = 'C:/lab_10_11node';
module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
  });
    app.get('/index.html', (req, res) => {
    res.sendFile(_dirname + '/index.html');
  });
  app.get('/Admin.html', (req, res) => {
    res.sendFile(_dirname + '/Admin.html');
  });
  app.get('/reviews.html', (req, res) => {
    res.sendFile(_dirname + '/reviews.html');
  });

  app.get('/new.html', (req, res) => {
    res.sendFile(_dirname + '/new.html');
  });
  app.get('/educational.html', (req, res) => {
    res.sendFile(_dirname + '/educational.html');
  });

};