/**
 * Created by Joojle on 10/04/18.
 */

import * as express from 'express';
import { MODULE_SELECTIVE } from "./q_module";

const router = express.Router();

const db = require('../../database/db.service');
const authentication = require('../../utils/authentication');

// get all campgrounds
router.get('/module', (req: any, res: any) => {
	db.getConnection((err: any, connection: any) => {
		if (err) {
			res.status(500).send({message: err});
		} else {
			const params = req.query;

			let record, query_line = "";

			record = `${ MODULE_SELECTIVE }`;

			if(Object.keys(params).length > 0) {
				Object.keys(params).forEach((key, index) => {
					if (key === "moduleId") {
						const criteria = params.moduleId === "" ? "" : " AND module_id = " + `'${ params.moduleId }'`;
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