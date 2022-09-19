import React, { useState } from 'react'

function AddProduct() {

    const [name, setname] = useState('');
    const [stock, setstock] = useState(0);
    const [price, setprice] = useState(0);

    const addNewProduct = () => {

        let newProduct = {
            name: name,
            unitPrice: price,
            unitsInStock: stock
        }

        //FETH POST REQUEST
        fetch('https://northwind.vercel.app/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('DATA', data);
            })


        // const headers = new Headers();
        // headers.set('Accept', 'application/json')
        // headers.set('Content-Type', 'application/json');

        // const request = new Request('',{
        //     method:'POST',

        // })

    }


    return (<>

        <div>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>

        <div>
            <label>Price:</label>
            <input type='number' value={price} onChange={(e) => setprice(e.target.value)} />
        </div>

        <div>
            <label>Stock:</label>
            <input type='number' value={stock} onChange={(e) => setstock(e.target.value)} />
        </div>

        <div>
            <button onClick={() => addNewProduct()}>Add New Product</button>
        </div>

    </>
    )
}

export default AddProduct