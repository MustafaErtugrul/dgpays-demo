import React from 'react'

function JsxArray() {

    let countries = ['Türkiye', 'Rusya', 'Almanya', 'İran'];
    // Dizinin elemanlarını bir ul içerisinde göster
    //Jsx tarafında döngü için sadece MAP kullanılır! foreach kullanılmaz.

    return (
        <ul>
            {
                countries.map(item => <li>{item}</li>)
            }
        </ul>
    )
}

export default JsxArray