var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var headerMaunItems = { 'Home': '/home', 'Contact': '/contact', 'About': '/about' };
  res.render('index', { title: 'Agile Dashboard' 
                    , headerMaunItems: headerMaunItems});
});

module.exports = router;
