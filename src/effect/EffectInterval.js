import React, { useEffect, useState } from 'react'

function EffectInterval() {

    const [counter, setcounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log('Hello');
        }, 1000);

        //Effect clean function
        return () => {
            console.log('CLEAN!');
          }

    }, [counter]);


    




    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
    )
}

export default EffectInterval