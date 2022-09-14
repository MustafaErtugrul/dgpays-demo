import React, { useState } from 'react'

function StateSample3() {

    const [onlineStatus, setonlineStatus] = useState(false);

    // const changeStatus = () => {
    //     setonlineStatus(!onlineStatus)
    // }

    return (
        <>
            <div>
                {
                    onlineStatus == true ? <span>User Online</span> : <span>User Offline</span>
                }
            </div>
            <div>
                <button onClick={() => setonlineStatus(!onlineStatus)}>Change User Status</button>
            </div>
        </>

    )
}

export default StateSample3