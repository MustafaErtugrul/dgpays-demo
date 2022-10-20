import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom'

function CustomerDetail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (<>

        <Helmet>
            <title>{detail.companyName}</title>
            <meta name="description" content={detail.companyName} />
        </Helmet>

        <h1>Id: {detail.id}</h1>
        <h1>Company Name: {detail.companyName}</h1>
        <h1>Contact Name: {detail.contactName}</h1>
        <h1>Contact Title: {detail.contactTitle}</h1>
    </>
    )
}

export default CustomerDetail