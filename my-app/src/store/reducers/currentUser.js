import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE = {
    // isAuthenticated : false,
                    }

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return action.currentUser
            
            
                // isAuthenticated: !!Object.keys(action.user).length,    
        default:
            return state
    }
}