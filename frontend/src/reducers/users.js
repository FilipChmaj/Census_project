import {GET_USERS} from "../actions/actionTypes";

const initialState = {
    users: []
};


const users = (state= initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        default:
            return state;
    }
}

export default users;
