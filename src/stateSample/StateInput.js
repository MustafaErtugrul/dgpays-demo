import React, { useState } from 'react'

function StateInput() {


    console.log('State input component rendered!');

    const [userName, setuserName] = useState('');

    const getValue = (value) => {
        setuserName(value);
    }

    return (<>
        <h1>{userName}</h1>
        {/* onChange event her klavyeye bastığında! */}
        <input type='text' onChange={(e) => getValue(e.target.value) } />

    </>
    )
}

export default StateInput