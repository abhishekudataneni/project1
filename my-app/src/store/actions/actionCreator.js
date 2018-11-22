import {GET_WEEK} from "../actionTypes";
import apiCall from "../../services/api"

function getWeeks(data){
    return {
        type: GET_WEEK
    }
}

export default function fetchWeeks(){
    return (dispatch) => {
        return apiCall("get",url)
            .then(response => {dispatch(getWeeks(response)})
            .catch(err => {console.log(err)})
    } 
}