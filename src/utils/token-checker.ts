const jwt = require('jsonwebtoken');
const config = require('./config').SYSTEM_CONFIG;

export = (req:any, res:any, next:any) => {
	const token = req.body.token || req.query.token || req.headers['access-token'];

	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, config.secret, (err:any, decoded:any) => {
			if (err) {
				return res.status(401).json({
					"error": true,
					"message": 'Unauthorized access.'
				});
			}
			req.decoded = decoded;
			next();
		});
	} else {
		// if there is no token
		// return an error
		return res.status(403).send({
			"error": true,
			"message": 'No token provided.'
		});
	}
};