import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import { fetchCampaigns } from '../services/api';

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns().then(setCampaigns);
  }, []);

  // aggregate stats, etc...
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard label="Total Campaigns" value={campaigns.length} />
        {/* add more cards: sent %, failed %, top segments */}
      </div>
      {/* Maybe list recent campaigns */}
    </>
  );
}
