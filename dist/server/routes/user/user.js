"use strict";
/**
 * Created by Joojle on 10/04/18.
 */
var express = require("express");
var q_user_1 = require("./q_user");
var router = express.Router();
var db = require('../../database/db.service');
var passport = require('passport');
var authentication = require('../../utils/authentication');
var jwt = require('jsonwebtoken');
var config = require('../../utils/config').SYSTEM_CONFIG;
var tokenList = {};
router.post('/login', function (req, res) {
    var postData = req.body;
    var user = {
        "email": postData.email,
        "name": postData.name
    };
    console.log("postData login", postData);
    console.log("user details login", user);
    // do the database authentication here, with user name and password combination.
    var token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
    var refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });
    var response = {
        "status": "Logged in",
        "token": token,
        "refreshToken": refreshToken,
    };
    tokenList[refreshToken] = response;
    res.status(200).json(response);
});
router.post('/sign-in', function (req, res, next) {
    var postRequest = req.body;
    var user = {
        "userId": postRequest.params.userId,
        "password": postRequest.params.password
    };
    console.log("user details signin", user);
    // do the database authentication here, with user name and password combination.
    passport.authenticate('local-sign-in', function (err, user, info) {
        console.log("user", user);
        user = true;
        if (err) {
            return res.status(401).send({ message: err.message });
        }
        if (!user) {
            return res.status(401).send({ message: info.message });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(401).send({ message: err.message });
            }
            console.log("req.user", req.user);
            return res.status(200).json(req.user);
        });
    })(req, res, next);
    var token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
    var refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });
    var response = {
        "status": "Logged in",
        "token": token,
        "refreshToken": refreshToken,
    };
    tokenList[refreshToken] = response;
    res.status(200).json(response);
});
/*router.post('/sign-in', (req: any, res: any, next: any) => {
    console.log('---- User login: here');
    console.log("passport", passport);
    passport.authenticate('local-sign-in', (err: any, user: any, info: any) => {
        console.log("req", req.logIn);
        console.log("user", user);
        console.log("req.user", req.user);
        if (err) {
            return res.status(401).send({message: err.message});
        }
        if (!user) {
            return res.status(401).send({message: info.message});
        }
        req.logIn(user, (err: any) => {
            if (err) {
                return res.status(401).send({message: err.message});
            }

            let milliseconds = 0;
            if (req.body.remember) {
                milliseconds = 1000 * 60 * 30; // 30 minutes

                req.session.cookie.expires = new Date(Date.now() + milliseconds);
                req.session.cookie.maxAge = milliseconds;
            } else {
                milliseconds = 1000 * 60 * 60 * 24; // 1 day

                req.session.cookie.expires = new Date(Date.now() + milliseconds);
                req.session.cookie.maxAge = milliseconds;
            }
            console.log("req.user", req.user);
            return res.status(200).json(req.user);
        });
    })(req, res, next);
});*/
router.use(require('../../utils/token-checker'));
// get all user
router.get('/user', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).send({ message: err });
        }
        else {
            var params_1 = req.query;
            var record = void 0, query_line_1 = "";
            record = "" + q_user_1.USER_SELECTIVE;
            if (Object.keys(params_1).length > 0) {
                Object.keys(params_1).forEach(function (key, index) {
                    if (key === "userId") {
                        var criteria = params_1.userId === "" ? "" : " AND user_id = " + ("'" + params_1.userId + "'");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxpQkFBaUIsSUFBRyxNQUFLLFFBQU0sQ0FBQyxNQUFNLE1BQUksQ0FBQSxDQUFDO3dCQUN4RixZQUFVLElBQUksUUFBUSxDQUFDO29CQUN4QixDQUFDO2dCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sSUFBSyxZQUFVLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFOUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtnQkFDL0MsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzL3VzZXIvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb29qbGUgb24gMTAvMDQvMTguXG4gKi9cblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFVTRVJfU0VMRUNUSVZFIH0gZnJvbSBcIi4vcV91c2VyXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vLi4vZGF0YWJhc2UvZGIuc2VydmljZScpO1xuY29uc3QgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xuY29uc3QgYXV0aGVudGljYXRpb24gPSByZXF1aXJlKCcuLi8uLi91dGlscy9hdXRoZW50aWNhdGlvbicpO1xuXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbmZpZycpLlNZU1RFTV9DT05GSUc7XG5jb25zdCB0b2tlbkxpc3QgPSB7fTtcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXE6YW55ICxyZXM6YW55KSA9PiB7XG5cdGNvbnN0IHBvc3REYXRhID0gcmVxLmJvZHk7XG5cdGNvbnN0IHVzZXIgPSB7XG5cdFx0XCJlbWFpbFwiOiBwb3N0RGF0YS5lbWFpbCxcblx0XHRcIm5hbWVcIjogcG9zdERhdGEubmFtZVxuXHR9O1xuXHRjb25zb2xlLmxvZyhcInBvc3REYXRhIGxvZ2luXCIsIHBvc3REYXRhKTtcblx0Y29uc29sZS5sb2coXCJ1c2VyIGRldGFpbHMgbG9naW5cIiwgdXNlcik7XG5cdC8vIGRvIHRoZSBkYXRhYmFzZSBhdXRoZW50aWNhdGlvbiBoZXJlLCB3aXRoIHVzZXIgbmFtZSBhbmQgcGFzc3dvcmQgY29tYmluYXRpb24uXG5cdGNvbnN0IHRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLnNlY3JldCwgeyBleHBpcmVzSW46IGNvbmZpZy50b2tlbkxpZmV9KTtcblx0Y29uc3QgcmVmcmVzaFRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLnJlZnJlc2hUb2tlblNlY3JldCwgeyBleHBpcmVzSW46IGNvbmZpZy5yZWZyZXNoVG9rZW5MaWZlfSk7XG5cdGNvbnN0IHJlc3BvbnNlID0ge1xuXHRcdFwic3RhdHVzXCI6IFwiTG9nZ2VkIGluXCIsXG5cdFx0XCJ0b2tlblwiOiB0b2tlbixcblx0XHRcInJlZnJlc2hUb2tlblwiOiByZWZyZXNoVG9rZW4sXG5cdH07XG5cdHRva2VuTGlzdFtyZWZyZXNoVG9rZW5dID0gcmVzcG9uc2U7XG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL3NpZ24taW4nLCAocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiBhbnkpID0+IHtcblx0Y29uc3QgcG9zdFJlcXVlc3QgPSByZXEuYm9keTtcblx0Y29uc3QgdXNlciA9IHtcblx0XHRcInVzZXJJZFwiOiBwb3N0UmVxdWVzdC5wYXJhbXMudXNlcklkLFxuXHRcdFwicGFzc3dvcmRcIjogcG9zdFJlcXVlc3QucGFyYW1zLnBhc3N3b3JkXG5cdH07XG5cblx0Y29uc29sZS5sb2coXCJ1c2VyIGRldGFpbHMgc2lnbmluXCIsIHVzZXIpO1xuXHQvLyBkbyB0aGUgZGF0YWJhc2UgYXV0aGVudGljYXRpb24gaGVyZSwgd2l0aCB1c2VyIG5hbWUgYW5kIHBhc3N3b3JkIGNvbWJpbmF0aW9uLlxuXHRwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsLXNpZ24taW4nLCAoZXJyOiBhbnksIHVzZXI6IGFueSwgaW5mbzogYW55KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJ1c2VyXCIsIHVzZXIpO1xuXHRcdHVzZXIgPSB0cnVlO1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7bWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcblx0XHR9XG5cdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoe21lc3NhZ2U6IGluZm8ubWVzc2FnZX0pO1xuXHRcdH1cblx0XHRyZXEubG9nSW4odXNlciwgKGVycjogYW55KSA9PiB7XG5cdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7bWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKFwicmVxLnVzZXJcIiwgcmVxLnVzZXIpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS51c2VyKTtcblx0XHR9KTtcblx0fSkocmVxLCByZXMsIG5leHQpO1xuXG5cblx0Y29uc3QgdG9rZW4gPSBqd3Quc2lnbih1c2VyLCBjb25maWcuc2VjcmV0LCB7IGV4cGlyZXNJbjogY29uZmlnLnRva2VuTGlmZX0pO1xuXHRjb25zdCByZWZyZXNoVG9rZW4gPSBqd3Quc2lnbih1c2VyLCBjb25maWcucmVmcmVzaFRva2VuU2VjcmV0LCB7IGV4cGlyZXNJbjogY29uZmlnLnJlZnJlc2hUb2tlbkxpZmV9KTtcblx0Y29uc3QgcmVzcG9uc2UgPSB7XG5cdFx0XCJzdGF0dXNcIjogXCJMb2dnZWQgaW5cIixcblx0XHRcInRva2VuXCI6IHRva2VuLFxuXHRcdFwicmVmcmVzaFRva2VuXCI6IHJlZnJlc2hUb2tlbixcblx0fTtcblx0dG9rZW5MaXN0W3JlZnJlc2hUb2tlbl0gPSByZXNwb25zZTtcblx0cmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpO1xufSk7XG5cbi8qcm91dGVyLnBvc3QoJy9zaWduLWluJywgKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSA9PiB7XG5cdGNvbnNvbGUubG9nKCctLS0tIFVzZXIgbG9naW46IGhlcmUnKTtcblx0Y29uc29sZS5sb2coXCJwYXNzcG9ydFwiLCBwYXNzcG9ydCk7XG5cdHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwtc2lnbi1pbicsIChlcnI6IGFueSwgdXNlcjogYW55LCBpbmZvOiBhbnkpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcInJlcVwiLCByZXEubG9nSW4pO1xuXHRcdGNvbnNvbGUubG9nKFwidXNlclwiLCB1c2VyKTtcblx0XHRjb25zb2xlLmxvZyhcInJlcS51c2VyXCIsIHJlcS51c2VyKTtcblx0XHRpZiAoZXJyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoe21lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG5cdFx0fVxuXHRcdGlmICghdXNlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHttZXNzYWdlOiBpbmZvLm1lc3NhZ2V9KTtcblx0XHR9XG5cdFx0cmVxLmxvZ0luKHVzZXIsIChlcnI6IGFueSkgPT4ge1xuXHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoe21lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBtaWxsaXNlY29uZHMgPSAwO1xuXHRcdFx0aWYgKHJlcS5ib2R5LnJlbWVtYmVyKSB7XG5cdFx0XHRcdG1pbGxpc2Vjb25kcyA9IDEwMDAgKiA2MCAqIDMwOyAvLyAzMCBtaW51dGVzXG5cblx0XHRcdFx0cmVxLnNlc3Npb24uY29va2llLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgbWlsbGlzZWNvbmRzKTtcblx0XHRcdFx0cmVxLnNlc3Npb24uY29va2llLm1heEFnZSA9IG1pbGxpc2Vjb25kcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1pbGxpc2Vjb25kcyA9IDEwMDAgKiA2MCAqIDYwICogMjQ7IC8vIDEgZGF5XG5cblx0XHRcdFx0cmVxLnNlc3Npb24uY29va2llLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgbWlsbGlzZWNvbmRzKTtcblx0XHRcdFx0cmVxLnNlc3Npb24uY29va2llLm1heEFnZSA9IG1pbGxpc2Vjb25kcztcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKFwicmVxLnVzZXJcIiwgcmVxLnVzZXIpO1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS51c2VyKTtcblx0XHR9KTtcblx0fSkocmVxLCByZXMsIG5leHQpO1xufSk7Ki9cblxucm91dGVyLnVzZShyZXF1aXJlKCcuLi8uLi91dGlscy90b2tlbi1jaGVja2VyJykpO1xuLy8gZ2V0IGFsbCB1c2VyXG5yb3V0ZXIuZ2V0KCcvdXNlcicsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdGlmIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcmVxLnF1ZXJ5O1xuXG5cdFx0XHRsZXQgcmVjb3JkLCBxdWVyeV9saW5lID0gXCJcIjtcblxuXHRcdFx0cmVjb3JkID0gYCR7IFVTRVJfU0VMRUNUSVZFIH1gO1xuXG5cdFx0XHRpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gXCJ1c2VySWRcIikge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3JpdGVyaWEgPSBwYXJhbXMudXNlcklkID09PSBcIlwiID8gXCJcIiA6IFwiIEFORCB1c2VyX2lkID0gXCIgKyBgJyR7IHBhcmFtcy51c2VySWQgfSdgO1xuXHRcdFx0XHRcdFx0cXVlcnlfbGluZSArPSBjcml0ZXJpYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWNvcmQgKz0gIHF1ZXJ5X2xpbmU7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJFQ09SRFwiLCByZWNvcmQpO1xuXG5cdFx0XHRjb25uZWN0aW9uLnF1ZXJ5KHJlY29yZCwgKGVycjogYW55LCByZXN1bHRzOiBhbnkpID0+IHtcblx0XHRcdFx0Y29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiBlcnJ9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXMuc2VuZChyZXN1bHRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5leHBvcnQgPSByb3V0ZXI7Il19
