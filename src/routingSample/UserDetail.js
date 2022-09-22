import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { users } from './usersData'

function UserDetail() {

    const [detail, setdetail] = useState({});

    let { id } = useParams();

    useEffect(() => {
    
        let singleUser = users.find(q => q.id == id);
        setdetail(singleUser);
    
    }, [])
    


    return (<>
        <div>
            <span>Id: {detail.id}</span>
        </div>
        <div>
            <span>Name: {detail.name}</span>
        </div>
        <div>
            <span>User Name: {detail.userName}</span>
        </div>
        <div>
            <span>EMail: {detail.email}</span>
        </div>
        <div>
            <span>Company Name: {detail.company?.name}</span>
        </div>
    </>)
}

export default UserDetail