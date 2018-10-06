//SELECT RECORD
export const USER_SELECTIVE = `SELECT user_id, user_type, user_level, project_code_app, first_name, last_name, email, mobile_no, activated, activation_key, lang_key, mark_status, remark `+
	`FROM app_user WHERE 1=1`;

//INSERT RECORD
export const INS_APP_USER_SELECTIVE = `INSERT INTO app_user (user_id, insert_by, insert_date, update_by, update_date, user_type, user_level, project_code_app, password_hash, first_name, last_name, email, activation_key, remark) VALUES ?`;