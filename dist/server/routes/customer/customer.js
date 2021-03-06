"use strict";
/**
 * Created by Joojle on 10/04/18.
 */
var express = require("express");
var q_customer_1 = require("./q_customer");
var router = express.Router();
var db = require('../../database/db.service');
var passport = require('passport');
var authentication = require('../../utils/authentication');
var jwt = require('jsonwebtoken');
var config = require('../../utils/config').SYSTEM_CONFIG;
var tokenList = {};
// get all customer
router.get('/customer', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).send({ message: err });
        }
        else {
            var params_1 = req.query;
            var record = void 0, query_line_1 = "";
            record = "" + q_customer_1.CUSTOMER_SELECTIVE;
            if (Object.keys(params_1).length > 0) {
                Object.keys(params_1).forEach(function (key, index) {
                    if (key === "dateStart") {
                        var criteria = params_1.dateStart === "" ? "" : " AND date(insert_date) >= " + ("'" + params_1.dateStart + "'");
                        query_line_1 += criteria;
                    }
                    if (key === "dateEnd") {
                        var criteria = params_1.dateEnd === "" ? "" : " AND date(insert_date) <= " + ("'" + params_1.dateEnd + "'");
                        query_line_1 += criteria;
                    }
                    if (key === "customerId") {
                        var criteria = params_1.customerId === "" ? "" : " AND customer_id = " + ("'" + params_1.customerId + "'");
                        query_line_1 += criteria;
                    }
                    if (key === "firstName") {
                        var criteria = params_1.firstName === "" ? "" : " AND first_name = " + ("'" + params_1.firstName + "'");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jdXN0b21lci9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxpQ0FBbUM7QUFDbkMsMkNBQWtEO0FBRWxELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNoRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFN0QsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMzRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFckIsbUJBQW1CO0FBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDMUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQVEsRUFBRSxVQUFlO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQU0sUUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFFekIsSUFBSSxNQUFNLFNBQUEsRUFBRSxZQUFVLEdBQUcsRUFBRSxDQUFDO1lBRTVCLE1BQU0sR0FBRyxLQUFJLCtCQUFxQixDQUFDO1lBRW5DLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNQLElBQU0sUUFBUSxHQUFHLFFBQU0sQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixHQUFHLENBQUMsR0FBRyxHQUFHLFFBQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzlHLFlBQVUsSUFBSSxRQUFRLENBQUM7b0JBQzNCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLElBQU0sUUFBUSxHQUFHLFFBQU0sQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixHQUFHLENBQUMsR0FBRyxHQUFHLFFBQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzFHLFlBQVUsSUFBSSxRQUFRLENBQUM7b0JBQzNCLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFNLFFBQVEsR0FBRyxRQUFNLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsSUFBRyxNQUFLLFFBQU0sQ0FBQyxVQUFVLE1BQUksQ0FBQSxDQUFDO3dCQUNwRyxZQUFVLElBQUksUUFBUSxDQUFDO29CQUN4QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFNLFFBQVEsR0FBRyxRQUFNLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsSUFBRyxNQUFLLFFBQU0sQ0FBQyxTQUFTLE1BQUksQ0FBQSxDQUFDO3dCQUNqRyxZQUFVLElBQUksUUFBUSxDQUFDO29CQUN4QixDQUFDO2dCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sSUFBSyxZQUFVLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtnQkFDL0MsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzL2N1c3RvbWVyL2N1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpvb2psZSBvbiAxMC8wNC8xOC5cbiAqL1xuXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ1VTVE9NRVJfU0VMRUNUSVZFIH0gZnJvbSBcIi4vcV9jdXN0b21lclwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uLy4uL2RhdGFiYXNlL2RiLnNlcnZpY2UnKTtcbmNvbnN0IHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcbmNvbnN0IGF1dGhlbnRpY2F0aW9uID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXV0aGVudGljYXRpb24nKTtcblxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb25maWcnKS5TWVNURU1fQ09ORklHO1xuY29uc3QgdG9rZW5MaXN0ID0ge307XG5cbi8vIGdldCBhbGwgY3VzdG9tZXJcbnJvdXRlci5nZXQoJy9jdXN0b21lcicsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcmVxLnF1ZXJ5O1xuXG5cdFx0XHRsZXQgcmVjb3JkLCBxdWVyeV9saW5lID0gXCJcIjtcblxuXHRcdFx0cmVjb3JkID0gYCR7IENVU1RPTUVSX1NFTEVDVElWRSB9YDtcblxuXHRcdFx0aWYoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGlmIChrZXkgPT09IFwiZGF0ZVN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyaXRlcmlhID0gcGFyYW1zLmRhdGVTdGFydCA9PT0gXCJcIiA/IFwiXCIgOiBcIiBBTkQgZGF0ZShpbnNlcnRfZGF0ZSkgPj0gXCIgKyAoXCInXCIgKyBwYXJhbXMuZGF0ZVN0YXJ0ICsgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlfbGluZSArPSBjcml0ZXJpYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImRhdGVFbmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JpdGVyaWEgPSBwYXJhbXMuZGF0ZUVuZCA9PT0gXCJcIiA/IFwiXCIgOiBcIiBBTkQgZGF0ZShpbnNlcnRfZGF0ZSkgPD0gXCIgKyAoXCInXCIgKyBwYXJhbXMuZGF0ZUVuZCArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5X2xpbmUgKz0gY3JpdGVyaWE7XG4gICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBcImN1c3RvbWVySWRcIikge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3JpdGVyaWEgPSBwYXJhbXMuY3VzdG9tZXJJZCA9PT0gXCJcIiA/IFwiXCIgOiBcIiBBTkQgY3VzdG9tZXJfaWQgPSBcIiArIGAnJHsgcGFyYW1zLmN1c3RvbWVySWQgfSdgO1xuXHRcdFx0XHRcdFx0cXVlcnlfbGluZSArPSBjcml0ZXJpYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gXCJmaXJzdE5hbWVcIikge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3JpdGVyaWEgPSBwYXJhbXMuZmlyc3ROYW1lID09PSBcIlwiID8gXCJcIiA6IFwiIEFORCBmaXJzdF9uYW1lID0gXCIgKyBgJyR7IHBhcmFtcy5maXJzdE5hbWUgfSdgO1xuXHRcdFx0XHRcdFx0cXVlcnlfbGluZSArPSBjcml0ZXJpYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWNvcmQgKz0gIHF1ZXJ5X2xpbmU7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJFQ09SRFwiLCByZWNvcmQpO1xuXG5cdFx0XHRjb25uZWN0aW9uLnF1ZXJ5KHJlY29yZCwgKGVycjogYW55LCByZXN1bHRzOiBhbnkpID0+IHtcblx0XHRcdFx0Y29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXMuc2VuZChyZXN1bHRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5leHBvcnQgPSByb3V0ZXI7Il19
