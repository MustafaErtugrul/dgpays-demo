import React from 'react'

function SupplierList({ suppliers, deleteSupplier }) {

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td style={{cursor:'pointer', color:'tomato'}} onClick={() => deleteSupplier(item.id)}>Delete</td>

                        </tr>
                    })
                }

            </tbody>

        </table>
    </>
    )
}

export default SupplierList