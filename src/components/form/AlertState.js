import {useReducer} from "react";
import AlertContext from './alertContext'
import AlertReducer from "./alertReducer";
import {OPEN_MESSSAGE,REMOVE_MESSSAGE} from "./type";


const AlertState = (props) => {
    const initialState = null;

    const [state,dispatch] = useReducer(AlertReducer,initialState)

    const setAlert = (messag,type) => {
        dispatch({
            type:OPEN_MESSSAGE,
            payload:{
                messag,
                type
            }
        })
        setTimeout(()=> dispatch({type:REMOVE_MESSSAGE}),2000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert:state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;