import React from 'react';


const MenuCard = ({ item, onToggle }) => {
  <div className="border rounded-lg p-4 bg-white shadow-sm text-sm space-y-1">
    <div className="flex justify-between items-center">
      <span className="font-semibold">{item.name} <button className="text-blue-600 ml-2 text-xs underline">[Edit]</button></span>
    </div>
    <div>Price: {item.price}</div>
    <div>Status: {item.status}</div>
    <div>{item.ratings.count} ratings ({item.ratings.score}★)</div>
    <div className="flex gap-2 mt-2">
      <button className="border text-xs px-3 py-1 rounded">View Details</button>
      <button className="border text-xs px-3 py-1 rounded">Manage Photos</button>
      <button onClick={onToggle} className="bg-yellow-500 text-white text-xs px-3 py-1 rounded">
        Toggle Availability
      </button>
    </div>
  </div>
}

export default MenuCard