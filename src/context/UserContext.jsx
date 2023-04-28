import { createContext, useReducer } from "react";


export const UserContext = createContext({});

const handleDispatch = (state, { type, payload }) => {
    switch (type) {
        case "LOGGIN":
            //sessionStorage.setItem("token", JSON.stringify(payload.token));
            //sessionStorage.setItem("user", JSON.stringify(payload.email))
            return {
                ...state,
                isLogged: true,
                user: payload.email,
                user_token: payload.token
            }
        case "LOGOUT":           
            return {
                ...state,
                isLogged: false,
                user: null,
                user_token: null
            }        
        default:
            return state;
    }
};

const UserContextProvider = ({ children }) => {
    const initialState = {
        isLogged: false,
        user: null,
        user_token: null        
    };
    const [state, dispatch] = useReducer(handleDispatch, initialState);

    const properties = { state, dispatch }

    return (
        <UserContext.Provider value={properties}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;