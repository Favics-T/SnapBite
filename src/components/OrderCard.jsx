import React, { useContext } from 'react';


const OrderCard = ({ order, actions }) => {
  <div className="border rounded-lg p-4 bg-white shadow-sm text-sm space-y-1">
    <div className="font-semibold">#{order.id} - {order.qty}x {order.item}</div>
    <div>Customer: {order.customer}</div>
    <div>{order.deliveryType}: {order.deliveryTime}</div>
    <div>{order.orderedTime && `Ordered: ${order.orderedTime}`}</div>
    {order.acceptedTime && <div>Accepted: {order.acceptedTime}</div>}
    {order.readyTime && <div>Ready since: {order.readyTime}</div>}
    <div className="flex gap-2 mt-2">
      {actions.map(({ label, onClick, className }, idx) => (
        <button key={idx} onClick={onClick} className={`px-3 py-1 rounded text-xs ${className}`}>{label}</button>
      ))}
    </div>
  </div>
};
export default OrderCard