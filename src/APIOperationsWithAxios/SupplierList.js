import React, { useEffect, useState } from 'react'
import { axiosInstance } from './axiosInstace';
import { networkManager } from './networkManager';



function SupplierList() {

    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        // axiosInstance.get('suppliers')
        //     .then(res => setsuppliers(res.data));

        networkManager.getAll('suppliers')
            .then(result => {
                setsuppliers(result);
            })

    }, [])


    return (<>
        <ul>
            {
                suppliers && suppliers.map((item, key) => <li key={key}>{item.companyName}</li>)
            }
        </ul>
    </>
    )
}

export default SupplierList