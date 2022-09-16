import React, { useState } from 'react'
import {suppliersData} from '../data/suppliers'
import AddSupplier from './AddSupplier';
import SupplierList from './SupplierList';

function SupplierPage() {

    const [suppliers, setsuppliers] = useState(suppliersData);
    
    const deleteSupplier = (id) => {
        let filteredSuppliers = suppliers.filter(q => q.id != id);
        setsuppliers([...filteredSuppliers]);
    }


    const add = (item) => {
        setsuppliers([...suppliers, item])
    }



  return (<>
    <AddSupplier add={add}/>
    <SupplierList suppliers={suppliers} deleteSupplier={deleteSupplier}/>
  </>
  )
}

export default SupplierPage