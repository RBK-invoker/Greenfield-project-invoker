var Patient= require('./index');
//controller methods:


//1.create one patient
exports.createOne = function (req, res) {
	var pInfo=req.body;

	var patient=new Patient(pInfo)

	patient.save(function(err,patient){
		if(err){
			console.log(error)
		}
		res.send('patient Created ')
	})
};

//2.update specific info for one patient
exports.updateOne = function (req, res) {
	Patient.findById(req.body.number,function(err,patient){
		if(err){
			console.log(err)
			res.send(500);
		}
		else{

			patient.number=req.body.number;
			patient.Firstname=req.body.Firstname;
			patient.Lastname=req.body.Lastname;
			patient.Gender=req.body.Gender;
			patient.Age=req.body.Age;
			patient.Phone=req.body.Phone;
			patient.Conditions=req.body.Conditions;
			patient.Past_diseases=req.body.Past_diseases;
			patient.Currentlly_medications=req.body.Currentlly_medications;
		    patient.Genetic_diseases=req.body.Genetic_diseases;
			patient.Allergies=req.body.Allergies;
			patient.description=req.body.description;

			patient.save(function(err,patient){
				if(err){
					console.log(error);
					res.send(err)
				}else{
					console.log('patient Updated ^_^!')
				}
			})
		}
	})
};

//3.delete one patient
exports.delete=function(req,res){
Patient.findById(req.body.number,function(err,patient){
	if(err){
		console.log(err)
		res.send(500);
           }
           else{
           	patient.remove(function(err,patient){
           		if(err){console.log(error);
           			res.send(err)
           		}
           		else{
           			console.log('patient Deleted ^.^')
           		}
           	})
           }

})
};

//4.return all info for one patient
exports.retrieveOne=function(req,res){
Patient.findByid(req.body.number,function(err,patient){
if(err){
	console.log(err)
	res.send(500)
}
else{

	console.log(patient)
	res.send(patient)
}

})

};
//5.return all info for all patients
exports.retrieveAll=function(req,res){
Patient.find(function(err,allpatient){
	if(err){
		console.log(err)
		res.send(500);
	}
	else{
		console.log(allpatient);
		res.send(allpatient)
	}
})

};
