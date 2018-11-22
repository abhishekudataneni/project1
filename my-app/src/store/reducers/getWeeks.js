import {GET_WEEK} from "../actionTypes";

const DEFAULT_STATE = {
    "weeks": []
  };

export default (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case GET_WEEK:
            return {
               "weeks": [...state.weeks,action.week]
            };
        default:
            return state
    }
}