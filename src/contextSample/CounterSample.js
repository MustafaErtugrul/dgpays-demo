import React, { useContext } from 'react'
import { counterContext } from './counterContext'

function CounterSample() {

    const {counter, setcounter} = useContext(counterContext);


    const increase = () => {

        localStorage.setItem('counter', counter + 1)
        setcounter(counter + 1);

    }

    return (<>
        <h1>Counter: {counter} </h1>
        <button onClick={() => increase()}>Increase</button>
    </>
    )
}

export default CounterSample