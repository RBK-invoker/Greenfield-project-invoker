
//include mongoose in our project 
//open a connection to the patient database on our locally running instance of MongoDB.
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patient');

//now we need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
//connection error occurs
db.on('error', function() {
  console.log('mongoose connection error');
});
//connect successfully
db.once('open', function() {
  console.log('mongoose connected successfully');
});

//create our schema
var patientSchema = mongoose.Schema({
  number:{type:Number,unique:true},
  Firstname:Number,
  Lastname:String,
  Gender:String,
  Age:Number,
  Phone:{type:Number,unique:true},
  Conditions:String,
  Past_diseases:String,
  Currentlly_medications:String,
  Genetic_diseases:String,
  Allergies:String,
  description: String
});


//compiling our schema into a Model(class)
var Patient = mongoose.model('Patient', itemSchema);


var selectAll = function(callback) {
  Patient.find({},function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, Patient);
    }
  });
};

//functionality to our instances:

var save=function(PatientInstance){

  PatientInstance.save(function(err,patients){
    if(err){
      console.log(err)
    }else{
      console.log('saved patient!')
    }
  })
}

module.exports=Patient;
module.exports.selectAll = selectAll;
module.exports.save = save;
// module.exports=db;

