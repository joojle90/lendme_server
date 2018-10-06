//SELECT RECORD
export const MENU_SELECTIVE = `SELECT menu_id, module_id, module_type, full_desc, menu_api, order_seq, level_id, mark_status, remark `+
	`FROM app_menu WHERE 1=1`;

//INSERT RECORD
export const INS_APP_MENU_SELECTIVE = `INSERT INTO app_menu (menu_id, insert_by, insert_date, update_by, update_date, module_id, full_desc, full_desc_english) VALUES ?`;