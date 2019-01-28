const db = require('../db');

module.exports.requireAuth = (req, res, next)=>{
	if(!req.cookies.userId){
		res.redirect('/auth/login');
		return;
	}
	console.log(req.cookies.userId);

	var user = db.get('users').find({id: req.cookies.userId}).value();

	if(user){
		res.redirect('/auth/login');
		return;
	}
	console.log(req.cookies.userId);

	next();
}