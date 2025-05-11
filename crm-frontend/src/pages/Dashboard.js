import React from 'react';
import axios from 'axios';
import StatsCard from '../components/StatsCard';
import PreviewList from '../components/PreviewList';
import DonutChart from '../components/DonutChart';

export default function Dashboard() {
  const [stats, setStats] = React.useState({
    invoiceTotal: 0,
    quoteTotal: 0,
    paymentTotal: 0,
    dueBalance: 0,
    newCustomerPercent: 0
  });

  React.useEffect(() => {
    async function fetchStats() {
      try {
        const [orderRes, customerRes] = await Promise.all([
          axios.get('/api/order/count'),
          axios.get('/api/customer/getCustomerCount')
        ]);
        const orderCount = orderRes.data.count;
        const customerCount = customerRes.data.count;
        setStats({
          invoiceTotal: orderCount * 1000,
          quoteTotal: orderCount * 800,
          paymentTotal: orderCount * 500,
          dueBalance: orderCount * 300,
          newCustomerPercent: customerCount
            ? ((customerCount / (customerCount + 100)) * 100).toFixed(2)
            : 0
        });
      } catch (e) {
        console.error(e);
      }
    }
    fetchStats();
  }, []);

  const invoiceStats = [
    { label: 'Draft', percent: 17, color: 'bg-gray-600' },
    { label: 'Pending', percent: 17, color: 'bg-blue-500' },
    { label: 'Unpaid', percent: 67, color: 'bg-yellow-400' },
    { label: 'Overdue', percent: 6, color: 'bg-red-500' },
    { label: 'Paid', percent: 28, color: 'bg-green-400' }
  ];
  const quoteStats = [...invoiceStats];
  const offerStats = [...invoiceStats];

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Invoice"
          subtitle="This Month"
          value={`₹${stats.invoiceTotal.toLocaleString()}`}
          colorClass="text-teal-500"
        />
        <StatCard
          title="Quote"
          subtitle="This Month"
          value={`₹${stats.quoteTotal.toLocaleString()}`}
          colorClass="text-purple-500"
        />
        <StatCard
          title="Payment"
          subtitle="This Month"
          value={`₹${stats.paymentTotal.toLocaleString()}`}
          colorClass="text-green-500"
        />
        <StatCard
          title="Due Balance"
          subtitle="Not Paid"
          value={`₹${stats.dueBalance.toLocaleString()}`}
          colorClass="text-red-500"
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <PreviewList title="Invoices Preview" items={invoiceStats} />
        <PreviewList title="Quotes Preview" items={quoteStats} />
        <PreviewList title="Offers Preview" items={offerStats} />
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <DonutChart percent={Number(stats.newCustomerPercent)} />
          <p className="mt-4 font-semibold">New Customer This Month</p>
          <p className="mt-2 text-green-500 font-bold">↑ {stats.newCustomerPercent}%</p>
        </div>
      </div>
    </>
  );
}