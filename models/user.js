// importing modules 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 


var UserSchema = new Schema({ 
	email: {type: String, required:true, unique:true}, 
	username : {type: String, unique: true, required:true}, 
}); 

// export userschema 
module.exports = mongoose.model("User", UserSchema); 
