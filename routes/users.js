var express = require('express');
var router = express.Router();
var headerMenuItems = require('../public/javascripts/topNavigation').headerMenuItems;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var routeName = "Users";
  res.render('users', { title: 'Users' 
                    , headerMenuItems: headerMenuItems
                    , activePage:routeName});
});



module.exports = router;
