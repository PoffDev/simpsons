const mysql = require('mysql');
const bodyParser = require('body-parser')
const express = require('express');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const exphbs = require("express-handlebars");
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

const app = express();
const port = process.env. PORT || 8000;



require('./routes/dataRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(port, function(){
    console.log('app listening on port ' + port)
});