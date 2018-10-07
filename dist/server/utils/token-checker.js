/*const jwt = require('jsonwebtoken');
const config = require('./config').SYSTEM_CONFIG;

export = (req:any, res:any, next:any) => {
    const token = req.body.token || req.query.token || req.headers['access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, (err:any, decoded:any) => {
            if (err) {
                return res.status(401).json({
                    "error": true,
                    "message": 'Unauthorized access.'
                });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
    }
};*/ 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3Rva2VuLWNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSSIsImZpbGUiOiJ1dGlscy90b2tlbi1jaGVja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJykuU1lTVEVNX0NPTkZJRztcblxuZXhwb3J0ID0gKHJlcTphbnksIHJlczphbnksIG5leHQ6YW55KSA9PiB7XG5cdGNvbnN0IHRva2VuID0gcmVxLmJvZHkudG9rZW4gfHwgcmVxLnF1ZXJ5LnRva2VuIHx8IHJlcS5oZWFkZXJzWydhY2Nlc3MtdG9rZW4nXTtcblxuXHQvLyBkZWNvZGUgdG9rZW5cblx0aWYgKHRva2VuKSB7XG5cdFx0Ly8gdmVyaWZpZXMgc2VjcmV0IGFuZCBjaGVja3MgZXhwXG5cdFx0and0LnZlcmlmeSh0b2tlbiwgY29uZmlnLnNlY3JldCwgKGVycjphbnksIGRlY29kZWQ6YW55KSA9PiB7XG5cdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiB0cnVlLFxuXHRcdFx0XHRcdFwibWVzc2FnZVwiOiAnVW5hdXRob3JpemVkIGFjY2Vzcy4nXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmVxLmRlY29kZWQgPSBkZWNvZGVkO1xuXHRcdFx0bmV4dCgpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIHRoZXJlIGlzIG5vIHRva2VuXG5cdFx0Ly8gcmV0dXJuIGFuIGVycm9yXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHtcblx0XHRcdFwiZXJyb3JcIjogdHJ1ZSxcblx0XHRcdFwibWVzc2FnZVwiOiAnTm8gdG9rZW4gcHJvdmlkZWQuJ1xuXHRcdH0pO1xuXHR9XG59OyovIl19
