import { useContext, useState } from "react";
import { VendorContext } from "../context/VendorContext";



const Product = () => {
  const { products, setProducts } = useContext(VendorContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = () => {
    if (!name || !price) return;
    const newProduct = { id: Date.now(), name, price: Number(price) };
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));

  return (
    <div className="p-6 bg-[#fefff5] h-screen text-whit">
      <h2 className="text-xl font-semibold mb-4 ">Your Menu</h2>
      <div className="mb-4">
        <input type="text" placeholder="Product name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded mr-2" />
        <input type="number" placeholder="₦ Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 rounded mr-2" />
        <button onClick={addProduct} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Add</button>
      </div>
      {products.map(product => (
        <div key={product.id} className="shadow p-4 mb-2 rounded flex justify-between items-center">
          <span>{product.name} - ₦{product.price}</span>
          <button onClick={() => deleteProduct(product.id)} className="text-white bg-[#ED3500] p-2 cursor-pointer rounded-lg">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Product