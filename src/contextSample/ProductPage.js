import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductPage() {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, []);

    let navigate = useNavigate();

    const goDetail = (name, id) => {

        name = convertToSlug(name);
        navigate('/products/' + id + "/" + name);

    }

    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            ;
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => goDetail(item.name, item.id)}>Go to detail</button></td>

                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
    )
}

export default ProductPage