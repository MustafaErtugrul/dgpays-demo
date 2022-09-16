import React, { useEffect, useState } from 'react'

function Counter() {

    console.log('Counter component rendered!!');

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0)

    //1. parametre useEffect içerisindeki fonksiyon.
    //2. parametre dependency
    //Dependency boş bir dizi ise bu effect SADECE BİR KERE ÇALIŞIR!
    useEffect(() => {
        console.log('Use effect worked');
    }, []);

    useEffect(() => {
        console.log('Use effect-2 worked!');
    }, [counter2])

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <button onClick={() => setcounter2(counter2 + 1)}>Increase - 2</button>

    </>
    )
}

export default Counter