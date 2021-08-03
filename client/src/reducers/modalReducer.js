export const modalReducer = (state = false, action) => {
    switch(action.type){
        case 'OPEN_LOGIN': {
            return !state;
        }
        case 'CLOSE_LOGIN': {
            return false;
        }
        default:{
            return state;
        }
    }
}

export const modalRegiser = (regState = false, action) => {
    switch(action.type){
        case 'OPEN_REGISTER': {
            return !regState;
        }
        case 'CLOSE_REGISTER': {
            return false;
        }
        default:{
            return regState;
        }
    }
}
