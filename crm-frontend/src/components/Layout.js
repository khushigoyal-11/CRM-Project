import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow px-6 py-8">
        <img src="/logo.svg" alt="CRM Logo" className="h-8 mb-8" />
        <nav className="space-y-4">
          <Link to="/">Dashboard</Link>
          <Link to="/segments">Segments</Link>
          <Link to="/campaigns">Campaigns</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
