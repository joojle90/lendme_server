/**
 * Created by Joojle on 10/04/18.
 */

import * as express from 'express';
import { MENU_SELECTIVE } from "./q_menu";

const router = express.Router();

const db = require('../../database/db.service');
const authentication = require('../../utils/authentication');

// get all campgrounds
router.get('/menu', (req: any, res: any) => {
	db.getConnection((err: any, connection: any) => {
		if (err) {
			res.status(500).send({message: err});
		} else {
			const params = req.query;

			let record, query_line = "";

			record = `${ MENU_SELECTIVE }`;

			if(Object.keys(params).length > 0) {
				Object.keys(params).forEach((key, index) => {
					if (key === "menuId") {
						const criteria = params.menuId === "" ? "" : " AND menu_id = " + `'${ params.menuId }'`;
						query_line += criteria;
					}

					if(key === "markStatus") {
						const criteria = params.markStatus === "" ? "" : " AND mark_status = " + `'${ params.markStatus }'`;
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