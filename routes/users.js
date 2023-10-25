var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/computation', function(req, res, next){
  var x = req.x;
  if(!x){
    x = Math.random()*200;
  }
  res.send(`Math.floor(${x}) is: ${Math.floor(x)}`);
});


router.get('/', function(req,res) {
  var sum = 0;
  var more = 0;
  more = more + 1;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
