import React, { useState } from 'react'

function StateSample4() {

    let cityList = ['İzmir', 'İstanbul', 'Ankara', 'Aydın'];

    const [cities, setCities] = useState(cityList);


    const removeItem = (index) => {

        cities.splice(index,1);
        
        console.log('cities', returnValue);

        //cities dizisinin mevcut referansı hala aynı olduğu için STATE KENDİNİ GÜNCELLEMEDİ!! Bu yüzden spread syntax kullandık
        setCities([...cities]);

    }

    return (
        <>
            <ul>
                {
                  cities && cities.map((item,index) => <li style={{cursor:'pointer'}} onClick={() => removeItem(index)} key={index}>{item}</li>)
                }
            </ul>
            <button onClick={() => setCities(null)}>Clear All</button>
        </>
    )
}

export default StateSample4