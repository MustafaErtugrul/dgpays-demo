import { createContext, useEffect, useState } from "react";


export const counterContext = createContext(null);


export const CounterProvider = ({children}) => {



    const [counter, setcounter] = useState(0);

    useEffect(() => {
        
       var counter = localStorage.getItem('counter');

       if(counter){
           setcounter(counter)
       }

    }, [])
    

    
    return <counterContext.Provider value={{counter, setcounter}}>{children}</counterContext.Provider>

}