//SELECT RECORD
export const STYLE_SELECTIVE = `SELECT style_item, item1, item2, item3, item4, item5, mark_status, remark `+
	`FROM app_style WHERE 1=1`;

//INSERT RECORD
export const INS_APP_STYLE_SELECTIVE = `INSERT INTO app_style (style_item, insert_by, insert_date, update_by, update_date, item1, item2, item3, item4, item5) VALUES ?`;