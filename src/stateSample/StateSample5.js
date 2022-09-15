import React, { useState } from 'react'

function StateSample5() {

    const [name, setname] = useState('Çağatay');
    const [surname, setsurname] = useState('Yıldız');

    console.log('State sample rendered!');

    const clearAll = () => {
        setname('');
        setsurname('');
    }

  return (<>
    <h1>Firstname: {name}</h1>
    <h2>Surname: {surname}</h2>
    <button onClick={() => clearAll()}>Clear</button>
  </>
  )

}

export default StateSample5