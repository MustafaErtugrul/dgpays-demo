import React, { useEffect, useState } from 'react'

//API den productları GET isteği ile çekiğ bir tabloda listeleyeceğiz!
function ProductListPage() {

    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    let tdDeleteStyle = {
        cursor: 'pointer',
        color: 'tomato'
    }

    useEffect(() => {

        const myAbortController = new AbortController();
        getProducts(myAbortController);

        return () => {
            myAbortController.abort();
        }

    }, [products]);



    const getProducts = (myAbortController) => {

        //fetch eğer tek bir parametre alıyorsa bu default olarak GET isteği anlamına gelir!
        fetch('https://northwind.vercel.app/api/products', { signal: myAbortController.signal })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setproducts(data);
                    setLoading(false);
                }, 2000);

            })
            .catch(err => {
                console.log('err', err);
            })

    }

    //delete butonuna tıklandığında aldığım id ye göre WEB SERVİSE DELETE isteği atacağım.
    const deleteProduct = (id) => {

        //fetch işlemindeki 2. parametrede options ları yazmaktayım!
        fetch('https://northwind.vercel.app/api/products/' + id, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.status == 200)
                    getProducts();
            })

    }


    return (<>
        {
            loading == true ? <span>loading...</span> : (<table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((item, key) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitsInStock}</td>
                                <td onClick={() => deleteProduct(item.id)} style={tdDeleteStyle}>Delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>)
        }

    </>
    )
}

export default ProductListPage