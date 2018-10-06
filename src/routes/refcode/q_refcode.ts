//SELECT RECORD
export const REF_CODE_SELECTIVE = `SELECT module_id, ref_group, ref_code, full_desc, mark_status, remark `+
	`FROM app_refcode WHERE 1=1`;

//INSERT RECORD
export const INS_APP_REFCODE_SELECTIVE = `INSERT INTO app_refcode (module_id, ref_group, ref_code, insert_by, insert_date, update_by, update_date, full_desc, full_desc_english) VALUES ?`;