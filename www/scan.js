var exec = require('cordova/exec');
var Scan = {
	recognize:function(callback) {
		exec(null, null, "Scan", "recognize", []);
	}
};
module.exports = Scan;