var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
var app = express();

//CRUD on each
//get fermentables
app.get('/burrhurr/fermentables',(req,res)=>{});
app.put('/burrhurr/fermentables',(req,res)=>{});
app.post('/burrhurr/fermentables',(req,res)=>{});
app.delete('/burrhurr/fermentables',(req,res)=>{});
// get hops
app.get('/burrhurr/hops',(req,res)=>{});
app.put('/burrhurr/hops',(req,res)=>{});
app.post('/burrhurr/hops',(req,res)=>{});
app.delete('/burrhurr/hops',(req,res)=>{});

// get yeasts
app.get('/burrhurr/yeasts',(req,res)=>{});
app.put('/burrhurr/yeasts',(req,res)=>{});
app.post('/burrhurr/yeasts',(req,res)=>{});
app.delete('/burrhurr/yeasts',(req,res)=>{});

// get recipes
app.get('/burrhurr/recipes',(req,res)=>{});
app.put('/burrhurr/recipes',(req,res)=>{});
app.post('/burrhurr/recipes',(req,res)=>{});
app.delete('/burrhurr/recipes',(req,res)=>{});

// get carbonation
app.get('/burrhurr/carbonation',(req,res)=>{});
app.put('/burrhurr/carbonation',(req,res)=>{});
app.post('/burrhurr/carbonation',(req,res)=>{});
app.delete('/burrhurr/carbonation',(req,res)=>{});

// get style
app.get('/burrhurr/style',(req,res)=>{});
app.put('/burrhurr/style',(req,res)=>{});
app.post('/burrhurr/style',(req,res)=>{});
app.delete('/burrhurr/style',(req,res)=>{});

// get equipment
app.get('/burrhurr/equipment',(req,res)=>{});
app.put('/burrhurr/equipment',(req,res)=>{});
app.post('/burrhurr/equipment',(req,res)=>{});
app.delete('/burrhurr/equipment',(req,res)=>{});

// get water profiles
app.get('/burrhurr/waterprofiles',(req,res)=>{});
app.put('/burrhurr/waterprofiles',(req,res)=>{});
app.post('/burrhurr/waterprofiles',(req,res)=>{});
app.delete('/burrhurr/waterprofiles',(req,res)=>{});

// get fermentation profiles
app.get('/burrhurr/fermentationprofiles',(req,res)=>{});
app.put('/burrhurr/fermentationprofiles',(req,res)=>{});
app.post('/burrhurr/fermentationprofiles',(req,res)=>{});
app.delete('/burrhurr/fermentationprofiles',(req,res)=>{});

// get carbonation profiles
app.get('/burrhurr/carbonationprofiles',(req,res)=>{});
app.put('/burrhurr/carbonationprofiles',(req,res)=>{});
app.post('/burrhurr/carbonationprofiles',(req,res)=>{});
app.delete('/burrhurr/carbonationprofiles',(req,res)=>{});

// get mash profiles
app.get('/burrhurr/mashprofiles',(req,res)=>{});
app.put('/burrhurr/mashprofiles',(req,res)=>{});
app.post('/burrhurr/mashprofiles',(req,res)=>{});
app.delete('/burrhurr/mashprofiles',(req,res)=>{});


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

