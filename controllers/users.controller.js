const db = require('../db.js');
const shortid = require('shortid');
const bodyParser = require('body-parser');

module.exports.index = (req, res)=>{
	res.render('users/index', {
			users: db.get('users').value()
	});
};

module.exports.search = (req, res)=>{
	let q = req.query.q;
	let users = db.get('users').value();

	let matchedUser = users.filter(user => {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index', {
			users: matchedUser
	});

	//console.log(req.query);
};

module.exports.create = (req, res)=>{
	res.render('users/create');
};

module.exports.get = (req, res)=>{
	let id = req.params.userId;
	let user = db.get('users').find({id: id}).value();

	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate = (req, res)=>{
	let errors = [];
	if(!req.body.name){
		errors.push("Name require");
	}
	if(!req.body.phone){
		errors.push("Phone require");
	}
	if(errors.length){
		res.render(('users/create'), {
			errors: errors,
			values: req.body
		});
		return;
	}

	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
};