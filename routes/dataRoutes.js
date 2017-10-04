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

    // connection.query("SELECT * FROM `Episodes` WHERE ?", { season: 2 }, function(err, results){

    //     console.log('Got results', results)
    // });
})

module.exports = function(app){

    app.get('/season/:number', function(req, res){

        let seasonSearched = req.params.number;
        console.log('season selected: '+ seasonSearched)

        connection.query("SELECT * FROM `Episodes` WHERE ?", {
            season: seasonSearched,
        }, function(error, response){
            console.log('results', response);
        })
    })
}