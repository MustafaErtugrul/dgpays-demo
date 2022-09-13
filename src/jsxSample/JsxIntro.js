import React, { Fragment } from 'react'

function JsxIntro() {

    //String, number, boolean, array, object array, date
    //one way binding
    let name = 'Çağatay';
    let number = -22;

    let webUser = {
        name: 'Çağatay',
        surname: 'Yıldız',
        onlineStatus: false
    }

    return (
        <>
            <h1>{webUser.surname}</h1>
            <h1>{name}</h1>
        </>
    )
}

export default JsxIntro