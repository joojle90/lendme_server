/**
 * Created by Joojle on 10/04/18.
 */

import * as express from 'express';
import { STYLE_SELECTIVE } from "./q_style";

const router = express.Router();

const db = require('../../database/db.service');
const authentication = require('../../utils/authentication');

// get all campgrounds
router.get('/style', (req: any, res: any) => {
	db.getConnection((err: any, connection: any) => {
		if (err) {
			res.status(500).send({message: err});
		} else {
			const params = req.query;

			let record, query_line = "";

			record = `${ STYLE_SELECTIVE }`;

			if(Object.keys(params).length > 0) {
				Object.keys(params).forEach((key, index) => {
					if (key === "styleItem") {
						const criteria = params.styleItem === "" ? "" : " AND style_item = " + `'${ params.styleItem }'`;
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