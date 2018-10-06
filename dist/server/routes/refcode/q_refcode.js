"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//SELECT RECORD
exports.REF_CODE_SELECTIVE = "SELECT module_id, ref_group, ref_code, full_desc, mark_status, remark " +
    "FROM app_refcode WHERE 1=1";
//INSERT RECORD
exports.INS_APP_REFCODE_SELECTIVE = "INSERT INTO app_refcode (module_id, ref_group, ref_code, insert_by, insert_date, update_by, update_date, full_desc, full_desc_english) VALUES ?";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9yZWZjb2RlL3FfcmVmY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWU7QUFDRixRQUFBLGtCQUFrQixHQUFHLHdFQUF3RTtJQUN6Ryw0QkFBNEIsQ0FBQztBQUU5QixlQUFlO0FBQ0YsUUFBQSx5QkFBeUIsR0FBRyxpSkFBaUosQ0FBQyIsImZpbGUiOiJyb3V0ZXMvcmVmY29kZS9xX3JlZmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NFTEVDVCBSRUNPUkRcbmV4cG9ydCBjb25zdCBSRUZfQ09ERV9TRUxFQ1RJVkUgPSBgU0VMRUNUIG1vZHVsZV9pZCwgcmVmX2dyb3VwLCByZWZfY29kZSwgZnVsbF9kZXNjLCBtYXJrX3N0YXR1cywgcmVtYXJrIGArXG5cdGBGUk9NIGFwcF9yZWZjb2RlIFdIRVJFIDE9MWA7XG5cbi8vSU5TRVJUIFJFQ09SRFxuZXhwb3J0IGNvbnN0IElOU19BUFBfUkVGQ09ERV9TRUxFQ1RJVkUgPSBgSU5TRVJUIElOVE8gYXBwX3JlZmNvZGUgKG1vZHVsZV9pZCwgcmVmX2dyb3VwLCByZWZfY29kZSwgaW5zZXJ0X2J5LCBpbnNlcnRfZGF0ZSwgdXBkYXRlX2J5LCB1cGRhdGVfZGF0ZSwgZnVsbF9kZXNjLCBmdWxsX2Rlc2NfZW5nbGlzaCkgVkFMVUVTID9gOyJdfQ==