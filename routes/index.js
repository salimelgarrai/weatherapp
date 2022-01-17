var express = require('express');
var router = express.Router();

var cityList= [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next){ 
  res.render('weather', {cityList})
});

router.post('/add-city', function(req, res, next){
  var alreadyExist = false;
  
  for(var i=0;i<cityList.length;i++){
    if(req.body.city.toLowerCase() == cityList[i].city.toLowerCase()){
     alreadyExist = true;
    }
  };

   if(alreadyExist == false){
    cityList.push({city: req.body.city,
      temps:"Neige",
      max: 2,
      min: 0.2,});
   }
  res.render('weather', {cityList})
});

router.get('/delete-city', function(req, res, next){
  cityList.splice(req.query.position,1)
  res.render('weather', {cityList})
})
module.exports = router;
