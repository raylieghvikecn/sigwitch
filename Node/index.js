var sync = require('./utils/wdSync');

var Switch = sync.ref('Switch');
var SnTemp = sync.ref('SnTemp');

Switch.on("value", function(snapshot) {
	var Switch = snapshot.val();
	if(Switch == null) {
		console.log('暂时无数据');
	} else {
		console.log(Switch);
	}
});
SnTemp.on("value", function(snapshot) {
	var SnTemp = snapshot.val();
	if(SnTemp == null) {
		console.log('暂时无数据');
	} else {
		console.log(SnTemp);
	}
});
