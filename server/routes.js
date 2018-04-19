var router=require('express').Router();
var controller=require('../database-mongo/PatientController');
//routes and handling requests.

router.route('/').get(function(req,res){
  res.send('hi')
})

router.route('/login').get()

router.route('/login').post()

router.route('/signup').get()

router.route('/signup').post()

//retrieve a pateint.
router.route('/patient').get(controller)

//create a patient.
router.route('/patient').post(controller)

//update patient information.
router.route('/patient').put(controller)

//delete a patient.
router.route('/patient').delete(controller)

//get all patients
router.route('/patients').get(controller)



module.exports=router;
