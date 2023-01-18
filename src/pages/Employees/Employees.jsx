import React from 'react'
import './employees.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Employees = () => {
    const [users, setUsers] = useState([])
    
  
    const fetchData = () => {
      axios.get(" https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users").then(response => {
        setUsers(response.data)
        
      })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (

      <div>
        <h1 className='team-h1'>our Team</h1>
        {users.length > 0 && (
          <ul className='name-list'>
            {users.map(user => (
                
              <li key={user.id} className='employees'>{user.name}</li>
              
            ))}
          </ul>
        )}

      </div>
    )
  }
  
  export default Employees