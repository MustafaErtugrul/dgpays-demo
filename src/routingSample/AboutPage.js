import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AboutPage() {

    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1);
    }

    useEffect(() => {
      
        
        console.log('ABOUT!');

    }, [])
    


    return (
        <>
            <div>AboutPage</div>
            <button onClick={() => goToBack()}>go to back!</button>

        </>
    )
}

export default AboutPage