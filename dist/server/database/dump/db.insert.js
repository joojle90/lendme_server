"use strict";
var routes_1 = require("../../routes");
var db_insert = function (db) {
    var table_insert = [], insert_data = [];
    table_insert[0] = "" + routes_1.INS_APP_MODULE_SELECTIVE;
    table_insert[1] = "" + routes_1.INS_APP_REFGROUP_SELECTIVE;
    table_insert[2] = "" + routes_1.INS_APP_REFCODE_SELECTIVE;
    table_insert[3] = "" + routes_1.INS_APP_MENU_SELECTIVE;
    table_insert[4] = "" + routes_1.INS_APP_PROJECT_SELECTIVE;
    table_insert[5] = "" + routes_1.INS_APP_STYLE_SELECTIVE;
    table_insert[6] = "" + routes_1.INS_APP_USER_SELECTIVE;
    table_insert[7] = "" + routes_1.INS_APP_CUSTOMER_SELECTIVE;
    table_insert[8] = "" + routes_1.INS_APP_AUDIT_SELECTIVE;
    table_insert[9] = "" + routes_1.INS_APP_LOG_SELECTIVE;
    insert_data[0] = [
        ['AR', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'APPLICATION REFERENCE CODE', 'APPLICATION REFERENCE CODE'],
        ['MF', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MENU FOUNDATION', 'MENU FOUNDATION']
    ];
    insert_data[1] = [
        ['AR', 'MRK_STT', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MARK STATUS', 'RECORD MARK SYSTEM'],
        ['AR', 'USR_LVL', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'USER LEVEL', 'USER LEVEL STATUS'],
        ['AR', 'USR_TYP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'USER TYPE APPLICATION', 'USER TYPE APPLICATION STATUS'],
        ['MF', 'MDL_TYP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MODULE TYPE', 'MODULE TYPE APPLICATION']
    ];
    insert_data[2] = [
        ['AR', 'MRK_STT', 'N', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Inactive', 'Inactive Status'],
        ['AR', 'MRK_STT', 'Y', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Active', 'Active Status'],
        ['AR', 'USR_LVL', 'USR_COM', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Normal User', 'Normal User Application'],
        ['AR', 'USR_LVL', 'SYS_CAP', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Main System Admin', 'Main System Admin'],
        ['AR', 'USR_TYP', 'A', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Admin', 'Administrator User'],
        ['AR', 'USR_TYP', 'U', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'User', 'User'],
        ['AR', 'USR_TYP', 'X', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'SYSADMIN', 'Super Administrator Application'],
        ['MF', 'MDL_TYP', 'P', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Parent Menu', 'Parent Menu Application'],
    ];
    insert_data[3] = [
        ['LNM001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'MF', 'Create User', 'Create User Access System']
    ];
    insert_data[4] = [
        ['LEND_ME', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'LEND ME', 'PEER TO PEER PLATFORM APPLICATION', 'lend_me.png']
    ];
    insert_data[5] = [
        ['background', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'linear-gradient(to right, #4e54c8, #8f94fb)', '#4e54c8', '#d0d0d0', '#fff', '#000'],
        ['color', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'blue', '#fff', '#000', null, null],
        ['font-size', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), '12', '14', '16', null, null],
        ['theme', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'primary', 'accent', 'warn', 'mixin-indigo', 'mixin-custom']
    ];
    insert_data[6] = [
        ['admin', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'X', 'SYS_CAP', 'LEND_ME', 'lendme', 'LEND ME', 'ADMIN', 'admin@gmail.com', '$2a$10$N4Oz7sOYpVRHU.D0Fe0wJeOy3kE0TWEFnEncvyMHeb3GsKpPvojcW', 'default pass: 12345']
    ];
    insert_data[7] = [
        ['CID001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Ahmad', 'Bin Ismail', '900218-1039-0192', '1990-02-18 00:00:00', 'M', 4, 'No 15.', 'Block 6 Taman Putra', '', '43000', 'Kajang', 'Selangor', 'Malaysia', '+60182909212', 'ahmad@gmail.com', '+60192321290'],
        ['CID002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Mark', 'Anthony', 'B12678191', '1980-12-19 00:00:00', 'M', 4, '15-1. Block B', 'Damansara City', '', '56280', 'Petaling Jaya', 'Selangor', 'Malaysia', '+60178192301', 'markanthony@gmail.com', '+60111823901'],
        ['CID003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Siti', 'Jamal', '780128-0909-1293', '1978-01-28 00:00:00', 'F', 3, 'Block F. No 12', 'Jalan Taman Desa', 'Presint 14', '52019', 'Putrajaya', 'Putrajaya', 'Malaysia', '+60168123812', 'sitijamal@gmail.com', '+60129899011'],
        ['CID004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Sri', 'Rahman', '851006-1892-0912', '1985-10-06 00:00:00', 'F', 5, 'No 29', 'Jalan Patani Impian', 'Desa Patani', '89720', 'Kota Baharu', 'Kelantan', 'Malaysia', '+60182139123', 'srirahman@yahoo.com', '+60189128192'],
        ['CID005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'Muhammad', 'Abrar', 'A01293321', '1981-04-20 00:00:00', 'M', 4, 'No 18', '12/5 Block C', 'Taman Tropika 3', '43600', 'Bangi', 'Selangor', 'Malaysia', '+60121231310', 'muhammadabrar@yahoo.com', '+60192183101']
    ];
    insert_data[8] = [
        ['ADT001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID001', 'CID005', 'RENT', 4700, 4, 'On Progress', 2],
        ['ADT002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'CID002', 'RENT', 5500, 5, 'On Progress', 6],
        ['ADT003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID003', 'CID004', 'LEND', 3000, 4, 'Done', 3],
        ['ADT004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'CID003', 'LEND', 10000, 6, 'On Progress', 5],
        ['ADT005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID002', 'CID004', 'RENT', 2000, 3, 'On Progress', 2]
    ];
    insert_data[9] = [
        ['LOG001', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID004', 'TRUSTED', 9, 10, 0],
        ['LOG002', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID005', 'TRUSTED', 8, 14, 3],
        ['LOG003', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID002', 'TRUSTED', 8, 7, 1],
        ['LOG004', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID001', 'AVERAGE', 6, 4, 3],
        ['LOG005', 'SYSADMIN', new Date(), 'SYSADMIN', new Date(), 'CID003', 'FAKE', 3, 0, 5]
    ];
    db.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
        }
        else {
            connection.query('SELECT * FROM app_module', function (err, result) {
                if (result.length == 0) {
                    for (var x in table_insert) {
                        connection.query(table_insert[x], [insert_data[x]], function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
            });
            connection.release();
        }
    });
};
module.exports = db_insert;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsYUFBYSxDQUFDLFVBQUMsR0FBUSxFQUFFLFVBQWU7UUFDMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsVUFBVSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxVQUFDLEdBQVEsRUFBRSxNQUFXO2dCQUNsRSxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQzVCLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQyxHQUFROzRCQUM1RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2xCLENBQUM7d0JBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6ImRhdGFiYXNlL2R1bXAvZGIuaW5zZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5TX0FQUF9NRU5VX1NFTEVDVElWRSwgSU5TX0FQUF9NT0RVTEVfU0VMRUNUSVZFLFxuXHRJTlNfQVBQX1BST0pFQ1RfU0VMRUNUSVZFLCBJTlNfQVBQX1JFRkNPREVfU0VMRUNUSVZFLCBJTlNfQVBQX1JFRkdST1VQX1NFTEVDVElWRSxcblx0SU5TX0FQUF9TVFlMRV9TRUxFQ1RJVkUsIElOU19BUFBfVVNFUl9TRUxFQ1RJVkUsIElOU19BUFBfQ1VTVE9NRVJfU0VMRUNUSVZFLCBJTlNfQVBQX0FVRElUX1NFTEVDVElWRSxcblx0SU5TX0FQUF9MT0dfU0VMRUNUSVZFIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuXG5jb25zdCBkYl9pbnNlcnQgPSAoZGI6IGFueSkgPT4ge1xuXG5cdGxldCB0YWJsZV9pbnNlcnQ6IHN0cmluZ1tdID0gW10sIGluc2VydF9kYXRhOiBhbnkgPSBbXTtcblxuXHR0YWJsZV9pbnNlcnRbMF0gPSBgJHtJTlNfQVBQX01PRFVMRV9TRUxFQ1RJVkV9YDtcblx0dGFibGVfaW5zZXJ0WzFdID0gYCR7SU5TX0FQUF9SRUZHUk9VUF9TRUxFQ1RJVkV9YDtcblx0dGFibGVfaW5zZXJ0WzJdID0gYCR7SU5TX0FQUF9SRUZDT0RFX1NFTEVDVElWRX1gO1xuXHR0YWJsZV9pbnNlcnRbM10gPSBgJHtJTlNfQVBQX01FTlVfU0VMRUNUSVZFfWA7XG5cdHRhYmxlX2luc2VydFs0XSA9IGAke0lOU19BUFBfUFJPSkVDVF9TRUxFQ1RJVkV9YDtcblx0dGFibGVfaW5zZXJ0WzVdID0gYCR7SU5TX0FQUF9TVFlMRV9TRUxFQ1RJVkV9YDtcblx0dGFibGVfaW5zZXJ0WzZdID0gYCR7SU5TX0FQUF9VU0VSX1NFTEVDVElWRX1gO1xuXHR0YWJsZV9pbnNlcnRbN10gPSBgJHtJTlNfQVBQX0NVU1RPTUVSX1NFTEVDVElWRX1gO1xuXHR0YWJsZV9pbnNlcnRbOF0gPSBgJHtJTlNfQVBQX0FVRElUX1NFTEVDVElWRX1gO1xuXHR0YWJsZV9pbnNlcnRbOV0gPSBgJHtJTlNfQVBQX0xPR19TRUxFQ1RJVkV9YDtcblxuXHRpbnNlcnRfZGF0YVswXSA9IFtcblx0XHRbJ0FSJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FQUExJQ0FUSU9OIFJFRkVSRU5DRSBDT0RFJywgJ0FQUExJQ0FUSU9OIFJFRkVSRU5DRSBDT0RFJ10sXG5cdFx0WydNRicsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdNRU5VIEZPVU5EQVRJT04nLCAnTUVOVSBGT1VOREFUSU9OJ11cblx0XTtcblxuXHRpbnNlcnRfZGF0YVsxXSA9IFtcblx0XHRbJ0FSJywgJ01SS19TVFQnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTUFSSyBTVEFUVVMnLCAnUkVDT1JEIE1BUksgU1lTVEVNJ10sXG5cdFx0WydBUicsICdVU1JfTFZMJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1VTRVIgTEVWRUwnLCAnVVNFUiBMRVZFTCBTVEFUVVMnXSxcblx0XHRbJ0FSJywgJ1VTUl9UWVAnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnVVNFUiBUWVBFIEFQUExJQ0FUSU9OJywgJ1VTRVIgVFlQRSBBUFBMSUNBVElPTiBTVEFUVVMnXSxcblx0XHRbJ01GJywgJ01ETF9UWVAnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTU9EVUxFIFRZUEUnLCAnTU9EVUxFIFRZUEUgQVBQTElDQVRJT04nXVxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzJdID0gW1xuXHRcdFsnQVInLCAnTVJLX1NUVCcsICdOJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0luYWN0aXZlJywgJ0luYWN0aXZlIFN0YXR1cyddLFxuXHRcdFsnQVInLCAnTVJLX1NUVCcsICdZJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FjdGl2ZScsICdBY3RpdmUgU3RhdHVzJ10sXG5cdFx0WydBUicsICdVU1JfTFZMJywgJ1VTUl9DT00nLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTm9ybWFsIFVzZXInLCAnTm9ybWFsIFVzZXIgQXBwbGljYXRpb24nXSxcblx0XHRbJ0FSJywgJ1VTUl9MVkwnLCAnU1lTX0NBUCcsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdNYWluIFN5c3RlbSBBZG1pbicsICdNYWluIFN5c3RlbSBBZG1pbiddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdBJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FkbWluJywgJ0FkbWluaXN0cmF0b3IgVXNlciddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdVJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1VzZXInLCAnVXNlciddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdYJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgJ1N1cGVyIEFkbWluaXN0cmF0b3IgQXBwbGljYXRpb24nXSxcblx0XHRbJ01GJywgJ01ETF9UWVAnLCAnUCcsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdQYXJlbnQgTWVudScsICdQYXJlbnQgTWVudSBBcHBsaWNhdGlvbiddLFxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzNdID0gW1xuXHRcdFsnTE5NMDAxJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ01GJywgJ0NyZWF0ZSBVc2VyJywgJ0NyZWF0ZSBVc2VyIEFjY2VzcyBTeXN0ZW0nXVxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzRdID0gW1xuXHRcdFsnTEVORF9NRScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdMRU5EIE1FJywgJ1BFRVIgVE8gUEVFUiBQTEFURk9STSBBUFBMSUNBVElPTicsICdsZW5kX21lLnBuZyddXG5cdF07XG5cblx0aW5zZXJ0X2RhdGFbNV0gPSBbXG5cdFx0WydiYWNrZ3JvdW5kJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRlNTRjOCwgIzhmOTRmYiknLCAnIzRlNTRjOCcsICcjZDBkMGQwJywgJyNmZmYnLCAnIzAwMCddLFxuXHRcdFsnY29sb3InLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnYmx1ZScsICcjZmZmJywgJyMwMDAnLCBudWxsLCBudWxsXSxcblx0XHRbJ2ZvbnQtc2l6ZScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICcxMicsICcxNCcsICcxNicsIG51bGwsIG51bGxdLFxuXHRcdFsndGhlbWUnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAncHJpbWFyeScsICdhY2NlbnQnLCAnd2FybicsICdtaXhpbi1pbmRpZ28nLCAnbWl4aW4tY3VzdG9tJ11cblx0XTtcblxuXHRpbnNlcnRfZGF0YVs2XSA9IFtcblx0XHRbJ2FkbWluJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1gnLCAnU1lTX0NBUCcsICdMRU5EX01FJywgJ2xlbmRtZScsICdMRU5EIE1FJywgJ0FETUlOJywgJ2FkbWluQGdtYWlsLmNvbScsICckMmEkMTAkTjRPejdzT1lwVlJIVS5EMEZlMHdKZU95M2tFMFRXRUZuRW5jdnlNSGViM0dzS3BQdm9qY1cnLCAnZGVmYXVsdCBwYXNzOiAxMjM0NSddXG5cdF07XG5cblx0aW5zZXJ0X2RhdGFbN10gPSBbXG5cdFx0WydDSUQwMDEnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnQWhtYWQnLCAnQmluIElzbWFpbCcsICc5MDAyMTgtMTAzOS0wMTkyJywgJzE5OTAtMDItMTggMDA6MDA6MDAnLCAnTScsIDQsICdObyAxNS4nLCAnQmxvY2sgNiBUYW1hbiBQdXRyYScsICcnLCAnNDMwMDAnLCAnS2FqYW5nJywgJ1NlbGFuZ29yJywgJ01hbGF5c2lhJywgJys2MDE4MjkwOTIxMicsICdhaG1hZEBnbWFpbC5jb20nLCAnKzYwMTkyMzIxMjkwJ10sXG5cdFx0WydDSUQwMDInLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTWFyaycsICdBbnRob255JywgJ0IxMjY3ODE5MScsICcxOTgwLTEyLTE5IDAwOjAwOjAwJywgJ00nLCA0LCAnMTUtMS4gQmxvY2sgQicsICdEYW1hbnNhcmEgQ2l0eScsICcnLCAnNTYyODAnLCAnUGV0YWxpbmcgSmF5YScsICdTZWxhbmdvcicsICdNYWxheXNpYScsICcrNjAxNzgxOTIzMDEnLCAnbWFya2FudGhvbnlAZ21haWwuY29tJywgJys2MDExMTgyMzkwMSddLFxuXHRcdFsnQ0lEMDAzJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NpdGknLCAnSmFtYWwnLCAnNzgwMTI4LTA5MDktMTI5MycsICcxOTc4LTAxLTI4IDAwOjAwOjAwJywgJ0YnLCAzLCAnQmxvY2sgRi4gTm8gMTInLCAnSmFsYW4gVGFtYW4gRGVzYScsICdQcmVzaW50IDE0JywgJzUyMDE5JywgJ1B1dHJhamF5YScsICdQdXRyYWpheWEnLCAnTWFsYXlzaWEnLCAnKzYwMTY4MTIzODEyJywgJ3NpdGlqYW1hbEBnbWFpbC5jb20nLCAnKzYwMTI5ODk5MDExJ10sXG5cdFx0WydDSUQwMDQnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU3JpJywgJ1JhaG1hbicsICc4NTEwMDYtMTg5Mi0wOTEyJywgJzE5ODUtMTAtMDYgMDA6MDA6MDAnLCAnRicsIDUsICdObyAyOScsICdKYWxhbiBQYXRhbmkgSW1waWFuJywgJ0Rlc2EgUGF0YW5pJywgJzg5NzIwJywgJ0tvdGEgQmFoYXJ1JywgJ0tlbGFudGFuJywgJ01hbGF5c2lhJywgJys2MDE4MjEzOTEyMycsICdzcmlyYWhtYW5AeWFob28uY29tJywgJys2MDE4OTEyODE5MiddLFxuXHRcdFsnQ0lEMDA1JywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ011aGFtbWFkJywgJ0FicmFyJywgJ0EwMTI5MzMyMScsICcxOTgxLTA0LTIwIDAwOjAwOjAwJywgJ00nLCA0LCAnTm8gMTgnLCAnMTIvNSBCbG9jayBDJywgJ1RhbWFuIFRyb3Bpa2EgMycsICc0MzYwMCcsICdCYW5naScsICdTZWxhbmdvcicsICdNYWxheXNpYScsICcrNjAxMjEyMzEzMTAnLCAnbXVoYW1tYWRhYnJhckB5YWhvby5jb20nLCAnKzYwMTkyMTgzMTAxJ11cblx0XTtcblxuXHRpbnNlcnRfZGF0YVs4XSA9IFtcblx0XHRbJ0FEVDAwMScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdDSUQwMDEnLCAnQ0lEMDA1JywgJ1JFTlQnLCA0NzAwLCA0LCAnT24gUHJvZ3Jlc3MnLCAyXSxcblx0XHRbJ0FEVDAwMicsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdDSUQwMDUnLCAnQ0lEMDAyJywgJ1JFTlQnLCA1NTAwLCA1LCAnT24gUHJvZ3Jlc3MnLCA2XSxcblx0XHRbJ0FEVDAwMycsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdDSUQwMDMnLCAnQ0lEMDA0JywgJ0xFTkQnLCAzMDAwLCA0LCAnRG9uZScsIDNdLFxuXHRcdFsnQURUMDA0JywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0NJRDAwNScsICdDSUQwMDMnLCAnTEVORCcsIDEwMDAwLCA2LCAnT24gUHJvZ3Jlc3MnLCA1XSxcblx0XHRbJ0FEVDAwNScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdDSUQwMDInLCAnQ0lEMDA0JywgJ1JFTlQnLCAyMDAwLCAzLCAnT24gUHJvZ3Jlc3MnLCAyXVxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzldID0gW1xuXHRcdFsnTE9HMDAxJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0NJRDAwNCcsICdUUlVTVEVEJywgOSwgMTAsIDBdLFxuXHRcdFsnTE9HMDAyJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0NJRDAwNScsICdUUlVTVEVEJywgOCwgMTQsIDNdLFxuXHRcdFsnTE9HMDAzJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0NJRDAwMicsICdUUlVTVEVEJywgOCwgNywgMV0sXG5cdFx0WydMT0cwMDQnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnQ0lEMDAxJywgJ0FWRVJBR0UnLCA2LCA0LCAzXSxcblx0XHRbJ0xPRzAwNScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdDSUQwMDMnLCAnRkFLRScsIDMsIDAsIDVdXG5cdF07XG5cblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYXBwX21vZHVsZScsIChlcnI6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcblx0XHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgeCBpbiB0YWJsZV9pbnNlcnQpIHtcblx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkodGFibGVfaW5zZXJ0W3hdLCBbaW5zZXJ0X2RhdGFbeF1dLCAoZXJyOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgPSBkYl9pbnNlcnQ7Il19
