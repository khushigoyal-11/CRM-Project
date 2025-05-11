import React from 'react';
export default function StatsCard({ title, subtitle, value, colorClass }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <span className={`text-xl font-bold ${colorClass}`}>{value}</span>
    </div>
  );
}