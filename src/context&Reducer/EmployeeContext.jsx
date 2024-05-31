import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext()

const initialstate = {
   employee : []
}

const reducer = (state,action) => {
    switch(action.type){
        case "ADD_EMP" : 
        return {
            ...state,
            employee : [...state.employee, action.payload]
        }
        case "DEL_EMP" : 
        return {
            ...state,
            employee : state.employee.filter(x => x.id !== action.payload)
        }
        default : 
        return state
    }
}


export const  EmployeeProvider = ({children}) =>{
    const [state , dispatch] = useReducer(reducer,initialstate)
    return (
        <EmployeeContext.Provider value={{state , dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )
}

export const  useEmployeeContext = () =>{
    const context = useContext(EmployeeContext)
    if(!context){
        throw new Error("Context not found")
    }
    return context
}