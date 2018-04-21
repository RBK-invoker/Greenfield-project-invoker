var router=require('express').Router();
var controller=require('../database-mongo/PatientController.js');
//routes and handling requests.

router.route('/').get(function(req,res){
  res.send('hi')
})
//
// router.route('/login').get()
//
// router.route('/login').post()
//
// router.route('/signup').get()
//
// router.route('/signup').post()

//retrieve a pateint.
router.route('/patient').get(controller.retrieveOne)

//create a patient.
router.route('/patient').post(controller.createOne)

//update patient information.
router.route('/patient').put(controller.updateOne)

//delete a patient.
router.route('/patient').delete(controller.delete)

//get all patients
router.route('/patients').get(controller.retrieveAll)



module.exports=router;
