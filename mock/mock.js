var list = require('./banner.json')
var search = require('./search.json')
const hotcity = require('./hotcity.json')
const classifycity = require('./classifycity.json')
const foreign = require('./foreign.json')
module.exports = function(){
	return{
		'list.php': list,
        'btnlist.php': search,
        'classifycity.php': classifycity,
        'hotcity.php': hotcity,
        'foreign.php': foreign
	}
}
