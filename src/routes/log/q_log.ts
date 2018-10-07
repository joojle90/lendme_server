//SELECT RECORD
export const LOG_SELECTIVE = `SELECT log_id, insert_by, insert_date, update_by, update_date, customer_id, customer_status, credit_score, number_of_lend, number_of_rent, remark `+
	`FROM app_log WHERE 1=1`;

//INSERT RECORD
export const INS_APP_LOG_SELECTIVE = `INSERT INTO app_log (log_id, insert_by, insert_date, update_by, update_date, customer_id, customer_status, credit_score, number_of_lend, number_of_rent) VALUES ?`;