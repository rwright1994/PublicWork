 const express = require('express'),
      router = express.Router();

const Product = require('../models/Product');


router.get('/:searchInput', (req,res) => {
      Product.find({ $text: {$search: req.params.searchInput}}, (err,foundItem) => {
            if(err){
                  console.log(err);
            }else{
                  res.send(foundItem);
            }            
      })
})

router.get('/', (req, res) => {     
      Product.find({}, (err, foundItem) => {
            res.send(foundItem);
      });
});


module.exports = router;