const db = require('../db.js');

module.exports.index = (req, res)=>{
	let page = parseInt(req.query.page) || 1;
	let itemPerPage = 9;

	let start = (page -1)*itemPerPage;
	let end = page*itemPerPage;

	res.render('product/index', {
		products: db.get('products').value().slice(start, end),
		page: page
	})
};