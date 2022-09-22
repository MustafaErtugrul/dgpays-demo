import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate();

    const goToAbout = () => {
      navigate('/about')
    }

    return (
        <>
            <div>HomePage</div>
            <button onClick={() => goToAbout()}>Go to About Page</button>

        </>
    )
}

export default HomePage