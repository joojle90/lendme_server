/**
 * Created by Joojle on 10/04/18.
 */

import * as express from 'express';
import { USER_SELECTIVE } from "./q_user";

const router = express.Router();

const db = require('../../database/db.service');
const passport = require('passport');
const authentication = require('../../utils/authentication');

// const jwt = require('jsonwebtoken');
// const config = require('../../utils/config').SYSTEM_CONFIG;
// const tokenList = {};

// router.post('/login', (req:any ,res:any) => {
// 	const postData = req.body;
// 	const user = {
// 		"email": postData.email,
// 		"name": postData.name
// 	};
// 	console.log("postData login", postData);
// 	console.log("user details login", user);
// 	// do the database authentication here, with user name and password combination.
// 	const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife});
// 	const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});
// 	const response = {
// 		"status": "Logged in",
// 		"token": token,
// 		"refreshToken": refreshToken,
// 	};
// 	tokenList[refreshToken] = response;
// 	res.status(200).json(response);
// });

// router.post('/sign-in', (req: any, res: any, next: any) => {
// 	const postRequest = req.body;
// 	const user = {
// 		"userId": postRequest.params.userId,
// 		"password": postRequest.params.password
// 	};

// 	console.log("user details signin", user);
// 	// do the database authentication here, with user name and password combination.
// 	passport.authenticate('local-sign-in', (err: any, user: any, info: any) => {
// 		console.log("user", user);
// 		user = true;
// 		if (err) {
// 			return res.status(401).send({message: err.message});
// 		}
// 		if (!user) {
// 			return res.status(401).send({message: info.message});
// 		}
// 		req.logIn(user, (err: any) => {
// 			if (err) {
// 				return res.status(401).send({message: err.message});
// 			}
// 			console.log("req.user", req.user);
// 			return res.status(200).json(req.user);
// 		});
// 	})(req, res, next);


// 	const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife});
// 	const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});
// 	const response = {
// 		"status": "Logged in",
// 		"token": token,
// 		"refreshToken": refreshToken,
// 	};
// 	tokenList[refreshToken] = response;
// 	res.status(200).json(response);
// });

/*router.post('/sign-in', (req: any, res: any, next: any) => {
	console.log('---- User login: here');
	console.log("passport", passport);
	passport.authenticate('local-sign-in', (err: any, user: any, info: any) => {
		console.log("req", req.logIn);
		console.log("user", user);
		console.log("req.user", req.user);
		if (err) {
			return res.status(401).send({message: err.message});
		}
		if (!user) {
			return res.status(401).send({message: info.message});
		}
		req.logIn(user, (err: any) => {
			if (err) {
				return res.status(401).send({message: err.message});
			}

			let milliseconds = 0;
			if (req.body.remember) {
				milliseconds = 1000 * 60 * 30; // 30 minutes

				req.session.cookie.expires = new Date(Date.now() + milliseconds);
				req.session.cookie.maxAge = milliseconds;
			} else {
				milliseconds = 1000 * 60 * 60 * 24; // 1 day

				req.session.cookie.expires = new Date(Date.now() + milliseconds);
				req.session.cookie.maxAge = milliseconds;
			}
			console.log("req.user", req.user);
			return res.status(200).json(req.user);
		});
	})(req, res, next);
});*/

// router.use(require('../../utils/token-checker'));
// get all user
router.get('/user', (req: any, res: any) => {
	db.getConnection((err: any, connection: any) => {
		if (err) {
			res.status(500).send({message: err});
		} else {
			const params = req.query;

			let record, query_line = "";

			record = `${ USER_SELECTIVE }`;

			if(Object.keys(params).length > 0) {
				Object.keys(params).forEach((key, index) => {
					if (key === "userId") {
						const criteria = params.userId === "" ? "" : " AND user_id = " + `'${ params.userId }'`;
						query_line += criteria;
					}
				});
			}

			record +=  query_line;
			console.log("RECORD", record);

			connection.query(record, (err: any, results: any) => {
				connection.release();

				if (err) {
					res.status(500).send({message: err});
				} else {
					res.send(results);
				}
			});
		}
	});
});

export = router;