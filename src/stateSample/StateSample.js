import React from 'react'

function StateSample() {

  let firstName = 'Çağatay';

  const clearAll = () => {
    firstName = '';

    //document.querySelector('h1').innerHTML = '';
  }
    
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={() => clearAll()}>Clear All</button>
    </>
  )
}

export default StateSample