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

const AnalyticsDashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-10 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Analytics</h1>
        <div className="flex flex-wrap gap-2">
          <button className="border px-4 py-2 rounded hover:bg-gray-100 text-sm sm:text-base">
            This Week ▼
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm sm:text-base">
            Download Report
          </button>
        </div>
      </header>

      {/* Sales Overview */}
      <section className="bg-white p-4 sm:p-6 rounded-2xl shadow space-y-6">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <div className="w-full h-64 sm:h-80">
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pt-2">
          <div>Total Orders: <span className="font-bold">47</span></div>
          <div>Total Revenue: <span className="font-bold">₦124,500</span></div>
          <div>Average Order Value: <span className="font-bold">₦2,648</span></div>
        </div>
      </section>

      {/* Popular Items & Customer Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Popular Items</h2>
          <div className="w-full h-64">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          <ul className="pt-4 text-sm space-y-1">
            <li>1. Butter Croissant (32%)</li>
            <li>2. Chocolate Muffin (18%)</li>
            <li>3. Cinnamon Roll (15%)</li>
            <li>4. Others (35%)</li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Customer Insights</h2>
          <div className="text-sm space-y-2">
            <p>New Customers: <span className="font-bold">12</span></p>
            <p>Returning Customers: <span className="font-bold">35</span></p>
            <p>Subscription Customers: <span className="font-bold">8</span></p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white p-4 sm:p-6 rounded-2xl shadow text-sm space-y-2">
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
