

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const AnalyticsDashboard = () => {
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales (₦)',
        data: [12000, 15000, 10000, 18000, 20000, 25000, 17500],
        backgroundColor: '#4ade80',
      },
    ],
  };

  const pieData = {
    labels: ['Butter Croissant', 'Chocolate Muffin', 'Cinnamon Roll', 'Others'],
    datasets: [
      {
        data: [32, 18, 15, 35],
        backgroundColor: ['#facc15', '#fb923c', '#f87171', '#c4b5fd'],
      },
    ],
  };

  return (
    <div className="p-6 space-y-10">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="space-x-2">
          <button className="border px-4 py-1 rounded">This Week ▼</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded">Download Report</button>
        </div>
      </header>

      
      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <Bar data={barData} />
        <div className="grid grid-cols-3 gap-4 text-sm pt-4">
          <div>Total Orders: <span className="font-bold">47</span></div>
          <div>Total Revenue: <span className="font-bold">₦124,500</span></div>
          <div>Average Order Value: <span className="font-bold">₦2,648</span></div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Popular Items</h2>
          <Pie data={pieData} />
          <ul className="pt-4 text-sm space-y-1">
            <li>1. Butter Croissant (32%)</li>
            <li>2. Chocolate Muffin (18%)</li>
            <li>3. Cinnamon Roll (15%)</li>
            <li>4. Others (35%)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Customer Insights</h2>
          <div className="text-sm space-y-2">
            <p>New Customers: <span className="font-bold">12</span></p>
            <p>Returning Customers: <span className="font-bold">35</span></p>
            <p>Subscription Customers: <span className="font-bold">8</span></p>
          </div>
        </div>
      </section>

      
      <section className="bg-white p-6 rounded shadow space-y-2 text-sm">
        <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
        <p>Rating Average: <span className="font-bold">4.8★</span></p>
        <p>Order Completion Rate: <span className="font-bold">98%</span></p>
        <p>Average Preparation Time: <span className="font-bold">24 minutes</span></p>
        <p>Customer Return Rate: <span className="font-bold">74%</span></p>
      </section>
    </div>
  );
};

export default AnalyticsDashboard;
