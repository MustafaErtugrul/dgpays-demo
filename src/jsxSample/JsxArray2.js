
import React from 'react'

function JsxArray2() {

    let countries = ['Türkiye', 'Rusya', 'Almanya', 'İran'];

    //Almanya hariç tüm ülkeleri ul içerisinde göster
    //{} -> Js Code
    //() -> Jsx
    return (
        <ul>
            {
                countries.map(item => {
                    if(item != "Almanya"){
                        return (<li>{item}</li>)
                    }
                })
            }
        </ul>
    )
}

export default JsxArray2