import React from 'react'
import { Route,Router,Outlet, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import AnalyticsDashboard from './pages/dashboard/AnalyticsDashboard'
import Order from './pages/Order'
import Product from './pages/Product'
import Settings from './pages/Settings'
import VendorDashboard from './pages/dashboard/VendorDashboard'
import MenuManagement from './pages/MenuManagement'

const Layout =()=>{
  return(<div>
      <Header />
      <div className='flex '>
        <SideBar />
        <div className='flex-1  rounded-lg'>
          <Outlet />
        </div>
               
       
      </div>
    </div> )}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='analyticsdashboard' element={<AnalyticsDashboard />}/>
        <Route path='order' element={<Order />}/>
       <Route path='/product' element={<Product />}/>
       <Route path='/settings' element={<Settings />}/>
       <Route path='/vendordashboard' element= {<VendorDashboard />} />
       <Route path='/menumanagement' element={<MenuManagement />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
