import React from 'react';
import axios from 'axios';
import StatCard from '../components/StatCard';

export default function CampaignList() {
  const [campaigns, setCampaigns] = React.useState([]);
  React.useEffect(() => {
    axios.get('/api/campaigns').then(res => setCampaigns(res.data));
  }, []);

  return (
    <div className="space-y-6">
      {campaigns.map(c => (
        <div key={c._id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{c.name}</h3>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <StatCard title="Audience Size" value={c.stats.audienceSize} />
            <StatCard title="Sent" value={c.stats.sent} />
            <StatCard title="Failed" value={c.stats.failed} />
          </div>
        </div>
      ))}
    </div>
  );
}