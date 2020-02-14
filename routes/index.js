var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express TEST wow okay...' });
//});

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/wow/', function (req, res, next){
    res.send(`wow wow wowow hi  ${req.query.name}`);
});




module.exports = router;
