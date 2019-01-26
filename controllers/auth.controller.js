const db = require('../db.js');
const bodyParser = require('body-parser');

module.exports.login = (req, res)=>{
	res.render('auth/login');
}

module.exports.postLogin = (req, res)=>{
	let email = req.body.email;
	let password = req.body.password;
	let user = db.get('users').find({email: email}).value();
	
	if(!user){
		res.render('auth/login', {
			errors: [
				"User does not exist!"
			],
			values: req.body
		});
		return;
	}

	if(user.password !== password){
		res.render('auth/login', {
			errors: [
				"Incorrect password"
			],
			values: req.body
		})
	}

	res.cookie('userId', user.id);
	res.redirect('/users');
}