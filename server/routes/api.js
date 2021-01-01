const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//this will retrive all the data from server
router.get('/get', async(req,res) => {
    try{
           const aliens = await Product.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})


//this will post the data on server
router.post('/post', async(req,res) => {
    const prod = new Product({
        name: req.body.name,
        category: req.body.category,
        tag: req.body.tag,
        price:  req.body.price,
        quantity: req.body.quantity
    })

    try{
        const p1 =  await prod.save() 
        res.json(p1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router