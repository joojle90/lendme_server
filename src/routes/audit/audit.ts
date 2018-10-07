/**
 * Created by Joojle on 10/04/18.
 */

import * as express from 'express';
import { AUDIT_SELECTIVE } from "./q_audit";

const router = express.Router();

const db = require('../../database/db.service');
const passport = require('passport');
const authentication = require('../../utils/authentication');

const jwt = require('jsonwebtoken');
const config = require('../../utils/config').SYSTEM_CONFIG;
const tokenList = {};

// get all audit
router.get('/audit', (req: any, res: any) => {
	db.getConnection((err: any, connection: any) => {
		if (err) {
			res.status(500).send({message: err});
		} else {
			const params = req.query;

			let record, query_line = "";

			record = `${ AUDIT_SELECTIVE }`;

			if(Object.keys(params).length > 0) {
				Object.keys(params).forEach((key, index) => {
					if (key === "dateStart") {
                        const criteria = params.dateStart === "" ? "" : " AND date(insert_date) >= " + ("'" + params.dateStart + "'");
                        query_line += criteria;
                    }
                    if (key === "dateEnd") {
                        const criteria = params.dateEnd === "" ? "" : " AND date(insert_date) <= " + ("'" + params.dateEnd + "'");
                        query_line += criteria;
                    }
					if (key === "auditId") {
						const criteria = params.auditId === "" ? "" : " AND audit_id = " + `'${ params.auditId }'`;
						query_line += criteria;
					}
					if (key === "bankinType") {
						const criteria = params.bankinType === "" ? "" : " AND bankin_type = " + `'${ params.bankinType }'`;
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