/**
 * Created by laurence-ho on 21/07/17.
 */

const db = require('../database/db.service');
let authentication: any = {};

authentication.isLoggedIn = (req: any, res: any, next: any) => {
	console.log("req1", req);
	if (req.isAuthenticated()) {
		return next();
	}
	res.status(403).send({message: 'Please Login First 3'});
};

export = authentication;

