import React, { useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { counterContext } from '../contextSample/counterContext';

function HomePage() {

    const navigate = useNavigate();

    const { counter } = useContext(counterContext)

    const goToAbout = () => {
        navigate('/about')
    }

    return (
        <>
            <div>HomePage</div>
            <h1>{counter}</h1>
            <button onClick={() => goToAbout()}>Go to About Page</button>

        </>
    )
}

export default HomePage