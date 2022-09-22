import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './routingSample/AboutPage'
import AdminHomePage from './routingSample/AdminHomePage'
import ContactPage from './routingSample/ContactPage'
import HomePage from './routingSample/HomePage'
import { RequireAuth } from './routingSample/RequireAuth'
import { RoleManager } from './routingSample/RoleManager'
import { routeConfig } from './routingSample/routeConfig'
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
        <li><Link to='/admin'>Go To Admin</Link></li>

      </ul>
      <Routes>
        {
          routeConfig && routeConfig.map((item, key) => {
            return <Route key={key} path={item.path} element={<RoleManager roleId={key}>{item.element}</RoleManager>} />
           
          })
        }
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/users' element={<UsersPage />} ></Route>
        <Route path='/users/:id' element={<UserDetail />} ></Route>
        <Route path='/products' element={<Navigate to='/' replace />} />
        <Route path='/admin' element={<RequireAuth><AdminHomePage /></RequireAuth>} />
        <Route path='*' element={<NoMatch />} /> */}
      </Routes>
      <h1>Site Footer</h1>
    </>
  )
}

export default App