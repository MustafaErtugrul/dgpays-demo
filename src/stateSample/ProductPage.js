import React, { useState } from 'react'
import { productsData } from '../data/products'

function ProductPage() {

    const [products, setproducts] = useState(productsData);

    //Inputs states
    const [name, setname] = useState('');
    const [price, setprice] = useState(0);
    const [stock, setstock] = useState(0);
    const [orderbyName, setorderbyName] = useState(true);
    const [orderbyPrice, setorderbyPrice] = useState(true)

    const deleteProduct = (id) => {

        let filteredProducts = products.filter(x => x.id != id);
        setproducts([...filteredProducts]);

    }

    const add = () => {

        let randomGenerateId = Math.floor(Math.random() * 999999)

        let newProduct = {
            id: randomGenerateId,
            name: name,
            unitPrice: price,
            unitsInStock: stock
        }

        setproducts([...products, newProduct])

    }

    const sortByName = () => {

        if (orderbyName)
            products.sort((a, b) => a.name.localeCompare(b.name));
        else
            products.sort((a, b) => b.name.localeCompare(a.name));

        setproducts([...products]);
        setorderbyName(!orderbyName)

    }


    const sortByPrice = () => {

        if (orderbyPrice)
            products.sort((a, b) => {
                return a.unitPrice - b.unitPrice;
            });
        else
            products.sort((a, b) => {
                return b.unitPrice - a.unitPrice;
            });


        setproducts([...products]);
        setorderbyPrice(!orderbyPrice)
    }

    return (<>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type='text' onChange={(e) => setprice(e.target.value)} />
            </div>
            <div>
                <label>Stock:</label>
                <input type='text' onChange={(e) => setstock(e.target.value)} />
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>
        </div>
        <div>
            <h1>Products Length: {products.length}</h1>
        </div>
        <div>
            <button onClick={() => setproducts([])}>Remove All</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th style={{ cursor: 'pointer' }} onClick={() => sortByName()}>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={() => sortByPrice()}>Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, index) => {

                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td onClick={() => deleteProduct(item.id)} style={{ color: 'tomato', cursor: 'pointer' }}>Delete</td>
                        </tr>

                    })
                }

            </tbody>

        </table>

    </>
    )
}

export default ProductPage