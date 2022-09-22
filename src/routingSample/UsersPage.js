import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { users } from './usersData'

function UsersPage() {

  const [userList, setuserList] = useState(users)

  return (
      <ul>
          {
              userList && userList.map((item,key) => {
                  return <li key={item.id}> <Link to={'/users/' + item.id}>{item.name}</Link></li>
              })
          }
      </ul>
  )
}

export default UsersPage