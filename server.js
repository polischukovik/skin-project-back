var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var products = require('./goods')

var cors = require('./cors')

app.use(bodyParser.json());
app.use(cors)

app.get('/api/products', (req,res) => {
	console.log(products)
	res.status(200).send(products)
})

var server = app.listen(5000, () => {
    console.log('listening on port', server.address().port)
})