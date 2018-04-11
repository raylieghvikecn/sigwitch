var wilddog = require('wilddog');

var config = {
	syncURL: 'https://wd2397396495eluilt.wilddogio.com/'
};
wilddog.initializeApp(config);

module.exports = wilddog.sync();