//SELECT RECORD
export const MODULE_SELECTIVE = `SELECT module_id, full_desc, mark_status, remark `+
	`FROM app_module WHERE 1=1`;

//INSERT RECORD
export const INS_APP_MODULE_SELECTIVE = `INSERT INTO app_module (module_id, insert_by, insert_date, update_by, update_date, full_desc, full_desc_english) VALUES ?`;
