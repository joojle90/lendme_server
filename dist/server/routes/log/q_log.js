"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//SELECT RECORD
exports.LOG_SELECTIVE = "SELECT log_id, insert_by, insert_date, update_by, update_date, customer_id, customer_status, credit_score, number_of_lend, number_of_rent, remark " +
    "FROM app_log WHERE 1=1";
//INSERT RECORD
exports.INS_APP_LOG_SELECTIVE = "INSERT INTO app_log (log_id, insert_by, insert_date, update_by, update_date, customer_id, customer_status, credit_score, number_of_lend, number_of_rent) VALUES ?";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9sb2cvcV9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlO0FBQ0YsUUFBQSxhQUFhLEdBQUcsb0pBQW9KO0lBQ2hMLHdCQUF3QixDQUFDO0FBRTFCLGVBQWU7QUFDRixRQUFBLHFCQUFxQixHQUFHLG1LQUFtSyxDQUFDIiwiZmlsZSI6InJvdXRlcy9sb2cvcV9sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NFTEVDVCBSRUNPUkRcbmV4cG9ydCBjb25zdCBMT0dfU0VMRUNUSVZFID0gYFNFTEVDVCBsb2dfaWQsIGluc2VydF9ieSwgaW5zZXJ0X2RhdGUsIHVwZGF0ZV9ieSwgdXBkYXRlX2RhdGUsIGN1c3RvbWVyX2lkLCBjdXN0b21lcl9zdGF0dXMsIGNyZWRpdF9zY29yZSwgbnVtYmVyX29mX2xlbmQsIG51bWJlcl9vZl9yZW50LCByZW1hcmsgYCtcblx0YEZST00gYXBwX2xvZyBXSEVSRSAxPTFgO1xuXG4vL0lOU0VSVCBSRUNPUkRcbmV4cG9ydCBjb25zdCBJTlNfQVBQX0xPR19TRUxFQ1RJVkUgPSBgSU5TRVJUIElOVE8gYXBwX2xvZyAobG9nX2lkLCBpbnNlcnRfYnksIGluc2VydF9kYXRlLCB1cGRhdGVfYnksIHVwZGF0ZV9kYXRlLCBjdXN0b21lcl9pZCwgY3VzdG9tZXJfc3RhdHVzLCBjcmVkaXRfc2NvcmUsIG51bWJlcl9vZl9sZW5kLCBudW1iZXJfb2ZfcmVudCkgVkFMVUVTID9gOyJdfQ==
