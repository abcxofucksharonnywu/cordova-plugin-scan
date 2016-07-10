var exec = require('cordova/exec');
var scan = {
	recognize:function(callback) {
		exec(null, null, "scan", "recognize", []);
	}
};
module.exports = scan;