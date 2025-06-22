import React, { useState, createContext, useContext, useEffect } from 'react';


export const VendorContext = createContext();

const sampleOrders = [
  { id: 1, customer: 'Jane', item: 'Butter Croissant', qty: 3, status: 'Pending' },
  { id: 2, customer: 'Alex', item: 'Chocolate Danish', qty: 2, status: 'Preparing' }
];

const sampleProducts = [
  { id: 1, name: 'Butter Croissant', price: 1200 },
  { id: 2, name: 'Chocolate Danish', price: 1500 }
];

const VendorProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders')) || sampleOrders);
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || sampleProducts);
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem('profile')) || { bakery: 'Grace Bakery', location: 'Port Harcourt', deliveryFee: 500 });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [orders, products, profile]);

  return (
    <VendorContext.Provider value={{ orders, setOrders, products, setProducts, profile, setProfile }}>
      {children}
    </VendorContext.Provider>
  );
};

export default VendorProvider