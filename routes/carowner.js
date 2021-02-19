const express = require('express');
const { report } = require('../app');
const router = express.Router();
const carowner = require('../models/carowner_model');

router.get('/:id?',
 function(request, response) {
 
  if (request.params.id) {
   
    if(isNaN(request.params.id) == true){
     
      carowner.getNameCarAndNameOwner(function(err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
         
        }
      })
    }
    else{
    
      carowner.getById(request.params.id, function(err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
        }
      })
    }
    
  }
   else {
    carowner.getAllData(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

// router.get('/:id?',function(req,res){
//   res.send(isNaN(req.params.id))
// //  if(typeof(req.params.id)=='string')
// //  {
// //    res.send("String")

// //  }
// //  else{

// //  }
// })
router.post('/', 
function(request, response) {
  carowner.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  carowner.delete(request.params.id, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});


router.put('/:id', 
function(request, response) {
  carowner.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

// router.get('/cars', function(request, response) {
 
 
// });


module.exports = router;