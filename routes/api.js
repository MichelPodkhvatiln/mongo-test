const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res)=>{
  res.send({
    type: 'GET',
  })
});

router.post('/ninjas', (req, res, next)=>{
  Ninja.create(req.body).then((ninja) =>{
    res.send(ninja)
  }).catch(next);
});

router.put('/ninjas/:id', (req, res, next)=>{
  const id = req.params.id;

  Ninja.findByIdAndUpdate({_id: id}, req.body).then(()=>{
    Ninja.findOne({_id: id}).then((ninja)=>{
      res.send(ninja);
    });
  })
});

router.delete('/ninjas/:id', (req, res, next)=>{
  const id = req.params.id;

  Ninja.findByIdAndRemove({_id: id}).then((ninja)=>{
    res.send(ninja);
  });
});


module.exports = router;
