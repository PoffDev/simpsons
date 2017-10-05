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

        connection.query("SELECT * FROM Episodes WHERE ? ORDER BY `number_in_season`", { 
            season: seasonSearched
        }, function(error, response){

            if (error) throw error;
            res.render("index", {
                index: response
            })
        })
    })

    app.get('/season/:number/:productionCode', function (req, res){
        let seasonSearched = req.params.number;
        let codeSearched = req.params.productionCode;

        connection.query("SELECT * FROM Episodes WHERE `season`= ? AND `production_code`= ?;", 
            [seasonSearched, codeSearched], function(error, response){

                if (error) throw error;

                res.render("episodes", {
                    episodes: response
                });
            }
        );
    })

    app.get('/quotes/:seriesNumber', function (req, res){
        let searchedNumber = req.params.seriesNumber;

        connection.query('SELECT * FROM `Script` WHERE `episode_id`=? AND `speaking_line`=?', 
            [searchedNumber, 'true'], function(error, response) {

                if (error) throw error;

                res.json(response);
        })
    })
};