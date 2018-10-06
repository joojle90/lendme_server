//SELECT RECORD
export const PROJECT_SELECTIVE = `SELECT project_code, insert_date, project_name, project_desc, project_image, system_token, duration, mark_status, remark `+
	`FROM app_project WHERE 1=1`;

//INSERT RECORD
export const INS_APP_PROJECT_SELECTIVE = `INSERT INTO app_project (project_code, insert_by, insert_date, update_by, update_date, project_name, project_desc, project_image) VALUES ?`;