import loggedReducer from "./isLogged";
import closeReducer from "./closeLoggin";
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    isLogged: loggedReducer,
    closeReducer: closeReducer
})

export default rootReducers;