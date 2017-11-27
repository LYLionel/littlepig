const hotcity = require('./hotcity.json')
const classifycity = require('./classifycity.json')

module.exports = function(){
    return {
        'classifycity.php': classifycity,
        'hotcity.php': hotcity
    }
        
}



