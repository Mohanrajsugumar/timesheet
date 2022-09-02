import React , {createContext, useReducer} from 'react';
import Reducer from '../context/Reducer'

// intialstate


const intialState ={
    users:[
        {id:"", name:"",login:"",logout:"",total:""},
     
    ]
};

// create context

export const GlobalContext = createContext(intialState);

//Provider component


export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer,intialState);

const addTimesheet =(user)=>{
  dispatch({
    type: "ADD_TIMESHEET",
    payload: user
  })
}

    return(
        <GlobalContext.Provider value={{
            users:state.users,
            addTimesheet
        }}>
            {children}
        </GlobalContext.Provider>
    )
}