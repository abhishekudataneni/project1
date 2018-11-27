import {SET_CURRENT_USER} from "../actionTypes";
import apiCall from "../../services/api"
let url = "http://localhost:3000/employee"
function setCurrentUser(currentUser){
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}

export default function fetchCurrentUser(){
    return (dispatch) => {
        return apiCall("get",url)
            .then(res => dispatch(setCurrentUser(res)))    
    } 
}