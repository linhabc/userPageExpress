const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db.js');
const userRoute = require('./routes/user.route');

const app = express();
const port = 3000;


app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

// request
app.get('/', (req, res)=>{
	res.render('index');
});

app.use('/users', userRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));
