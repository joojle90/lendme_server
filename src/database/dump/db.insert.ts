import { INS_APP_MENU_SELECTIVE, INS_APP_MODULE_SELECTIVE,
	INS_APP_PROJECT_SELECTIVE, INS_APP_REFCODE_SELECTIVE, INS_APP_REFGROUP_SELECTIVE,
	INS_APP_STYLE_SELECTIVE, INS_APP_USER_SELECTIVE, INS_APP_CUSTOMER_SELECTIVE, INS_APP_AUDIT_SELECTIVE,
	INS_APP_LOG_SELECTIVE } from "../../routes";

const db_insert = (db: any) => {

	let table_insert: string[] = [], insert_data: any = [];

	table_insert[0] = `${INS_APP_MODULE_SELECTIVE}`;
	table_insert[1] = `${INS_APP_REFGROUP_SELECTIVE}`;
	table_insert[2] = `${INS_APP_REFCODE_SELECTIVE}`;
	table_insert[3] = `${INS_APP_MENU_SELECTIVE}`;
	table_insert[4] = `${INS_APP_PROJECT_SELECTIVE}`;
	table_insert[5] = `${INS_APP_STYLE_SELECTIVE}`;
	table_insert[6] = `${INS_APP_USER_SELECTIVE}`;
	table_insert[7] = `${INS_APP_CUSTOMER_SELECTIVE}`;
	table_insert[8] = `${INS_APP_AUDIT_SELECTIVE}`;
	table_insert[9] = `${INS_APP_LOG_SELECTIVE}`;

	insert_data[0] = [
		['AR', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'APPLICATION REFERENCE CODE', 'APPLICATION REFERENCE CODE'],
		['MF', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MENU FOUNDATION', 'MENU FOUNDATION']
	];

	insert_data[1] = [
		['AR', 'MRK_STT', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MARK STATUS', 'RECORD MARK SYSTEM'],
		['AR', 'USR_LVL', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'USER LEVEL', 'USER LEVEL STATUS'],
		['AR', 'USR_TYP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'USER TYPE APPLICATION', 'USER TYPE APPLICATION STATUS'],
		['MF', 'MDL_TYP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MODULE TYPE', 'MODULE TYPE APPLICATION']
	];

	insert_data[2] = [
		['AR', 'MRK_STT', 'N', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Inactive', 'Inactive Status'],
		['AR', 'MRK_STT', 'Y', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Active', 'Active Status'],
		['AR', 'USR_LVL', 'USR_COM', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Normal User', 'Normal User Application'],
		['AR', 'USR_LVL', 'SYS_CAP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Main System Admin', 'Main System Admin'],
		['AR', 'USR_TYP', 'A', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Admin', 'Administrator User'],
		['AR', 'USR_TYP', 'U', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'User', 'User'],
		['AR', 'USR_TYP', 'X', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'SYSADMIN', 'Super Administrator Application'],
		['MF', 'MDL_TYP', 'P', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Parent Menu', 'Parent Menu Application'],
	];

	insert_data[3] = [
		['LNM001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MF', 'Create User', 'Create User Access System']
	];

	insert_data[4] = [
		['LEND_ME', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'LEND ME', 'PEER TO PEER PLATFORM APPLICATION', 'lend_me.png']
	];

	insert_data[5] = [
		['background', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'linear-gradient(to right, #4e54c8, #8f94fb)', '#4e54c8', '#d0d0d0', '#fff', '#000'],
		['color', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'blue', '#fff', '#000', null, null],
		['font-size', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), '12', '14', '16', null, null],
		['theme', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'primary', 'accent', 'warn', 'mixin-indigo', 'mixin-custom']
	];

	insert_data[6] = [
		['admin', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'X', 'SYS_CAP', 'LEND_ME', 'lendme', 'LEND ME', 'ADMIN', 'admin@gmail.com', '$2a$10$N4Oz7sOYpVRHU.D0Fe0wJeOy3kE0TWEFnEncvyMHeb3GsKpPvojcW', 'default pass: 12345']
	];

	insert_data[7] = [
		['CID001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Ahmad', 'Bin Ismail', '900218-1039-0192', '1990-02-18 00:00:00', 'M', 4, 'No 15.', 'Block 6 Taman Putra', '', '43000', 'Kajang', 'Selangor', 'Malaysia', '+60182909212', 'ahmad@gmail.com', '+60192321290'],
		['CID002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Mark', 'Anthony', 'B12678191', '1980-12-19 00:00:00', 'M', 4, '15-1. Block B', 'Damansara City', '', '56280', 'Petaling Jaya', 'Selangor', 'Malaysia', '+60178192301', 'markanthony@gmail.com', '+60111823901'],
		['CID003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Siti', 'Jamal', '780128-0909-1293', '1978-01-28 00:00:00', 'F', 3, 'Block F. No 12', 'Jalan Taman Desa', 'Presint 14', '52019', 'Putrajaya', 'Putrajaya', 'Malaysia', '+60168123812', 'sitijamal@gmail.com', '+60129899011'],
		['CID004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Sri', 'Rahman', '851006-1892-0912', '1985-10-06 00:00:00', 'F', 5, 'No 29', 'Jalan Patani Impian', 'Desa Patani', '89720', 'Kota Baharu', 'Kelantan', 'Malaysia', '+60182139123', 'srirahman@yahoo.com', '+60189128192'],
		['CID005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Muhammad', 'Abrar', 'A01293321', '1981-04-20 00:00:00', 'M', 4, 'No 18', '12/5 Block C', 'Taman Tropika 3', '43600', 'Bangi', 'Selangor', 'Malaysia', '+60121231310', 'muhammadabrar@yahoo.com', '+60192183101']
	];

	insert_data[8] = [
		['ADT001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID001', 'CID005', 'RENT', 4700, 4, 'On Progress', 2],
		['ADT002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'CID002', 'RENT', 5500, 5, 'On Progress', 6],
		['ADT003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID003', 'CID004', 'LEND', 3000, 4, 'Done', 3],
		['ADT004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'CID003', 'LEND', 10000, 6, 'On Progress', 5],
		['ADT005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID002', 'CID004', 'RENT', 2000, 3, 'On Progress', 2]
	];

	insert_data[9] = [
		['LOG001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID004', 'TRUSTED', 9, 10, 0],
		['LOG002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'TRUSTED', 8, 14, 3],
		['LOG003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID002', 'TRUSTED', 8, 7, 1],
		['LOG004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID001', 'AVERAGE', 6, 4, 3],
		['LOG005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID003', 'FAKE', 3, 0, 5]
	];

	db.getConnection((err: any, connection: any) => {
		if (err) {
			console.log(err);
		} else {
			connection.query('SELECT * FROM app_module', (err: any, result: any) => {
				if(result.length == 0) {
					for (let x in table_insert) {
						connection.query(table_insert[x], [insert_data[x]], (err: any) => {
							if (err) {
								console.log(err);
							}
						});
					}
				}
			});

			connection.release();
		}
	});
};

export = db_insert;