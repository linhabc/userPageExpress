require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./db.js');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');

const app = express();
const port = 3000;


app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

// request
app.get('/', (req, res)=>{
	res.render('index');
});

//using routes
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));
