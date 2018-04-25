var router=require('express').Router();
var controller=require('../database-mongo/PatientController');
var utils=require('./utils')
var bcrypt=require('bcrypt')
var bodyParser = require('body-parser');
var path=require('path')
var User=require('../database-mongo/index');
var mongoose=require('mongoose')
var User=mongoose.model('User')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended : true}))
//routes and handling requests.

//Jozaa 'give me the controll for the get request only'


router.route('/')
.get(function(req,res){res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));})

router.route('/login')
.get(function(req,res){res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));})

  .post(function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;

  User.findOne({userName:userName},function(err,user){
    if(!user){
      console.log("User does not exist");
      return res.redirect('/login')
    }else{
    bcrypt.compare(password,user.password,function(err,match){
      if(match){
        console.log('successful login');
        utils.createSession(req,res,user)
      }else{
        console.log('Wrong password');
        res.redirect('/login')

      }
    })}
  })
});

router.route('/signup')
.get(function(req,res){res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));})
.post(function(req,res){
  var userName=req.body.userName;
  var password=req.body.password;
  var firstName=req.body.firstName;
  var lastName=req.body.lastName;

  User.findOne({userName:userName},function(err,user){
    if(!user){
      bcrypt.hash(password,10,function(err,hash){

          var user=new User({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            password:hash
          })

          user.save(function(err,user){
            console.log(user);
            utils.createSession(req,res,user)
          })

          })
  }else{
    console.log("User already exists!");
    res.redirect('/signup');
  }
  })
});


router.route('/logout')
  .get(function(req,res){
    console.log(req.session);
    req.session.destroy()
    console.log(req.session);
    res.redirect('/login')
    })

router.route('/patient')
//retrieve a pateint.
.get(  function(req,res){  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));}
  //utils.checkUser,controller.retrieveOne
  )
//create a patient.
.post(utils.checkUser,controller.createOne)
//update patient information.
.put(utils.checkUser,controller.updateOne)
//delete a patient.
.delete(utils.checkUser,controller.delete)

router.route('/patients')
//get all patients
.get(utils.checkUser,controller.retrieveAll)

//Jozaa another get request i neeed to control it to see rifaa work
//about router I think we have to do somthing in server to give me all the controll
//we will talk in that tonorrow
router.route('/list').get(function(req,res){res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));})
router.route('/user').get(function(req,res){res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));})



module.exports=router;
