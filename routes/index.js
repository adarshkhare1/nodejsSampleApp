var express = require('express');
var router = express.Router();
var headerMenuItems = require('../public/javascripts/topNavigation').headerMenuItems;

/* GET home page. */
router.get('/', function(req, res, next) {
  var routeName = "Home";
  res.render('index', { title: 'Agile Dashboard - Home' 
                    , headerMenuItems: headerMenuItems
                    , activePage:routeName});
});

module.exports = router;
