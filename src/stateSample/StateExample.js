import React, { useState } from 'react'

function StateExample() {

    const [cityName, setcityName] = useState('');
    const [cities, setcities] = useState([]);

    const add = () => {
        if (cityName != '') {
            setcityName('');
            setcities([...cities, cityName]);
        }
        else {
            alert('Lütgen bir şehir adı giriniz...')
        }
    }

    const removeAll = () => {
        setcities([]);
    }

    return (<>
        <div>
            <label>Name:</label>
            <input type='text' value={cityName} onChange={(e) => setcityName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
        <div>
            {/* && synatx undefined veya null check */}
            <ul>
                {
                    cities && cities.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })
                }
            </ul>
        </div>
        <div>
            {
                cities.length > 0 ? (<button onClick={() => removeAll()}>Remove All</button>) : <></>
            }

        </div>
    </>)
}

export default StateExample