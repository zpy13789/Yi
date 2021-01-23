var express = require('express');
var router = express.Router();

// 
let User = require('../models/user')

// let User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 
router.post('/addUser', (req, res, next) => {

  console.log(req.body);


  let userInfo = {
    userName: req.body.userName,
    password: req.body.password,
    passwords: req.body.passwords,
  }

  let userI = new User(userInfo)


  userI.save((err,result) =>{
    if (!err) {
      res.send(result)
    }
  })
});

module.exports = router;
