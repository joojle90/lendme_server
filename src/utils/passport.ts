/**
 * Created by laurence-ho on 21/07/17.
 */

import { Passport } from 'passport';

const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt-nodejs');
const db = require('../database/db.service');

export = (passport: Passport) => {
	// =========================================================================
	// passport session setup ==================================================
	// =========================================================================
	// required for persistent login sessions
	// passport needs ability to serialize and unserialize users out of session

	// used to serialize the user for the session
	passport.serializeUser((user: any, done: any) => {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser((id, done) => {
		db.getConnection((err: any, connection: any) => {
			if (err) {
				console.error('error', err);
				return done(err);
			} else {
				connection.query('SELECT * FROM app_user WHERE user_id = ?', [id], (err: any, rows: any) => {
					connection.release();

					if (err) {
						console.error('error', err);
						return done(err);
					} else {
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

	passport.use('local-sign-in',
		new LocalStrategy({
				// by default, local strategy uses username and password, we will override with email
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true // allows us to pass back the entire request to the callback
			},
			(req: any, username: string, password: string, done: any) => { // callback with email and password from our form
				console.log('---- User login: here2' + username + ' ----');

				db.getConnection((err: any, connection: any) => {
					if (err) {
						console.error('error', err);
						return done(err);
					} else {
						connection.query('SELECT * FROM app_user WHERE user_id = ?', [username], (err: any, rows: any) => {
							connection.release();

							if (err) {
								console.error('error', err);
								return done(err);
							}

							if (rows.length) {
								// if the user is found but the password is wrong
								if (!bcrypt.compareSync(password, rows[0].activation_key)) {
									return done(err, false, {message: 'User name or password is wrong'});
								} else {
									// all is well, return successful user
									return done(null, rows[0]);
								}
							} else {
								return done(err, false, {message: 'User name or password is wrong'});
							}
						});
					}
				});
			})
	);
};
