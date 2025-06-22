import OrderCard from "../components/OrderCard";
import { VendorContext } from "../context/VendorContext";

const OrderManagement = () => {
  const { orders, setOrders } = useContext(VendorContext);

  const updateOrder = (id, updates) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, ...updates } : o));
  };

  const filterByStatus = (status) => orders.filter(o => o.status === status);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <div className="space-x-2">
          <button className="border px-3 py-1 rounded">Filter ▼</button>
          <input type="text" placeholder="Search..." className="border px-3 py-1 rounded" />
        </div>
      </header>

      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">New Orders ({filterByStatus('Pending').length})</h2>
        <div className="space-y-4">
          {filterByStatus('Pending').map(order => (
            <OrderCard
              key={order.id}
              order={order}
              actions={[
                { label: 'Accept',
                 className: 'bg-green-500 text-white',
                 onClick: () => updateOrder(order.id, { status: 'In Preparation', acceptedTime: '1:30 PM' }) 
                },
                { label:
                 'Reject',
                  className: 'bg-red-500 text-white', onClick: () => updateOrder(order.id, { status: 'Rejected' }) },
                { label: 'View Details', 
                className: 'border', onClick: () => {} },
              ]}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">In Preparation ({filterByStatus('In Preparation').length})</h2>
        <div className="space-y-4">
          {filterByStatus('In Preparation').map(order => (
            <OrderCard
              key={order.id}
              order={order}
              actions={[
                { label: 'Mark Ready', className: 'bg-yellow-400', onClick: () => updateOrder(order.id, { status: 'Ready', readyTime: '2:40 PM' }) },
                { label: 'Message Customer', className: 'border', onClick: () => {} },
                { label: 'View Details', className: 'border', onClick: () => {} },
              ]}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Ready for Delivery/Pickup ({filterByStatus('Ready').length})</h2>
        <div className="space-y-4">
          {filterByStatus('Ready').map(order => (
            <OrderCard
              key={order.id}
              order={order}
              actions={[
                { label: 'Mark Delivered', className: 'bg-green-600 text-white', onClick: () => updateOrder(order.id, { status: 'Delivered' }) },
                { label: 'Contact Delivery', className: 'border', onClick: () => {} },
                { label: 'View Details', className: 'border', onClick: () => {} },
              ]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrderManagement;
