import axios from 'axios'
import React, { useState } from 'react'
import { networkManager } from './networkManager';

function AddCategory() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    let url = 'https://northwind.vercel.app/api/categories';

    const addNewCategory = () => {

        let newCategory = {
            name: name,
            description: description
        }

        // axios.post(url, newCategory)
        // .then(res => console.log(res.data))

        networkManager.add('categories', newCategory)
            .then(result => console.log('result', result))



    }


    return (<>
        <div>
            <label>Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Description</label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewCategory()}>Add</button>
        </div>
    </>
    )
}

export default AddCategory