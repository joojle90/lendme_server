"use strict";
/**
 * Created by Joojle on 10/04/18.
 */
var express = require("express");
var q_project_1 = require("./q_project");
var router = express.Router();
var db = require('../../database/db.service');
var authentication = require('../../utils/authentication');
// get all campgrounds
router.get('/project', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).send({ message: err });
        }
        else {
            var params_1 = req.query;
            var record = void 0, query_line_1 = "";
            record = "" + q_project_1.PROJECT_SELECTIVE;
            if (Object.keys(params_1).length > 0) {
                Object.keys(params_1).forEach(function (key, index) {
                    if (key === "projectCode") {
                        var criteria = params_1.projectCode === "" ? "" : " AND project_code = " + ("'" + params_1.projectCode + "'");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9wcm9qZWN0L3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBRUgsaUNBQW1DO0FBQ25DLHlDQUFnRDtBQUVoRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDaEQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFN0Qsc0JBQXNCO0FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDekMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQVEsRUFBRSxVQUFlO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQU0sUUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFFekIsSUFBSSxNQUFNLFNBQUEsRUFBRSxZQUFVLEdBQUcsRUFBRSxDQUFDO1lBRTVCLE1BQU0sR0FBRyxLQUFJLDZCQUFvQixDQUFDO1lBRWxDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFNLFFBQVEsR0FBRyxRQUFNLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsSUFBRyxNQUFLLFFBQU0sQ0FBQyxXQUFXLE1BQUksQ0FBQSxDQUFDO3dCQUN2RyxZQUFVLElBQUksUUFBUSxDQUFDO29CQUN4QixDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFNLFFBQVEsR0FBRyxRQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsSUFBRyxNQUFLLFFBQU0sQ0FBQyxVQUFVLE1BQUksQ0FBQSxDQUFDO3dCQUNwRyxZQUFVLElBQUksUUFBUSxDQUFDO29CQUN4QixDQUFDO2dCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sSUFBSyxZQUFVLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtnQkFDL0MsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzL3Byb2plY3QvcHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb29qbGUgb24gMTAvMDQvMTguXG4gKi9cblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBST0pFQ1RfU0VMRUNUSVZFIH0gZnJvbSBcIi4vcV9wcm9qZWN0XCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vLi4vZGF0YWJhc2UvZGIuc2VydmljZScpO1xuY29uc3QgYXV0aGVudGljYXRpb24gPSByZXF1aXJlKCcuLi8uLi91dGlscy9hdXRoZW50aWNhdGlvbicpO1xuXG4vLyBnZXQgYWxsIGNhbXBncm91bmRzXG5yb3V0ZXIuZ2V0KCcvcHJvamVjdCcsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcmVxLnF1ZXJ5O1xuXG5cdFx0XHRsZXQgcmVjb3JkLCBxdWVyeV9saW5lID0gXCJcIjtcblxuXHRcdFx0cmVjb3JkID0gYCR7IFBST0pFQ1RfU0VMRUNUSVZFIH1gO1xuXG5cdFx0XHRpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gXCJwcm9qZWN0Q29kZVwiKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IHBhcmFtcy5wcm9qZWN0Q29kZSA9PT0gXCJcIiA/IFwiXCIgOiBcIiBBTkQgcHJvamVjdF9jb2RlID0gXCIgKyBgJyR7IHBhcmFtcy5wcm9qZWN0Q29kZSB9J2A7XG5cdFx0XHRcdFx0XHRxdWVyeV9saW5lICs9IGNyaXRlcmlhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGtleSA9PT0gXCJtYXJrU3RhdHVzXCIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNyaXRlcmlhID0gcGFyYW1zLm1hcmtTdGF0dXMgPT09IFwiXCIgPyBcIlwiIDogXCIgQU5EIG1hcmtfc3RhdHVzID0gXCIgKyBgJyR7IHBhcmFtcy5tYXJrU3RhdHVzIH0nYDtcblx0XHRcdFx0XHRcdHF1ZXJ5X2xpbmUgKz0gY3JpdGVyaWE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmVjb3JkICs9ICBxdWVyeV9saW5lO1xuXHRcdFx0Y29uc29sZS5sb2coXCJSRUNPUkRcIiwgcmVjb3JkKTtcblxuXHRcdFx0Y29ubmVjdGlvbi5xdWVyeShyZWNvcmQsIChlcnI6IGFueSwgcmVzdWx0czogYW55KSA9PiB7XG5cdFx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG5cdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogZXJyfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzLnNlbmQocmVzdWx0cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuZXhwb3J0ID0gcm91dGVyOyJdfQ==