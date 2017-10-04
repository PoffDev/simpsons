const path = require('path');
const mysql = require('mysql');

module.exports = function(app){

    app.get('/search', function(req, res){

        res.send(
            console.log('hello from /search')
        )
    })
}