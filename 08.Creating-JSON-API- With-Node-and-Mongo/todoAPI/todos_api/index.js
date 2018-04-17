/**
 * 
 * app < is getter variable declaration to execute 
 * 
 */


var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');




var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.send("HELLO FROM THE ROOT ROUTE")
});

app.use('/api/todos', todoRoutes);


/*
app.get('/', function(req, res) {
    res.send('HI THERE FROM EXPRESS!!');

});

app.get('/send', function(req, res) {
    res.send({messange: "HI THERE THIS IS res FROM 'SEND '"});
});

app.get('/json', function(req, res) {
    res.json({message: "HI THIS IS res FROM 'JSON'"});
});

**/


app.listen(port, function() {
    console.log("APP IS RUNNING" + port);
});