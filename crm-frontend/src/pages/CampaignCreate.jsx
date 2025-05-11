import React from 'react';
import axios from 'axios';
import RuleBuilder from '../components/RuleBuilder';

export default function CampaignCreate() {
  const [name, setName] = React.useState('');
  const [rules, setRules] = React.useState([{ field:'spent', operator:'>=', value:10000 }]);
  const [previewSize, setPreviewSize] = React.useState(0);

  const fetchPreview = async () => {
    const res = await axios.post('/api/campaigns/preview', { rules });
    setPreviewSize(res.data.audienceSize);
  };

  const save = async () => {
    await axios.post('/api/campaigns', { name, rules, userId: 'me' });
    window.location.href = '/campaigns';
  };

  return (
    <div className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Campaign Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <RuleBuilder rules={rules} setRules={setRules} />
      <button onClick={fetchPreview} className="btn">Preview ({previewSize})</button>
      <button onClick={save} className="btn">Save Campaign</button>
    </div>
       
  );
}