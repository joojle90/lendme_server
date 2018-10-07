//SELECT RECORD
export const CUSTOMER_SELECTIVE = `SELECT customer_id, insert_by, insert_date, update_by, update_date, first_name, last_name, ic_no, date_of_birth, gender, account_no, profile_rate, address1, address2, address3, postal_code, city, state, country, mobile_no, email, image, emergency_contact_no, remark `+
	`FROM app_customer WHERE 1=1`;

//INSERT RECORD
export const INS_APP_CUSTOMER_SELECTIVE = `INSERT INTO app_customer (customer_id, insert_by, insert_date, update_by, update_date, first_name, last_name, ic_no, date_of_birth, gender, account_no, profile_rate, address1, address2, address3, postal_code, city, state, country, mobile_no, email, image, emergency_contact_no) VALUES ?`;