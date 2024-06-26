const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});
const cors = require('cors'); 
router.use(cors());
require('../db/conn');
const Hire  = require("../model/hireSchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })




   router.post('/hireop' , async(req,res) =>{
   

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {instname,workingpost} = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!instname||!workingpost){
        return res.status(408).json({error:"please fill all th details"});
    }
   
    else{
         const detail = new Hire({instname,workingpost});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    
   


 
}



); 
router.get('/hiring',(req,res)=>{
    Hire.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })




    
module.exports = router;
