const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();
const port = process.env. PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

require('./routes/dataRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(port, function(){
    console.log('app listening on port ' + port)
});