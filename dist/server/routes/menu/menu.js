"use strict";
/**
 * Created by Joojle on 10/04/18.
 */
var express = require("express");
var q_menu_1 = require("./q_menu");
var router = express.Router();
var db = require('../../database/db.service');
var authentication = require('../../utils/authentication');
// get all campgrounds
router.get('/menu', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).send({ message: err });
        }
        else {
            var params_1 = req.query;
            var record = void 0, query_line_1 = "";
            record = "" + q_menu_1.MENU_SELECTIVE;
            if (Object.keys(params_1).length > 0) {
                Object.keys(params_1).forEach(function (key, index) {
                    if (key === "menuId") {
                        var criteria = params_1.menuId === "" ? "" : " AND menu_id = " + ("'" + params_1.menuId + "'");
                        query_line_1 += criteria;
                    }
                    if (key === "markStatus") {
                        var criteria = params_1.markStatus === "" ? "" : " AND mark_status = " + ("'" + params_1.markStatus + "'");
                        query_line_1 += criteria;
                    }
                });
            }
            record += query_line_1;
            console.log("RECORD", record);
            connection.query(record, function (err, results) {
                connection.release();
                if (err) {
                    res.status(500).send({ message: err });
                }
                else {
                    res.send(results);
                }
            });
        }
    });
});
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZCBieSBKb29qbGUgb24gMTAvMDQvMTguXG4gKi9cblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE1FTlVfU0VMRUNUSVZFIH0gZnJvbSBcIi4vcV9tZW51XCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vLi4vZGF0YWJhc2UvZGIuc2VydmljZScpO1xuY29uc3QgYXV0aGVudGljYXRpb24gPSByZXF1aXJlKCcuLi8uLi91dGlscy9hdXRoZW50aWNhdGlvbicpO1xuXG4vLyBnZXQgYWxsIGNhbXBncm91bmRzXG5yb3V0ZXIuZ2V0KCcvbWVudScsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcmVxLnF1ZXJ5O1xuXG5cdFx0XHRsZXQgcmVjb3JkLCBxdWVyeV9saW5lID0gXCJcIjtcblxuXHRcdFx0cmVjb3JkID0gYCR7IE1FTlVfU0VMRUNUSVZFIH1gO1xuXG5cdFx0XHRpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gXCJtZW51SWRcIikge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3JpdGVyaWEgPSBwYXJhbXMubWVudUlkID09PSBcIlwiID8gXCJcIiA6IFwiIEFORCBtZW51X2lkID0gXCIgKyBgJyR7IHBhcmFtcy5tZW51SWQgfSdgO1xuXHRcdFx0XHRcdFx0cXVlcnlfbGluZSArPSBjcml0ZXJpYTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihrZXkgPT09IFwibWFya1N0YXR1c1wiKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IHBhcmFtcy5tYXJrU3RhdHVzID09PSBcIlwiID8gXCJcIiA6IFwiIEFORCBtYXJrX3N0YXR1cyA9IFwiICsgYCckeyBwYXJhbXMubWFya1N0YXR1cyB9J2A7XG5cdFx0XHRcdFx0XHRxdWVyeV9saW5lICs9IGNyaXRlcmlhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJlY29yZCArPSAgcXVlcnlfbGluZTtcblx0XHRcdGNvbnNvbGUubG9nKFwiUkVDT1JEXCIsIHJlY29yZCk7XG5cblx0XHRcdGNvbm5lY3Rpb24ucXVlcnkocmVjb3JkLCAoZXJyOiBhbnksIHJlc3VsdHM6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoe21lc3NhZ2U6IGVycn0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcy5zZW5kKHJlc3VsdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmV4cG9ydCA9IHJvdXRlcjsiXX0=
