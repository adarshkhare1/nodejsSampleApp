var express = require('express');
var router = express.Router();
var headerMenuItems = require('../public/javascripts/topNavigation').headerMenuItems;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var routeName = "About";
  res.render('index', { title: 'About' 
                    , headerMenuItems: headerMenuItems
                    , activePage:routeName});
});

module.exports = router;
