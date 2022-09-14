import React from 'react'

function CountryList(props) {

    const { countries, title } = props

    return (
        <>
            <h1>{title}</h1>
            
            <ul>
                {
                    countries.map((item) => <li>{item}</li>)
                }
            </ul>
        </>


    )
}

export default CountryList