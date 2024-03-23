const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const multer  = require('multer')
const upload = multer()
const cors = require('cors');
router.use(cors());
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const Apply  = require("../model/applySchema");

   router.post('/applypost' , async(req,res) =>{
 
    const {name,date,email,phone,postavailable,qualification,experience, department ,github} = req.body;

 
    if(!name||!date||!email||!phone||!postavailable||!qualification||!experience||!department ||!github){
        return res.status(408).json({error:"please fill all th details"});
    }
   
    else{
         const detail = new Apply({name,date,email,phone,postavailable,qualification,experience,department,github});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    
   


 
}



); 
router.get('/jobapply_',(req,res)=>{
    Apply.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })




    
module.exports = router;