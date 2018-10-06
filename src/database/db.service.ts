import mysql = require('mysql');

const db = (() => {
	this.pool = mysql.createPool({
		connectionLimit: 12,
		host: 'localhost',
		user: 'lendme',
		password: '12345',
		port: 3302,
		database: 'lendme_base',
		charset: 'utf8'
	});

	this.getConnection = (cb: any) => {
		this.pool.getConnection(cb);
	};

	this.query = (sql: any, values: any) => new Promise((resolve, reject) => {
		this.pool.getConnection((err: any, connection: any) => {
			if (err) {
				console.log(err);
			} else {
				connection.query(sql, values, (err: any, results: any) => {
					connection.release();

					if (err) {
						console.log(err);
					} else {
						resolve(results);
					}
				});
			}
		});
	});

	return this;
})();

export = db;