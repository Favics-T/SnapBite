import React, { useContext } from 'react'
import { VendorContext } from '../../context/VendorContext'

const VendorDashboard = () => {
    const {orders, products} = useContext(VendorContext)
  return (
    <div>
       <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-4 rounded">Total Orders: {orders.length}</div>
        <div className="bg-green-100 p-4 rounded">Products Listed: {products.length}</div>
      </div>
    </div>
    </div>
  )
}

export default VendorDashboard
