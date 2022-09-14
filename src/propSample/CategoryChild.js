import React from 'react'

function CategoryChild(props) {
    
  return (
    <>
        <button onClick={() => props.hello('DGPays')}>Click Me!</button>
    </>
  )
}

export default CategoryChild