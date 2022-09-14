import React, { useState } from 'react'

function StateSample2() {

    console.log('State changed!');

    //Bir değişken state e bağlandığı takdirde o değişkeni set fonksiyonu ile değiştirdiğimizde component yeniden render olur.
    const [firstName, setFirstName ] = useState('Çağatay')

    const clearAll = () => {

        // setFirstName('');
        setFirstName('Yıldız')

    }

  return (
    <>
        <h1>{firstName}</h1>
        <button onClick={() => clearAll()}>Clear All</button>
    </>
  )
}

export default StateSample2