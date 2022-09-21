import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TodoPage() {

    let url = 'https://jsonplaceholder.typicode.com/todos';

    const [todos, settodos] = useState([]);

    useEffect(() => {
      
        axios.get(url)
        .then(res => settodos(res.data))
    
      return () => {
        
      }
    }, [])
    


  return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {
                todos && todos.map((item, index) => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed.toString()}</td>

                    </tr>
                })
            }
        </tbody>
    </table>
  </>
  )
}

export default TodoPage