import { createContext,useState,useEffect } from "react";


export const userContext = createContext();

export default function UserContextProvider(props) {

const [token, settoken] = useState(localStorage.getItem('token')) 

useEffect(() => {
    token ? localStorage.setItem('token' , token)
    : localStorage.removeItem('token')

}, [token])



    return <userContext.Provider value={{token,settoken}}>
        {props.children}
    </userContext.Provider>}