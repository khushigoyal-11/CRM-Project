import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
// import other pages when ready

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 bg-gray-50 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* add more routes for leads, offers, etc. */}
        </Routes>
      </main>
    </div>
  );
}