import React from 'react'


function WebUserDetail(props) {
    
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.surname}</h1>
        <h1>{props.age}</h1>
    </>
  )
}

export default WebUserDetail