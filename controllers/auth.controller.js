const db = require('../db.js');
const bodyParser = require('body-parser');
const md5 = require('md5');

module.exports.login = (req, res)=>{
	res.render('auth/login');
}

module.exports.postLogin = (req, res)=>{
	let email = req.body.email;
	let password = req.body.password;
	let hashedPassword = md5(password);

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
	
	if(user.password !== hashedPassword){
		res.render('auth/login', {
			errors: [
				"Incorrect password"
			],
			values: req.body
		})
	}

	res.cookie('userId', user.id, {
		signed: true
	});
	res.redirect('/users');
}