import { createContext, useEffect, useState } from "react";


export const counterContext = createContext(null);


export const CounterProvider = ({children}) => {

    const [counter, setcounter] = useState(0);


    console.log('DİKKAT');

    useEffect(() => {
        
       var counter = localStorage.getItem('counter');

       if(counter){
           setcounter(Number(counter))
       }

    }, [])
    

    
    return <counterContext.Provider value={{counter, setcounter}}>{children}</counterContext.Provider>

}