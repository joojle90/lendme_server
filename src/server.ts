/**
 * Created by Joojle on 10/04/18.
 */

import express = require('express');
import session = require('express-session');
import bodyParser = require('body-parser');
import path = require('path');
import passport = require('passport');

const expressSanitizer = require('express-sanitizer');

//initial database schema
const database = require('./database/db.service');
require('./database/db.schema')(database);
require('./utils/passport')(passport);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
//app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
//app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));

app.use(expressSanitizer());

app.use(session({
	secret: 'mySecretKey',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req: any, res: any, next: any) => {
	// Specify the Domain you wish to allow or give * to allow all 	origins.
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow or * to allow all.
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type');

	// Check if preflight request
	if (req.method === 'OPTIONS') {
		res.status(200);
		res.end();
	}
	else {
		// Pass to next layer of middleware
		next();
	}
});

//initial routes
const module_routes = require('./routes/module/module');
const menu_routes = require('./routes/menu/menu');
const refcode_routes = require('./routes/refcode/refcode');
const refgroup_routes = require('./routes/refgroup/refgroup');
const style_routes = require('./routes/style/style');
const project_routes = require('./routes/project/project');
const user_routes = require('./routes/user/user');
const customer_routes = require('./routes/customer/customer');
const audit_routes = require('./routes/audit/audit');
const log_routes = require('./routes/log/log');

app.use('/api', module_routes);
app.use('/api', menu_routes);
app.use('/api', refcode_routes);
app.use('/api', refgroup_routes);
app.use('/api', style_routes);
app.use('/api', project_routes);
app.use('/api', user_routes);
app.use('/api', customer_routes);
app.use('/api', audit_routes);
app.use('/api', log_routes);

//app.get('/', (req: any, res: any) => {
//	res.sendFile(path.resolve(__dirname, '../client/index.html'));
//});

app.get('*', (req: any, res: any) => {
	res.send('Sorry, page not found!');
});

app.listen(8100, () => {
	console.log('This express angular app is listening on port:' + 8100);
});

export = app;