import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom'

function ProductDetail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (<>

        <Helmet>
            <title>{detail.name}</title>
            <meta name="description" content={detail.name} />
        </Helmet>

        <h1>Id: {detail.id}</h1>
        <h1>Name: {detail.name}</h1>
        <h1>Unit Price: {detail.unitPrice}</h1>
        <h1>Stock: {detail.unitsInStock}</h1>
    </>
    )
}

export default ProductDetail