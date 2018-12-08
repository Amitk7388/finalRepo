const express = require('express');
const router = express.Router();

const passport = require('passport');

// Post specification
const PostSpecification = require('../../models/Specification');



router.post('/specifications', (req, res) => {
    // const { errors, isValid } = validateBlogPostInput(req.body);
 
    //  // check Validation
    //  if (!isValid) {
    //    // If any errors occer, send 400 with errors object
    //    return res.status(400).json(errors);
    //  }     
 
     const specificationPosts = new PostSpecification({
        leftfaceplate: req.body.leftfaceplate,
        rightfaceplate: req.body.rightfaceplate,
        leftshell: req.body.leftshell,
        rightshell: req.body.rightshell,
        drivers: req.body.drivers,
        typeofdrivers: req.body.typeofdrivers,
        confirguration: req.body.confirguration,        
         
        isolation: req.body.isolation,
        bore : req.body.bore,
        frequencyresponse: req.body.frequencyresponse,
        sensitivity : req.body.sensitivity,
        impedance : req.body.impedance,
        thd : req.body.thd,
        warranrefitpolicy: req.body.warranrefitpolicy  
     
     });
     specificationPosts.save().then(blogpost => res.json(blogpost));
 });

 //get data specification

 router.get('/specifications', (req, res) => {
    PostSpecification.find().then(user => res.json(user))
 })
// router.get('/specifications', (req, res) => res.json({ msg: 'specifications Works' }));


 module.exports = router;