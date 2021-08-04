import {combineReducers} from 'redux'
import {modalReducer} from './modalReducer';
import { modalRegiser } from "./modalReducer";
const rootReducers = combineReducers({
    // isLogged: loggedReducer,
    // registerReducer: registerReducer,
    modalReducer: modalReducer,
    modalRegiser: modalRegiser
})

export default rootReducers;