import { Breadcrumb, Layout, Menu, Button  } from 'antd';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { RoleManager } from './routingSample/RoleManager'
import { routeConfig } from './routingSample/routeConfig'
import './App.css';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
function App() {

  return (
    <>
        <Layout className="layout">
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Button href='/'>Home</Button></li>
        <li><Button href='/customers'>Customers</Button></li>
        <li><Button href='/products'>Products</Button></li>        
      </ul>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              <Routes>
                {
                  routeConfig && routeConfig.map((item, key) => {
                    return <Route key={key} path={item.path} element={<RoleManager roleId={key}>{item.element}</RoleManager>} />
                  })
                }
              </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>DGPAYS REACT ÖDEVİ ©2022 Created by Mustafa Ertuğrul</Footer>
      </Layout>
    </>
  )
}

export default App