const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mondo = require('./myapp api/DB.config/db')
const myapp = require('./myapp api/routes/routes');
var app = express();
var http = require('http');
var httpServer = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// passport.use(new LdapStrategy(OPTS));
// app.use(passport.initialize());
app.use('/userdetails',myapp);
httpServer.listen(3002, function() {
    console.log('HTTP server listening on port ' + 3002);
   })  ;
  