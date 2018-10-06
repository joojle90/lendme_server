//SELECT RECORD
export const REF_GROUP_SELECTIVE = `SELECT module_id, ref_group, full_desc, admin_only, mark_status, remark `+
	`FROM app_refgroup WHERE 1=1`;

//INSERT RECORD
export const INS_APP_REFGROUP_SELECTIVE = `INSERT INTO app_refgroup (module_id, ref_group, insert_by, insert_date, update_by, update_date, full_desc, full_desc_english) VALUES ?`;