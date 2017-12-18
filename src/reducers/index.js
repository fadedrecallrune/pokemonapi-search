import { combineReducers } from 'redux'

import { SET_POKEMON } from '../actions'

const rootReducer = combineReducers({ getPokemon })


function getPokemon(state=[], action) {
    switch (action.type) {
        case SET_POKEMON:
            return action.items
        default:
            return state;
    }
}

export default rootReducer;