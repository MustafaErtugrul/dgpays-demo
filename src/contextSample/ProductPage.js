import React, { useContext, useEffect, useState } from 'react'
import { favoritesContext } from './favoritesContext';

function ProductPage() {

    const [products, setproducts] = useState([]);

    const { favorites, setfavorites } = useContext(favoritesContext);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, []);


    const addToFavorites = (item) => {

        //context üzerindeki global state e bir favori ekleyecek

        //eğer bu ürün favorilerde varsa ekleme!
        let favoriteProduct = favorites.find(q => q.id == item.id);

        if(!favoriteProduct){
            setfavorites([...favorites, item])
        }

      

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
                            <td><button onClick={() => addToFavorites(item)}>Add To Favorites</button></td>

                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
    )
}

export default ProductPage