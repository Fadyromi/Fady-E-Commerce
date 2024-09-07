import { createContext,useState } from "react";


export const CounterContext = createContext();

export default function CounterContextProvider(props) {

const [counter, setcounter] = useState(0) 


function changCounter (){

    setcounter(Math.random)
}
    return <CounterContext.Provider value={{ counter , changCounter}}>
        {props.children}
    </CounterContext.Provider>



}