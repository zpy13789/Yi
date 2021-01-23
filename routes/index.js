var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
// 
router.get('/index', function(req, res, next) {
  res.render('index',{});
  // res.send('ok')
});
// 
router.get('/register', function(req, res, next) {
  res.render('register',{});
  // res.send('ok')
});
// 
router.get('/artice', function(req, res, next) {
  res.render('artice',{});
  // res.send('ok')
});
router.get('/Addarticle', function(req, res, next) {
  res.render('Addarticle',{});
  // res.send('ok')
});
module.exports = router;
