//open a connection to the patient database on our locally running instance of MongoDB.
var mongoose = require("mongoose");

//Add Mlab Database
mongoose.connect(
  "mongodb://Mohammad:1234@ds161539.mlab.com:61539/medical-records"
);

//now we need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
});

//create our schema
var patientSchema = mongoose.Schema({
  number: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  gender: String,
  age: Number,
  phone: Number,
  conditions: String,
  past_Diseases: String,
  currentlly_Medications: String,
  genetic_Diseases: String,
  allergies: String,
  description: String
});

var Patient = mongoose.model("Patient", patientSchema);

var selectAll = function(callback) {
  Patient.find({}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, Patient);
    }
  });
};

var save = function(PatientInstance) {
  PatientInstance.save(function(err, patient) {
    if (err) {
      alert(`error`);
    } else {
      alert(`saved patient!`);
    }
  });
};

//create our schema
var userSchema = mongoose.Schema({
  userName: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = Patient;
module.exports.selectAll = selectAll;
module.exports.save = save;
