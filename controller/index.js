var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/lipstick', require('./lipstick'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "We don\'t test on animals!"});
})

module.exports = router;