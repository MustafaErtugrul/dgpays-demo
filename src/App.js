import React, { useContext } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { favoritesContext } from './contextSample/favoritesContext'
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

  const { favorites } = useContext(favoritesContext)


  return (
    <>

      <h1>Favorites Count: {favorites.length} </h1>

      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/admin'>Go To Admin</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
        <li><Link to='/counter'>Counter</Link></li>

      </ul>
      <Routes>
        {
          routeConfig && routeConfig.map((item, key) => {
            return <Route key={key} path={item.path} element={<RoleManager roleId={key}>{item.element}</RoleManager>} />

          })
        }
      </Routes>
      <h1>Site Footer</h1>




    </>
  )
}

export default App