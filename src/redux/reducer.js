import { combineReducers } from 'redux'
function country( state = 'china', action){
    switch(action.type){
        case 'country': 
            return action.payload
        default :
            return state 
    }
}
function city(state = '',action){
    switch(action.type){
        case 'city': return action.payload
        default: return state
    }
}
function aaa( state = {name: 'aaa'}, action){
    switch(action.type){
        case 'change': 
            return {
                ...state,
                name: action.name
            }
        default :
            return state 
    }
}

const todoApp = combineReducers({
    country,
    aaa,
    city
})

export default todoApp
