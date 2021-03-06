"use strict";
/**
 * Created by Joojle on 10/04/18.
 */
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require("passport");
var expressSanitizer = require('express-sanitizer');
//initial database schema
var database = require('./database/db.service');
require('./database/db.schema')(database);
require('./utils/passport')(passport);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
//app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
// for system.js to work. Can be removed if bundling.
//app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));
app.use(expressSanitizer());
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    // Specify the Domain you wish to allow or give * to allow all 	origins.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow or * to allow all.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type');
    // Check if preflight request
    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
    }
    else {
        // Pass to next layer of middleware
        next();
    }
});
//initial routes
var module_routes = require('./routes/module/module');
var menu_routes = require('./routes/menu/menu');
var refcode_routes = require('./routes/refcode/refcode');
var refgroup_routes = require('./routes/refgroup/refgroup');
var style_routes = require('./routes/style/style');
var project_routes = require('./routes/project/project');
var user_routes = require('./routes/user/user');
var customer_routes = require('./routes/customer/customer');
var audit_routes = require('./routes/audit/audit');
var log_routes = require('./routes/log/log');
app.use('/api', module_routes);
app.use('/api', menu_routes);
app.use('/api', refcode_routes);
app.use('/api', refgroup_routes);
app.use('/api', style_routes);
app.use('/api', project_routes);
app.use('/api', user_routes);
app.use('/api', customer_routes);
app.use('/api', audit_routes);
app.use('/api', log_routes);
//app.get('/', (req: any, res: any) => {
//	res.sendFile(path.resolve(__dirname, '../client/index.html'));
//});
app.get('*', function (req, res) {
    res.send('Sorry, page not found!');
});
app.listen(8100, function () {
    console.log('This express angular app is listening on port:' + 8100);
});
module.exports = app;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxpQ0FBb0M7QUFDcEMseUNBQTRDO0FBQzVDLHdDQUEyQztBQUMzQywyQkFBOEI7QUFDOUIsbUNBQXNDO0FBRXRDLElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFdEQseUJBQXlCO0FBQ3pCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ2xELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXRDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztBQUVqRCw0RUFBNEU7QUFDNUUsOEVBQThFO0FBRTlFLHFEQUFxRDtBQUNyRCxnRUFBZ0U7QUFDaEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXBFLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBRTVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2YsTUFBTSxFQUFFLGFBQWE7SUFDckIsTUFBTSxFQUFFLElBQUk7SUFDWixpQkFBaUIsRUFBRSxJQUFJO0NBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0osR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBRTVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLElBQVM7SUFDckMsd0VBQXdFO0lBQ3hFLEdBQUcsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUV0RSx1REFBdUQ7SUFDdkQsR0FBRyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hFLEdBQUcsQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUV0RSw2QkFBNkI7SUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFDO1FBQ0wsbUNBQW1DO1FBQ25DLElBQUksRUFBRSxDQUFDO0lBQ1IsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCO0FBQ2hCLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzNELElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzlELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzNELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xELElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzlELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3JELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRS9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTVCLHdDQUF3QztBQUN4QyxpRUFBaUU7QUFDakUsS0FBSztBQUVMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFTLEdBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm9vamxlIG9uIDEwLzA0LzE4LlxuICovXG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHNlc3Npb24gPSByZXF1aXJlKCdleHByZXNzLXNlc3Npb24nKTtcbmltcG9ydCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcblxuY29uc3QgZXhwcmVzc1Nhbml0aXplciA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2FuaXRpemVyJyk7XG5cbi8vaW5pdGlhbCBkYXRhYmFzZSBzY2hlbWFcbmNvbnN0IGRhdGFiYXNlID0gcmVxdWlyZSgnLi9kYXRhYmFzZS9kYi5zZXJ2aWNlJyk7XG5yZXF1aXJlKCcuL2RhdGFiYXNlL2RiLnNjaGVtYScpKGRhdGFiYXNlKTtcbnJlcXVpcmUoJy4vdXRpbHMvcGFzc3BvcnQnKShwYXNzcG9ydCk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XG5cbi8vYXBwLnVzZSgnL2FwcCcsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvYXBwJykpKTtcbi8vYXBwLnVzZSgnL2xpYnMnLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2xpZW50L2xpYnMnKSkpO1xuXG4vLyBmb3Igc3lzdGVtLmpzIHRvIHdvcmsuIENhbiBiZSByZW1vdmVkIGlmIGJ1bmRsaW5nLlxuLy9hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQnKSkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vbm9kZV9tb2R1bGVzJykpKTtcblxuYXBwLnVzZShleHByZXNzU2FuaXRpemVyKCkpO1xuXG5hcHAudXNlKHNlc3Npb24oe1xuXHRzZWNyZXQ6ICdteVNlY3JldEtleScsXG5cdHJlc2F2ZTogdHJ1ZSxcblx0c2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWVcbn0pKTtcbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuYXBwLnVzZSgocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiBhbnkpID0+IHtcblx0Ly8gU3BlY2lmeSB0aGUgRG9tYWluIHlvdSB3aXNoIHRvIGFsbG93IG9yIGdpdmUgKiB0byBhbGxvdyBhbGwgXHRvcmlnaW5zLlxuXHRyZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJyk7XG5cblx0Ly8gUmVxdWVzdCBtZXRob2RzIHlvdSB3aXNoIHRvIGFsbG93IG9yICogdG8gYWxsb3cgYWxsLlxuXHRyZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgUFVULCBERUxFVEUnKTtcblx0cmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIENvbnRlbnQtVHlwZScpO1xuXG5cdC8vIENoZWNrIGlmIHByZWZsaWdodCByZXF1ZXN0XG5cdGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcblx0XHRyZXMuc3RhdHVzKDIwMCk7XG5cdFx0cmVzLmVuZCgpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFBhc3MgdG8gbmV4dCBsYXllciBvZiBtaWRkbGV3YXJlXG5cdFx0bmV4dCgpO1xuXHR9XG59KTtcblxuLy9pbml0aWFsIHJvdXRlc1xuY29uc3QgbW9kdWxlX3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL21vZHVsZS9tb2R1bGUnKTtcbmNvbnN0IG1lbnVfcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvbWVudS9tZW51Jyk7XG5jb25zdCByZWZjb2RlX3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL3JlZmNvZGUvcmVmY29kZScpO1xuY29uc3QgcmVmZ3JvdXBfcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVmZ3JvdXAvcmVmZ3JvdXAnKTtcbmNvbnN0IHN0eWxlX3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL3N0eWxlL3N0eWxlJyk7XG5jb25zdCBwcm9qZWN0X3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL3Byb2plY3QvcHJvamVjdCcpO1xuY29uc3QgdXNlcl9yb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VyL3VzZXInKTtcbmNvbnN0IGN1c3RvbWVyX3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2N1c3RvbWVyL2N1c3RvbWVyJyk7XG5jb25zdCBhdWRpdF9yb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hdWRpdC9hdWRpdCcpO1xuY29uc3QgbG9nX3JvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2xvZy9sb2cnKTtcblxuYXBwLnVzZSgnL2FwaScsIG1vZHVsZV9yb3V0ZXMpO1xuYXBwLnVzZSgnL2FwaScsIG1lbnVfcm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCByZWZjb2RlX3JvdXRlcyk7XG5hcHAudXNlKCcvYXBpJywgcmVmZ3JvdXBfcm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCBzdHlsZV9yb3V0ZXMpO1xuYXBwLnVzZSgnL2FwaScsIHByb2plY3Rfcm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCB1c2VyX3JvdXRlcyk7XG5hcHAudXNlKCcvYXBpJywgY3VzdG9tZXJfcm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCBhdWRpdF9yb3V0ZXMpO1xuYXBwLnVzZSgnL2FwaScsIGxvZ19yb3V0ZXMpO1xuXG4vL2FwcC5nZXQoJy8nLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4vL1x0cmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvaW5kZXguaHRtbCcpKTtcbi8vfSk7XG5cbmFwcC5nZXQoJyonLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG5cdHJlcy5zZW5kKCdTb3JyeSwgcGFnZSBub3QgZm91bmQhJyk7XG59KTtcblxuYXBwLmxpc3Rlbig4MTAwLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdUaGlzIGV4cHJlc3MgYW5ndWxhciBhcHAgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6JyArIDgxMDApO1xufSk7XG5cbmV4cG9ydCA9IGFwcDsiXX0=
