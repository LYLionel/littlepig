import {combineReducers} from 'redux'

function country(state = 'china', action){
    switch(action.type){
        case 'country':  return action.payload
        default: return state
    }
}

export default combineReducers({
    country
})