var express = require('express');
var router = express.Router();
let jwt = require('express-jwt')
let config = require('../config/settings')
let checkToken = jwt({secret: config.secret})

router.get('/', checkToken, function (req, res) {
    res.send('Hi!');
});

router.get('/ping', checkToken, function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
