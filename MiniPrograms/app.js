var wilddog = require('wilddog-weapp-all');

App({
	onLaunch: function () {
		var config = {
			syncURL: 'https://wd2397396495eluilt.wilddogio.com/'
		};
		wilddog.initializeApp(config);
		this.ref = wilddog.sync().ref('Switch');
	}
});