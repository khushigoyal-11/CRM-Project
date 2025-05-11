import React from 'react';
import axios from 'axios';
import StatCard from '../components/StatCard';
import PreviewList from '../components/PreviewList';
import DonutChart from '../components/DonutChart';

export default function Dashboard() {
  const [stats, setStats] = React.useState({ invoice:0, quote:0, payment:0, due:0, newCustPct:0 });

  React.useEffect(() => {
    axios.get('/api/orders/count').then(r => setStats(s => ({ ...s, invoice: r.data.count * 1000 })));
    axios.get('/api/customers/count').then(r => {
      const pct = ((r.data.count)/(r.data.count+100)*100).toFixed(2);
      setStats(s => ({ ...s, newCustPct: pct }));
    });
  }, []);

  const preview = [
    { label:'Draft', percent:17, color:'bg-gray-600' },
    { label:'Pending', percent:17, color:'bg-blue-500' },
    { label:'Unpaid', percent:67, color:'bg-yellow-400' },
    { label:'Overdue', percent:6, color:'bg-red-500' },
    { label:'Paid', percent:28, color:'bg-green-400' }
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard title="Invoice" subtitle="This Month" value={`₹${stats.invoice.toLocaleString()}`} colorClass="text-teal-500" />
        <StatCard title="Quote" subtitle="This Month" value={`₹${stats.quote}`} colorClass="text-purple-500" />
        <StatCard title="Payment" subtitle="This Month" value={`₹${stats.payment}`} colorClass="text-green-500" />
        <StatCard title="Due Balance" subtitle="Not Paid" value={`₹${stats.due}`} colorClass="text-red-500" />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <PreviewList title="Invoices Preview" items={preview} />
        <PreviewList title="Quotes Preview" items={preview} />
        <PreviewList title="Offers Preview" items={preview} />
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <DonutChart percent={Number(stats.newCustPct)} />
          <p className="mt-4 font-semibold">New Customer This Month</p>
          <p className="mt-2 text-green-500 font-bold">↑ {stats.newCustPct}%</p>
        </div>
      </div>
    </>
  );
}