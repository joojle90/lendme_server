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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlL2R1bXAvZGIuaW5zZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FFdUU7QUFFdkUsSUFBTSxTQUFTLEdBQUcsVUFBQyxFQUFPO0lBRXpCLElBQUksWUFBWSxHQUFhLEVBQUUsRUFBRSxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBRXZELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLGlDQUEwQixDQUFDO0lBQ2hELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLG1DQUE0QixDQUFDO0lBQ2xELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLGtDQUEyQixDQUFDO0lBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLCtCQUF3QixDQUFDO0lBQzlDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLGtDQUEyQixDQUFDO0lBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLGdDQUF5QixDQUFDO0lBQy9DLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFHLCtCQUF3QixDQUFDO0lBRTlDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNoQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsQ0FBQztRQUNsSCxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztLQUM1RixDQUFDO0lBRUYsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ2hCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENB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QSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLEdBQVE7NEJBQzVELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzt3QkFDRixDQUFDLENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiZGF0YWJhc2UvZHVtcC9kYi5pbnNlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTlNfQVBQX01FTlVfU0VMRUNUSVZFLCBJTlNfQVBQX01PRFVMRV9TRUxFQ1RJVkUsXG5cdElOU19BUFBfUFJPSkVDVF9TRUxFQ1RJVkUsIElOU19BUFBfUkVGQ09ERV9TRUxFQ1RJVkUsIElOU19BUFBfUkVGR1JPVVBfU0VMRUNUSVZFLFxuXHRJTlNfQVBQX1NUWUxFX1NFTEVDVElWRSwgSU5TX0FQUF9VU0VSX1NFTEVDVElWRSB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcblxuY29uc3QgZGJfaW5zZXJ0ID0gKGRiOiBhbnkpID0+IHtcblxuXHRsZXQgdGFibGVfaW5zZXJ0OiBzdHJpbmdbXSA9IFtdLCBpbnNlcnRfZGF0YTogYW55ID0gW107XG5cblx0dGFibGVfaW5zZXJ0WzBdID0gYCR7SU5TX0FQUF9NT0RVTEVfU0VMRUNUSVZFfWA7XG5cdHRhYmxlX2luc2VydFsxXSA9IGAke0lOU19BUFBfUkVGR1JPVVBfU0VMRUNUSVZFfWA7XG5cdHRhYmxlX2luc2VydFsyXSA9IGAke0lOU19BUFBfUkVGQ09ERV9TRUxFQ1RJVkV9YDtcblx0dGFibGVfaW5zZXJ0WzNdID0gYCR7SU5TX0FQUF9NRU5VX1NFTEVDVElWRX1gO1xuXHR0YWJsZV9pbnNlcnRbNF0gPSBgJHtJTlNfQVBQX1BST0pFQ1RfU0VMRUNUSVZFfWA7XG5cdHRhYmxlX2luc2VydFs1XSA9IGAke0lOU19BUFBfU1RZTEVfU0VMRUNUSVZFfWA7XG5cdHRhYmxlX2luc2VydFs2XSA9IGAke0lOU19BUFBfVVNFUl9TRUxFQ1RJVkV9YDtcblxuXHRpbnNlcnRfZGF0YVswXSA9IFtcblx0XHRbJ0FSJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FQUExJQ0FUSU9OIFJFRkVSRU5DRSBDT0RFJywgJ0FQUExJQ0FUSU9OIFJFRkVSRU5DRSBDT0RFJ10sXG5cdFx0WydNRicsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdNRU5VIEZPVU5EQVRJT04nLCAnTUVOVSBGT1VOREFUSU9OJ11cblx0XTtcblxuXHRpbnNlcnRfZGF0YVsxXSA9IFtcblx0XHRbJ0FSJywgJ01SS19TVFQnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTUFSSyBTVEFUVVMnLCAnUkVDT1JEIE1BUksgU1lTVEVNJ10sXG5cdFx0WydBUicsICdVU1JfTFZMJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1VTRVIgTEVWRUwnLCAnVVNFUiBMRVZFTCBTVEFUVVMnXSxcblx0XHRbJ0FSJywgJ1VTUl9UWVAnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnVVNFUiBUWVBFIEFQUExJQ0FUSU9OJywgJ1VTRVIgVFlQRSBBUFBMSUNBVElPTiBTVEFUVVMnXSxcblx0XHRbJ01GJywgJ01ETF9UWVAnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTU9EVUxFIFRZUEUnLCAnTU9EVUxFIFRZUEUgQVBQTElDQVRJT04nXVxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzJdID0gW1xuXHRcdFsnQVInLCAnTVJLX1NUVCcsICdOJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0luYWN0aXZlJywgJ0luYWN0aXZlIFN0YXR1cyddLFxuXHRcdFsnQVInLCAnTVJLX1NUVCcsICdZJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FjdGl2ZScsICdBY3RpdmUgU3RhdHVzJ10sXG5cdFx0WydBUicsICdVU1JfTFZMJywgJ1VTUl9DT00nLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnTm9ybWFsIFVzZXInLCAnTm9ybWFsIFVzZXIgQXBwbGljYXRpb24nXSxcblx0XHRbJ0FSJywgJ1VTUl9MVkwnLCAnU1lTX0NBUCcsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdNYWluIFN5c3RlbSBBZG1pbicsICdNYWluIFN5c3RlbSBBZG1pbiddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdBJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ0FkbWluJywgJ0FkbWluaXN0cmF0b3IgVXNlciddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdVJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1VzZXInLCAnVXNlciddLFxuXHRcdFsnQVInLCAnVVNSX1RZUCcsICdYJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgJ1N1cGVyIEFkbWluaXN0cmF0b3IgQXBwbGljYXRpb24nXSxcblx0XHRbJ01GJywgJ01ETF9UWVAnLCAnUCcsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdQYXJlbnQgTWVudScsICdQYXJlbnQgTWVudSBBcHBsaWNhdGlvbiddLFxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzNdID0gW1xuXHRcdFsnTE5NMDAxJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ01GJywgJ0NyZWF0ZSBVc2VyJywgJ0NyZWF0ZSBVc2VyIEFjY2VzcyBTeXN0ZW0nXVxuXHRdO1xuXG5cdGluc2VydF9kYXRhWzRdID0gW1xuXHRcdFsnTEVORF9NRScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdMRU5EIE1FJywgJ1BFRVIgVE8gUEVFUiBQTEFURk9STSBBUFBMSUNBVElPTicsICdsZW5kX21lLnBuZyddXG5cdF07XG5cblx0aW5zZXJ0X2RhdGFbNV0gPSBbXG5cdFx0WydiYWNrZ3JvdW5kJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRlNTRjOCwgIzhmOTRmYiknLCAnIzRlNTRjOCcsICcjZDBkMGQwJywgJyNmZmYnLCAnIzAwMCddLFxuXHRcdFsnY29sb3InLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnYmx1ZScsICcjZmZmJywgJyMwMDAnLCBudWxsLCBudWxsXSxcblx0XHRbJ2ZvbnQtc2l6ZScsICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICdTWVNBRE1JTicsIG5ldyBEYXRlKCksICcxMicsICcxNCcsICcxNicsIG51bGwsIG51bGxdLFxuXHRcdFsndGhlbWUnLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAnU1lTQURNSU4nLCBuZXcgRGF0ZSgpLCAncHJpbWFyeScsICdhY2NlbnQnLCAnd2FybicsICdtaXhpbi1pbmRpZ28nLCAnbWl4aW4tY3VzdG9tJ11cblx0XTtcblxuXHRpbnNlcnRfZGF0YVs2XSA9IFtcblx0XHRbJ2FkbWluJywgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1NZU0FETUlOJywgbmV3IERhdGUoKSwgJ1gnLCAnU1lTX0NBUCcsICdMRU5EX01FJywgJ2xlbmRtZScsICdMRU5EIE1FJywgJ0FETUlOJywgJ2FkbWluQGdtYWlsLmNvbScsICckMmEkMTAkTjRPejdzT1lwVlJIVS5EMEZlMHdKZU95M2tFMFRXRUZuRW5jdnlNSGViM0dzS3BQdm9qY1cnLCAnZGVmYXVsdCBwYXNzOiAxMjM0NSddXG5cdF07XG5cblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYXBwX21vZHVsZScsIChlcnI6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcblx0XHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgeCBpbiB0YWJsZV9pbnNlcnQpIHtcblx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkodGFibGVfaW5zZXJ0W3hdLCBbaW5zZXJ0X2RhdGFbeF1dLCAoZXJyOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgPSBkYl9pbnNlcnQ7Il19
