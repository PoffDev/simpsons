const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'Simpsons'
});

connection.connect( function(error){
    if (error) throw err

    console.log('mySQL connected as id: ' + connection.threadId);
})

module.exports = function(app){

    app.get('/', function(req, res){

        res.render("index");
    })

    app.get('/season/:number', function(req, res){

        let seasonSearched = req.params.number;
        connection.query("SELECT * FROM `Episodes` WHERE ? ORDER BY `number_in_season`", { season: seasonSearched}, function(error, response){

            if (error) throw error;
            res.render("index", {
                Episodes: response
            })

        })
    })
}