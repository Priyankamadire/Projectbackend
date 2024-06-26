const cors = require('cors');
const dotenv = require("dotenv");
const { Router } = require('express');
const express = require('express')
const mongoose = require('mongoose');
const { route } = require('./router/work');
const bodyParser = require("body-parser");
const logger = require("morgan");

const app= express()
// const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(require('./router/work'));
app.use(require('./router/admwork'));
app.use(require('./router/dwork'));
app.use(require('./router/retwork'));
app.use(require('./router/nework'));
app.use(require('./router/postwork'));
app.use(require('./router/applywork'));
app.use(require('./router/hirework'));
// app.use(require('./router/contactwork'));


// app.use(require('./router/contactwork'));

// app.use(require('./router/contactwork'));
// app.use(require('./middleware/authenticate'));
 app.use(express.json());

// app.use(route);


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
//   });

app.use(cors());     


app.get('/abcdef', (req, res) => {
    res.send("I am About priyanka");
});

app.post('/contact_', async (req, res) => {
  try {
      // Extract data from request body
      const { name, email, message } = req.body;

      // Create a new contact document
      const newContact = new Contact({
          name,
          email,
          message
      });

      // Save the contact document to the database
      await newContact.save();

      // Respond with success message
      res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

app.get('/jobavai',(req,res)=>{
    Postjob.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })
  
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
const middleware =(req,res,next)=>{
    console.log('hello to middleware');   
    next();
}
// app.get('/',(req,res)=>{
//     res.json({mssg:'Welcome to app'})
// })
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});
require('./db/conn');

// app.use('/api/workouts',workoutRoutes)
// app.get('/ ')
// DB = 'mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/?retryWrites=true&w=majority';
// DB = 'mongodb://myproject:faculty22@ac-lhw1lfh-shard-00-00.dvhrjty.mongodb.net:27017,ac-lhw1lfh-shard-00-01.dvhrjty.mongodb.net:27017,ac-lhw1lfh-shard-00-02.dvhrjty.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0oq3x-shard-0&authSource=admin&retryWrites=true&w=majority';
 const PORT = process.env.PORT
const User = require('./model/userSchema');
const Admin = require('./model/adminSchema');
const Detail = require('./model/detailSchema');
const Retaire = require('./model/retairSchema');
const New= require('./model/newworSchema');
const Postjob = require("./model/postSchema");
const Apply = require("./model/applySchema");
const Hire = require("./model/hireSchema");
const Contact = require("./model/contactSchema");
// app.get('/details',(req,res)=>{
//     Detail.find().then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     })
// })








app.listen(PORT,() => {
    console.log('listened port 5000')
})
   