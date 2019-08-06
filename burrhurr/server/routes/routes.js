const router = require('express').Router();
const model = require('../models/models.js');

//get fermentables
router.get('/fermentables',(req,res)=>{
  model.fermentables.get()
  .then(response=>{
    res.json(response)
  })
});
router.put('/fermentables',(req,res)=>{
  // console.log('put fermentables',req.body);
  // model.fermentables.post(req.body)
  // .then(response =>{
  //   console.log(response)
  //   res.end()
  // })
});
router.post('/fermentables',(req,res)=>{
  console.log('post fermentables',req.body);
  model.fermentables.post(req.body)
  .then(response =>{
    console.log(response)
    res.end()
  })
});
router.delete('/fermentables',(req,res)=>{
  console.log('delete:',req.body)
  model.fermentables.delete(req.body.id)
  .then(()=>{
    console.log('successfully deleted record');
    res.end();
  }).catch(err=>{
    console.log('record does not exist');
    res.end();  
  })
});

// get hops
router.get('/hops',(req,res)=>{});
router.put('/hops',(req,res)=>{});
router.post('/hops',(req,res)=>{});
router.delete('/hops',(req,res)=>{});

// get yeasts
router.get('/yeasts',(req,res)=>{});
router.put('/yeasts',(req,res)=>{});
router.post('/yeasts',(req,res)=>{});
router.delete('/yeasts',(req,res)=>{});

// get recipes
router.get('/recipes',(req,res)=>{
  
});
router.put('/recipes',(req,res)=>{});
router.post('/recipes',(req,res)=>{});
router.delete('/recipes',(req,res)=>{});

// get carbonation
router.get('/carbonation',(req,res)=>{});
router.put('/carbonation',(req,res)=>{});
router.post('/carbonation',(req,res)=>{});
router.delete('/carbonation',(req,res)=>{});

// get styles
router.get('/styles',(req,res)=>{});
router.put('/styles',(req,res)=>{});
router.post('/styles',(req,res)=>{});
router.delete('/styles',(req,res)=>{});

// get equipment
router.get('/equipment',(req,res)=>{});
router.put('/equipment',(req,res)=>{});
router.post('/equipment',(req,res)=>{});
router.delete('/equipment',(req,res)=>{});

// get water profiles
router.get('/waterprofiles',(req,res)=>{});
router.put('/waterprofiles',(req,res)=>{});
router.post('/waterprofiles',(req,res)=>{});
router.delete('/waterprofiles',(req,res)=>{});

// get fermentation profiles
router.get('/fermentationprofiles',(req,res)=>{});
router.put('/fermentationprofiles',(req,res)=>{});
router.post('/fermentationprofiles',(req,res)=>{});
router.delete('/fermentationprofiles',(req,res)=>{});

// get carbonation profiles
router.get('/carbonationprofiles',(req,res)=>{});
router.put('/carbonationprofiles',(req,res)=>{});
router.post('/carbonationprofiles',(req,res)=>{});
router.delete('/carbonationprofiles',(req,res)=>{});

// get mash profiles
router.get('/mashprofiles',(req,res)=>{});
router.put('/mashprofiles',(req,res)=>{});
router.post('/mashprofiles',(req,res)=>{});
router.delete('/mashprofiles',(req,res)=>{});




module.exports = router;