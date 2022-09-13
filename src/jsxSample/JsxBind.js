import React from 'react'

function JsxBind() {

    var h1Element = (<h1>İstanbul</h1>)

    let ulSample = (<ul>
        <li>İstanbul</li>
        <li>İzmir</li>
        <li>Ankara</li>
    </ul>)

    return (
        <>
            {h1Element}
            {ulSample}
        </>
    )
}

export default JsxBind