const db = require('../db.js');

module.exports.index = (req, res)=>{
	res.render('product/index', {
		products: db.get('products').value()
	})
};