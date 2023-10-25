import { createContext, useState, useReducer, useEffect } from "react";

export const AuthContext = createContext()

function AuthReducer(state, action){
    switch(action.type) {
      case "LOG_IN":
        return {
            user: action.payload
        }
      case "LOG_OUT":
        return {
            user : null
        }
      default:
        return state
    }
}

export default function AuthContextProvider ({children}) {

    const [state, dispatchAuth] = useReducer(AuthReducer, {user: null})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) {
          dispatchAuth({ type: 'LOG_IN', payload: user }) 
        }
    }, [])

    return (  
        <AuthContext.Provider value={{ ...state, dispatchAuth}}>
            {children}
        </AuthContext.Provider>
    )
}