// importing modules 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	name: String ,
	email: { type: String, unique: true },
	phone: { type: Number, unique: true, required: true },
	pic: String,
	location: { long: Number, land: Number },
	date: { type: Date, default: Date.now }
});

// export userschema 
module.exports = mongoose.model("User", UserSchema); 
