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
// const jwt = require('jsonwebtoken');
// const config = require('../../utils/config').SYSTEM_CONFIG;
// const tokenList = {};
// router.post('/login', (req:any ,res:any) => {
// 	const postData = req.body;
// 	const user = {
// 		"email": postData.email,
// 		"name": postData.name
// 	};
// 	console.log("postData login", postData);
// 	console.log("user details login", user);
// 	// do the database authentication here, with user name and password combination.
// 	const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife});
// 	const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});
// 	const response = {
// 		"status": "Logged in",
// 		"token": token,
// 		"refreshToken": refreshToken,
// 	};
// 	tokenList[refreshToken] = response;
// 	res.status(200).json(response);
// });
// router.post('/sign-in', (req: any, res: any, next: any) => {
// 	const postRequest = req.body;
// 	const user = {
// 		"userId": postRequest.params.userId,
// 		"password": postRequest.params.password
// 	};
// 	console.log("user details signin", user);
// 	// do the database authentication here, with user name and password combination.
// 	passport.authenticate('local-sign-in', (err: any, user: any, info: any) => {
// 		console.log("user", user);
// 		user = true;
// 		if (err) {
// 			return res.status(401).send({message: err.message});
// 		}
// 		if (!user) {
// 			return res.status(401).send({message: info.message});
// 		}
// 		req.logIn(user, (err: any) => {
// 			if (err) {
// 				return res.status(401).send({message: err.message});
// 			}
// 			console.log("req.user", req.user);
// 			return res.status(200).json(req.user);
// 		});
// 	})(req, res, next);
// 	const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife});
// 	const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});
// 	const response = {
// 		"status": "Logged in",
// 		"token": token,
// 		"refreshToken": refreshToken,
// 	};
// 	tokenList[refreshToken] = response;
// 	res.status(200).json(response);
// });
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
// router.use(require('../../utils/token-checker'));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLFFBQVEsQ0FBQztvQkFDeEIsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUM7WUFFRCxNQUFNLElBQUssWUFBVSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTlCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBUSxFQUFFLE9BQVk7Z0JBQy9DLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6InJvdXRlcy91c2VyL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm9vamxlIG9uIDEwLzA0LzE4LlxuICovXG5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVU0VSX1NFTEVDVElWRSB9IGZyb20gXCIuL3FfdXNlclwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uLy4uL2RhdGFiYXNlL2RiLnNlcnZpY2UnKTtcbmNvbnN0IHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcbmNvbnN0IGF1dGhlbnRpY2F0aW9uID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXV0aGVudGljYXRpb24nKTtcblxuLy8gY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG4vLyBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb25maWcnKS5TWVNURU1fQ09ORklHO1xuLy8gY29uc3QgdG9rZW5MaXN0ID0ge307XG5cbi8vIHJvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxOmFueSAscmVzOmFueSkgPT4ge1xuLy8gXHRjb25zdCBwb3N0RGF0YSA9IHJlcS5ib2R5O1xuLy8gXHRjb25zdCB1c2VyID0ge1xuLy8gXHRcdFwiZW1haWxcIjogcG9zdERhdGEuZW1haWwsXG4vLyBcdFx0XCJuYW1lXCI6IHBvc3REYXRhLm5hbWVcbi8vIFx0fTtcbi8vIFx0Y29uc29sZS5sb2coXCJwb3N0RGF0YSBsb2dpblwiLCBwb3N0RGF0YSk7XG4vLyBcdGNvbnNvbGUubG9nKFwidXNlciBkZXRhaWxzIGxvZ2luXCIsIHVzZXIpO1xuLy8gXHQvLyBkbyB0aGUgZGF0YWJhc2UgYXV0aGVudGljYXRpb24gaGVyZSwgd2l0aCB1c2VyIG5hbWUgYW5kIHBhc3N3b3JkIGNvbWJpbmF0aW9uLlxuLy8gXHRjb25zdCB0b2tlbiA9IGp3dC5zaWduKHVzZXIsIGNvbmZpZy5zZWNyZXQsIHsgZXhwaXJlc0luOiBjb25maWcudG9rZW5MaWZlfSk7XG4vLyBcdGNvbnN0IHJlZnJlc2hUb2tlbiA9IGp3dC5zaWduKHVzZXIsIGNvbmZpZy5yZWZyZXNoVG9rZW5TZWNyZXQsIHsgZXhwaXJlc0luOiBjb25maWcucmVmcmVzaFRva2VuTGlmZX0pO1xuLy8gXHRjb25zdCByZXNwb25zZSA9IHtcbi8vIFx0XHRcInN0YXR1c1wiOiBcIkxvZ2dlZCBpblwiLFxuLy8gXHRcdFwidG9rZW5cIjogdG9rZW4sXG4vLyBcdFx0XCJyZWZyZXNoVG9rZW5cIjogcmVmcmVzaFRva2VuLFxuLy8gXHR9O1xuLy8gXHR0b2tlbkxpc3RbcmVmcmVzaFRva2VuXSA9IHJlc3BvbnNlO1xuLy8gXHRyZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4vLyB9KTtcblxuLy8gcm91dGVyLnBvc3QoJy9zaWduLWluJywgKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSA9PiB7XG4vLyBcdGNvbnN0IHBvc3RSZXF1ZXN0ID0gcmVxLmJvZHk7XG4vLyBcdGNvbnN0IHVzZXIgPSB7XG4vLyBcdFx0XCJ1c2VySWRcIjogcG9zdFJlcXVlc3QucGFyYW1zLnVzZXJJZCxcbi8vIFx0XHRcInBhc3N3b3JkXCI6IHBvc3RSZXF1ZXN0LnBhcmFtcy5wYXNzd29yZFxuLy8gXHR9O1xuXG4vLyBcdGNvbnNvbGUubG9nKFwidXNlciBkZXRhaWxzIHNpZ25pblwiLCB1c2VyKTtcbi8vIFx0Ly8gZG8gdGhlIGRhdGFiYXNlIGF1dGhlbnRpY2F0aW9uIGhlcmUsIHdpdGggdXNlciBuYW1lIGFuZCBwYXNzd29yZCBjb21iaW5hdGlvbi5cbi8vIFx0cGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbC1zaWduLWluJywgKGVycjogYW55LCB1c2VyOiBhbnksIGluZm86IGFueSkgPT4ge1xuLy8gXHRcdGNvbnNvbGUubG9nKFwidXNlclwiLCB1c2VyKTtcbi8vIFx0XHR1c2VyID0gdHJ1ZTtcbi8vIFx0XHRpZiAoZXJyKSB7XG4vLyBcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoe21lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG4vLyBcdFx0fVxuLy8gXHRcdGlmICghdXNlcikge1xuLy8gXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHttZXNzYWdlOiBpbmZvLm1lc3NhZ2V9KTtcbi8vIFx0XHR9XG4vLyBcdFx0cmVxLmxvZ0luKHVzZXIsIChlcnI6IGFueSkgPT4ge1xuLy8gXHRcdFx0aWYgKGVycikge1xuLy8gXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoe21lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRjb25zb2xlLmxvZyhcInJlcS51c2VyXCIsIHJlcS51c2VyKTtcbi8vIFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXEudXNlcik7XG4vLyBcdFx0fSk7XG4vLyBcdH0pKHJlcSwgcmVzLCBuZXh0KTtcblxuXG4vLyBcdGNvbnN0IHRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLnNlY3JldCwgeyBleHBpcmVzSW46IGNvbmZpZy50b2tlbkxpZmV9KTtcbi8vIFx0Y29uc3QgcmVmcmVzaFRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLnJlZnJlc2hUb2tlblNlY3JldCwgeyBleHBpcmVzSW46IGNvbmZpZy5yZWZyZXNoVG9rZW5MaWZlfSk7XG4vLyBcdGNvbnN0IHJlc3BvbnNlID0ge1xuLy8gXHRcdFwic3RhdHVzXCI6IFwiTG9nZ2VkIGluXCIsXG4vLyBcdFx0XCJ0b2tlblwiOiB0b2tlbixcbi8vIFx0XHRcInJlZnJlc2hUb2tlblwiOiByZWZyZXNoVG9rZW4sXG4vLyBcdH07XG4vLyBcdHRva2VuTGlzdFtyZWZyZXNoVG9rZW5dID0gcmVzcG9uc2U7XG4vLyBcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbi8vIH0pO1xuXG4vKnJvdXRlci5wb3N0KCcvc2lnbi1pbicsIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuXHRjb25zb2xlLmxvZygnLS0tLSBVc2VyIGxvZ2luOiBoZXJlJyk7XG5cdGNvbnNvbGUubG9nKFwicGFzc3BvcnRcIiwgcGFzc3BvcnQpO1xuXHRwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsLXNpZ24taW4nLCAoZXJyOiBhbnksIHVzZXI6IGFueSwgaW5mbzogYW55KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJyZXFcIiwgcmVxLmxvZ0luKTtcblx0XHRjb25zb2xlLmxvZyhcInVzZXJcIiwgdXNlcik7XG5cdFx0Y29uc29sZS5sb2coXCJyZXEudXNlclwiLCByZXEudXNlcik7XG5cdFx0aWYgKGVycikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHttZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xuXHRcdH1cblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7bWVzc2FnZTogaW5mby5tZXNzYWdlfSk7XG5cdFx0fVxuXHRcdHJlcS5sb2dJbih1c2VyLCAoZXJyOiBhbnkpID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHttZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgbWlsbGlzZWNvbmRzID0gMDtcblx0XHRcdGlmIChyZXEuYm9keS5yZW1lbWJlcikge1xuXHRcdFx0XHRtaWxsaXNlY29uZHMgPSAxMDAwICogNjAgKiAzMDsgLy8gMzAgbWludXRlc1xuXG5cdFx0XHRcdHJlcS5zZXNzaW9uLmNvb2tpZS5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRcdHJlcS5zZXNzaW9uLmNvb2tpZS5tYXhBZ2UgPSBtaWxsaXNlY29uZHM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtaWxsaXNlY29uZHMgPSAxMDAwICogNjAgKiA2MCAqIDI0OyAvLyAxIGRheVxuXG5cdFx0XHRcdHJlcS5zZXNzaW9uLmNvb2tpZS5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRcdHJlcS5zZXNzaW9uLmNvb2tpZS5tYXhBZ2UgPSBtaWxsaXNlY29uZHM7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlcS51c2VyXCIsIHJlcS51c2VyKTtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXEudXNlcik7XG5cdFx0fSk7XG5cdH0pKHJlcSwgcmVzLCBuZXh0KTtcbn0pOyovXG5cbi8vIHJvdXRlci51c2UocmVxdWlyZSgnLi4vLi4vdXRpbHMvdG9rZW4tY2hlY2tlcicpKTtcbi8vIGdldCBhbGwgdXNlclxucm91dGVyLmdldCgnL3VzZXInLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG5cdGRiLmdldENvbm5lY3Rpb24oKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpID0+IHtcblx0XHRpZiAoZXJyKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogZXJyfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHJlcS5xdWVyeTtcblxuXHRcdFx0bGV0IHJlY29yZCwgcXVlcnlfbGluZSA9IFwiXCI7XG5cblx0XHRcdHJlY29yZCA9IGAkeyBVU0VSX1NFTEVDVElWRSB9YDtcblxuXHRcdFx0aWYoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGlmIChrZXkgPT09IFwidXNlcklkXCIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNyaXRlcmlhID0gcGFyYW1zLnVzZXJJZCA9PT0gXCJcIiA/IFwiXCIgOiBcIiBBTkQgdXNlcl9pZCA9IFwiICsgYCckeyBwYXJhbXMudXNlcklkIH0nYDtcblx0XHRcdFx0XHRcdHF1ZXJ5X2xpbmUgKz0gY3JpdGVyaWE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmVjb3JkICs9ICBxdWVyeV9saW5lO1xuXHRcdFx0Y29uc29sZS5sb2coXCJSRUNPUkRcIiwgcmVjb3JkKTtcblxuXHRcdFx0Y29ubmVjdGlvbi5xdWVyeShyZWNvcmQsIChlcnI6IGFueSwgcmVzdWx0czogYW55KSA9PiB7XG5cdFx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuXG5cdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogZXJyfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzLnNlbmQocmVzdWx0cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuZXhwb3J0ID0gcm91dGVyOyJdfQ==
