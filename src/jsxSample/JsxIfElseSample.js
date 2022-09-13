import React from 'react'

function JsxIfElseSample() {

    let onlineStatus = true;

  return (
    <div>
        {
            onlineStatus == true ? <h1>User Online!</h1> : <></>
        }
    </div>
  )
}

export default JsxIfElseSample