import React, { useState } from 'react'

function StateSampleTooMany() {


    console.log('Too Many');

    const [number, setNumber] = useState(0);

    //setNumber(5);

  return (
    <div>StateSampleTooMany</div>
  )
}

export default StateSampleTooMany