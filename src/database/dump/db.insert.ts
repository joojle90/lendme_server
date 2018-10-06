import { INS_APP_MENU_SELECTIVE, INS_APP_MODULE_SELECTIVE,
	INS_APP_PROJECT_SELECTIVE, INS_APP_REFCODE_SELECTIVE, INS_APP_REFGROUP_SELECTIVE,
	INS_APP_STYLE_SELECTIVE, INS_APP_USER_SELECTIVE } from "../../routes";

const db_insert = (db: any) => {

	let table_insert: string[] = [], insert_data: any = [];

	table_insert[0] = `${INS_APP_MODULE_SELECTIVE}`;
	table_insert[1] = `${INS_APP_REFGROUP_SELECTIVE}`;
	table_insert[2] = `${INS_APP_REFCODE_SELECTIVE}`;
	table_insert[3] = `${INS_APP_MENU_SELECTIVE}`;
	table_insert[4] = `${INS_APP_PROJECT_SELECTIVE}`;
	table_insert[5] = `${INS_APP_STYLE_SELECTIVE}`;
	table_insert[6] = `${INS_APP_USER_SELECTIVE}`;

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