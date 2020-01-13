var userModel = require('../model/user_model')


module.exports.getUsers = function(req, res){
	console.log("getUsers called")
	var page = parseInt(req.query.page) || 0; 
  	var limit = parseInt(req.query.limit) || 5;
  	var sort = req.query.sort || {}
	userModel.getUsers({}, page, limit, sort, function(err, user){
		if(err){
			res.json({"msg": "failure", "error": err});
		}else{
			res.status(200).json({"msg": "success", "data": user});
		}
	})
}

module.exports.getUser = function(req, res){
	console.log("getUser called")
	userModel.getUser({id: req.params.id}, function(err, user){
		if(err){
			res.json({"msg": "failure", "error": err});
		}else{
			res.status(200).json({"msg": "success", "data": user});
		}
	})
}


module.exports.createUser = function(req, res){
	console.log("createUser called")
	var data = req.body;
	userModel.createUser(data, function(err, user){
		if(err){
			res.json({"msg": "failure", "error": err});
		}else{
			res.status(201).json({"msg": "created successfully", "data": user});
		}
	})
}


module.exports.updateUser = function(req, res){
	console.log("updateUser called")
	var cond = {id: req.params.id}
	var data = req.body;
	userModel.updateUser(cond, data, function(err, user){
		if(err){
			res.json({"msg": "failure", "error": err});
		}else{
			res.status(200).json({"msg": "updated successfully"});
		}
	})
}


module.exports.deleteUser = function(req, res){
	console.log("deleteUser called")
	userModel.deleteUser({id: req.params.id},function(err, user){
		if(err){
			res.json({"msg": "failure", "error": err});
		}else{
			res.status(200).json({"msg": "deleted successfully"});
		}
	})
}