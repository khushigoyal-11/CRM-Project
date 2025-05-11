import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaUser, FaClipboardList, FaFileInvoice, FaCogs } from 'react-icons/fa';

const menu = [
  { to: '/', label: 'Dashboard', icon: FaChartPie },
  { to: '/campaigns/new', label: 'New Campaign', icon: FaClipboardList },
  { to: '/campaigns', label: 'Campaigns', icon: FaFileInvoice },
  { to: '/settings', label: 'Settings', icon: FaCogs }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed">
      <div className="p-6 text-2xl font-bold text-primary">iDURAR</div>
      <nav className="mt-10">
        {menu.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-gray-100 text-gray-700 ${
                isActive ? 'bg-gray-200 font-semibold' : ''
              }`
            }
          >
            <Icon className="mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}