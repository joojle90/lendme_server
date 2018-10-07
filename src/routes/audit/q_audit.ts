//SELECT RECORD
export const AUDIT_SELECTIVE = `SELECT audit_id, insert_by, insert_date, update_by, update_date, from_customer_id, to_customer_id, bankin_type, amount, point_of_interest, status, number_of_month, remark `+
	`FROM app_audit WHERE 1=1`;

//INSERT RECORD
export const INS_APP_AUDIT_SELECTIVE = `INSERT INTO app_audit (audit_id, insert_by, insert_date, update_by, update_date, from_customer_id, to_customer_id, bankin_type, amount, point_of_interest, status, number_of_month) VALUES ?`;