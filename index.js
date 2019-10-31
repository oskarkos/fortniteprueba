var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

var uri = "https://api.fortnitetracker.com/v1/profile/";

//API KEY: e99764f3-2004-45d4-834d-ce8354c85fee

app.post('/', function(req, res){
    console.log(req.body);
    request.get(uri + req.body.platformSelection + '/' + req.body.nickName, {
        headers:{
            'TRN-Api-Key': 'e99764f3-2004-45d4-834d-ce8354c85fee'
        }
    }, function (error, response, body) {
            console.log(body);
            res.json(body);
    });
});

var port = process.env.PORT || 3000;

app.listen(port);