"use strict";
/**
 * Created by laurence-ho on 21/07/17.
 */
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var db = require('../database/db.service');
module.exports = function (passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        db.getConnection(function (err, connection) {
            if (err) {
                console.error('error', err);
                return done(err);
            }
            else {
                connection.query('SELECT * FROM app_user WHERE user_id = ?', [id], function (err, rows) {
                    connection.release();
                    if (err) {
                        console.error('error', err);
                        return done(err);
                    }
                    else {
                        done(null, rows[0]);
                    }
                });
            }
        });
    });
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-sign-in', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, username, password, done) {
        console.log('---- User login: here2' + username + ' ----');
        db.getConnection(function (err, connection) {
            if (err) {
                console.error('error', err);
                return done(err);
            }
            else {
                connection.query('SELECT * FROM app_user WHERE user_id = ?', [username], function (err, rows) {
                    connection.release();
                    if (err) {
                        console.error('error', err);
                        return done(err);
                    }
                    if (rows.length) {
                        // if the user is found but the password is wrong
                        if (!bcrypt.compareSync(password, rows[0].activation_key)) {
                            return done(err, false, { message: 'User name or password is wrong' });
                        }
                        else {
                            // all is well, return successful user
                            return done(null, rows[0]);
                        }
                    }
                    else {
                        return done(err, false, { message: 'User name or password is wrong' });
                    }
                });
            }
        });
    }));
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLGlEQUFpRDt3QkFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUMsQ0FBQyxDQUFDO3dCQUN0RSxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNQLHNDQUFzQzs0QkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLENBQUM7b0JBQ0YsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUMsQ0FBQyxDQUFDO29CQUN0RSxDQUFDO2dCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsImZpbGUiOiJ1dGlscy9wYXNzcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBsYXVyZW5jZS1obyBvbiAyMS8wNy8xNy5cbiAqL1xuXG5pbXBvcnQgeyBQYXNzcG9ydCB9IGZyb20gJ3Bhc3Nwb3J0JztcblxuY29uc3QgTG9jYWxTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XG5cbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKTtcbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vZGF0YWJhc2UvZGIuc2VydmljZScpO1xuXG5leHBvcnQgPSAocGFzc3BvcnQ6IFBhc3Nwb3J0KSA9PiB7XG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gcGFzc3BvcnQgc2Vzc2lvbiBzZXR1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vIHJlcXVpcmVkIGZvciBwZXJzaXN0ZW50IGxvZ2luIHNlc3Npb25zXG5cdC8vIHBhc3Nwb3J0IG5lZWRzIGFiaWxpdHkgdG8gc2VyaWFsaXplIGFuZCB1bnNlcmlhbGl6ZSB1c2VycyBvdXQgb2Ygc2Vzc2lvblxuXG5cdC8vIHVzZWQgdG8gc2VyaWFsaXplIHRoZSB1c2VyIGZvciB0aGUgc2Vzc2lvblxuXHRwYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmU6IGFueSkgPT4ge1xuXHRcdGRvbmUobnVsbCwgdXNlci5pZCk7XG5cdH0pO1xuXG5cdC8vIHVzZWQgdG8gZGVzZXJpYWxpemUgdGhlIHVzZXJcblx0cGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSkgPT4ge1xuXHRcdGRiLmdldENvbm5lY3Rpb24oKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xuXHRcdFx0XHRyZXR1cm4gZG9uZShlcnIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBhcHBfdXNlciBXSEVSRSB1c2VyX2lkID0gPycsIFtpZF0sIChlcnI6IGFueSwgcm93czogYW55KSA9PiB7XG5cdFx0XHRcdFx0Y29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdlcnJvcicsIGVycik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShlcnIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkb25lKG51bGwsIHJvd3NbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gTE9DQUwgTE9HSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vIHdlIGFyZSB1c2luZyBuYW1lZCBzdHJhdGVnaWVzIHNpbmNlIHdlIGhhdmUgb25lIGZvciBsb2dpbiBhbmQgb25lIGZvciBzaWdudXBcblx0Ly8gYnkgZGVmYXVsdCwgaWYgdGhlcmUgd2FzIG5vIG5hbWUsIGl0IHdvdWxkIGp1c3QgYmUgY2FsbGVkICdsb2NhbCdcblxuXHRwYXNzcG9ydC51c2UoJ2xvY2FsLXNpZ24taW4nLFxuXHRcdG5ldyBMb2NhbFN0cmF0ZWd5KHtcblx0XHRcdFx0Ly8gYnkgZGVmYXVsdCwgbG9jYWwgc3RyYXRlZ3kgdXNlcyB1c2VybmFtZSBhbmQgcGFzc3dvcmQsIHdlIHdpbGwgb3ZlcnJpZGUgd2l0aCBlbWFpbFxuXHRcdFx0XHR1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuXHRcdFx0XHRwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxuXHRcdFx0XHRwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSAvLyBhbGxvd3MgdXMgdG8gcGFzcyBiYWNrIHRoZSBlbnRpcmUgcmVxdWVzdCB0byB0aGUgY2FsbGJhY2tcblx0XHRcdH0sXG5cdFx0XHQocmVxOiBhbnksIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRvbmU6IGFueSkgPT4geyAvLyBjYWxsYmFjayB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZCBmcm9tIG91ciBmb3JtXG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tIFVzZXIgbG9naW46IGhlcmUyJyArIHVzZXJuYW1lICsgJyAtLS0tJyk7XG5cblx0XHRcdFx0ZGIuZ2V0Q29ubmVjdGlvbigoZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyKTtcblx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gYXBwX3VzZXIgV0hFUkUgdXNlcl9pZCA9ID8nLCBbdXNlcm5hbWVdLCAoZXJyOiBhbnksIHJvd3M6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAocm93cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBpZiB0aGUgdXNlciBpcyBmb3VuZCBidXQgdGhlIHBhc3N3b3JkIGlzIHdyb25nXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHJvd3NbMF0uYWN0aXZhdGlvbl9rZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShlcnIsIGZhbHNlLCB7bWVzc2FnZTogJ1VzZXIgbmFtZSBvciBwYXNzd29yZCBpcyB3cm9uZyd9KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gYWxsIGlzIHdlbGwsIHJldHVybiBzdWNjZXNzZnVsIHVzZXJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKG51bGwsIHJvd3NbMF0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShlcnIsIGZhbHNlLCB7bWVzc2FnZTogJ1VzZXIgbmFtZSBvciBwYXNzd29yZCBpcyB3cm9uZyd9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdCk7XG59O1xuIl19
