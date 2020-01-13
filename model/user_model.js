var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: {type: Number, index: true},
	first_name: {type: String},
	last_name: {type: String},
	company_name: {type: String},
	age: {type: Number},
	city: String,
	state: String,
	zip: Number,
	email: String,
	web: String
});



var userModel = mongoose.model('user_colletion', userSchema);

module.exports.getUsers = function(cond, page, limit, sort, cb){
	var query = userModel.find(cond);
	query.skip(page*limit).limit(limit).sort(sort);
	query.exec(function(err, doc){
		if(err){
			cb(err);
		}else{
			cb(null, doc);
		}
	})
}

module.exports.getUser = function(cond, cb){
	userModel.findOne(cond, function(err, doc){
		if(err){
			cb(err);
		}else{
			cb(null, doc);
		}
	})
}

module.exports.createUser = function(data, cb){
	userModel.create(data, function(err, doc){
		if(err){
			cb(err);
		}else{
			cb(null, doc)
		}
	})
}

module.exports.updateUser = function(cond, data, cb){
	userModel.update(cond, data, function(err, doc){
		if(err){
			cb(err);
		}else{
			cb(null, doc)
		}
	})
}

module.exports.deleteUser = function(cond, cb){
	userModel.remove(cond, function(err, doc){
		if(err){
			cb(err);
		}else{
			cb(null, doc)
		}
	})
}