import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutPage from './routingSample/AboutPage'
import ContactPage from './routingSample/ContactPage'
import HomePage from './routingSample/HomePage'
import UserDetail from './routingSample/UserDetail'
import UsersPage from './routingSample/UsersPage'
import NoMatch from './stateSample/NoMatch'

function App() {

  

  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>  
              <Route path='/contact' element={<ContactPage/>}/>
              <Route path='/users' element={<UsersPage/>} ></Route>
              <Route path='/users/:id' element={<UserDetail/>} ></Route>
              <Route path='*' element={<NoMatch/>} />
          </Routes>
      <h1>Site Footer</h1>
    </>
  )
}

export default App