import {OPEN_MESSSAGE,REMOVE_MESSSAGE} from "./type";

const AlertReducer = (state,action) => {
    switch (action.type) {
        case OPEN_MESSSAGE:
            return action.payload;
        case REMOVE_MESSSAGE:
            return null;
        default:
            return state;
    }
}

export default AlertReducer;