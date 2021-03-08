import React, {useReducer, useContext, createContext} from "react";
import API from "./api";
const GlobalContext = createContext();

const {Provider} = GlobalContext;

const reducer = (state, action) => {
    switch(action.type) {
        case "checkUser":
            return{
                ...state,
                loggedIn: action.loggedIn
            }
        case "login":
            return{
                ...state,
                loggedIn: true,
                username: action.data.username,
                email: action.data.email
            }
        default: return state;
    }
}

const GlobalContextProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
      
    });

    return <Provider value = {[state, dispatch]} {...props} />
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export {GlobalContextProvider, useGlobalContext};