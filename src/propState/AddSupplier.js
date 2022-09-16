import React, { useState } from 'react'

function AddSupplier(props) {

    console.log('Add supplier rendered!');

    const { add } = props;

    const [companyName, setcompanyName] = useState('')
    const [contactName, setcontactName] = useState('')
    const [contactTitle, setcontactTitle] = useState('');

    const addSupplier = () => {

        let randomId = Math.floor(Math.random() * 1000);
        let newSupplier = {
            id: randomId,
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle
        }

        add(newSupplier);

    }

    return (<>

        <div>
            <div>
                <label>Company Name:</label>
                <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
            </div>

            <div>
                <label>Contact Name:</label>
                <input type='text' onChange={(e) => setcontactName(e.target.value)} />
            </div>

            <div>
                <label>Contact Title:</label>
                <input type='text' onChange={(e) => setcontactTitle(e.target.value)} />
            </div>

            <div>
                <button onClick={() => addSupplier()}>Add</button>
                {/* <button onClick={addSupplier}>Add</button> */}

            </div>

        </div>
    </>
    )
}

export default AddSupplier