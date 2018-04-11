var Switch = require('./utils/wdSync').ref('Switch');
var SnTemp = require('./utils/wdSync').ref('SnTemp');

Switch.on("value", function(snapshot) {
	var Switch = snapshot.val();
	if(database == null) {
		console.log('暂时无数据');
	} else {
		console.log(Switch);
	}
});
SnTemp.on("value", function(snapshot) {
	var SnTemp = snapshot.val();
	if(database == null) {
		console.log('暂时无数据');
	} else {
		console.log(SnTemp);
	}
});
