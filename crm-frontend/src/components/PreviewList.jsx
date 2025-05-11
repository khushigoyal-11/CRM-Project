import React from 'react';
export default function PreviewList({ title, items }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h4 className="text-md font-semibold text-primary mb-4">{title}</h4>
      {items.map(({ label, percent, color }, i) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>{label}</span>
            <span>{percent}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className={`${color} h-2 rounded`} style={{ width: `${percent}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}