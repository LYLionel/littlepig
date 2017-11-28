var list = require('./banner.json')
var search = require('./search.json')

module.exports = function(){
	return{
		'list.php': list,
		'btnlist.php': search
	}
}