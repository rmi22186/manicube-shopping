var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.set('port', 3000);
module.exports = app;

var server = app.listen(app.get('port'), function() {
  console.log('express server listening on port ' + server.address().port);
});
