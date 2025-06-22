import MenuCard from "../components/MenuCard";
import { VendorContext } from "../context/VendorContext";
import { useContext } from "react";

const MenuManagement = () => {
  const { menuItems, setMenuItems } = useContext(VendorContext);

  const toggleAvailability = (id) => {
    setMenuItems(prev => prev.map(item =>
      item.id === id ? {
        ...item,
        status: item.status === 'Available' ? 'Unavailable' : 'Available'
      } : item
    ));
  };

  const categories = ['Pastries', 'Breads', 'Special Items'];

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Menu Management</h1>
        <div className="space-x-2">
          <button className="bg-green-600 text-white px-4 py-1 rounded text-sm">+ Add New Item</button>
          <button className="border px-3 py-1 rounded text-sm">Categories</button>
        </div>
      </header>

      {categories.map(category => {
        const itemsInCategory = menuItems.filter(item => item.category === category);
        if (itemsInCategory.length === 0) return null;
        return (
          <section key={category} className="mb-8">
            <h2 className="font-bold text-lg mb-3">{category} ({itemsInCategory.length} items)</h2>
            <div className="space-y-4">
              {itemsInCategory.map(item => (
                <MenuCard key={item.id} item={item} onToggle={() => toggleAvailability(item.id)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MenuManagement;
