import React, { useContext } from 'react'
// import { VendorContext } from '../../context/VendorContext'
import { VendorContext } from '../context/VendorContext';

const Order = () => {
  const {orders, setOrders} = useContext(VendorContext);
  const updateStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  }
  return (
    <div>
       <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      {orders.map(order => (
        <div key={order.id} className="border p-4 mb-3 rounded">
          <p><strong>{order.item}</strong> x{order.qty} for {order.customer}</p>
          <p>Status: {order.status}</p>
          <div className="mt-2 space-x-2">
            <button className="bg-yellow-200 px-2 py-1 rounded" onClick={() => updateStatus(order.id, 'Preparing')}>Preparing</button>
            <button className="bg-blue-200 px-2 py-1 rounded" onClick={() => updateStatus(order.id, 'Out for Delivery')}>Out</button>
            <button className="bg-green-200 px-2 py-1 rounded" onClick={() => updateStatus(order.id, 'Delivered')}>Delivered</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Order
