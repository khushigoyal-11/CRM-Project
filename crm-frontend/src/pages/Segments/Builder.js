import React, { useState } from 'react';
import RuleBuilder from '../../components/RuleBuilder';
import SegmentPreview from '../../components/SegmentPreview';
import { previewSegment, createSegment } from '../../services/api';

export default function Builder() {
  const [rules, setRules]     = useState([]);
  const [count, setCount]     = useState(null);
  const [name, setName]       = useState('');

  const handlePreview = async () => {
    const cnt = await previewSegment(rules);
    setCount(cnt);
  };

  const handleSave = async () => {
    await createSegment(name, rules);
    // redirect to /segments
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Create Audience Segment</h1>
      <input
        type="text"
        placeholder="Segment Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <RuleBuilder rules={rules} onChange={setRules} />
      <div className="mt-4 space-x-2">
        <button onClick={handlePreview} className="px-4 py-2 bg-indigo-600 text-white rounded">
          Preview Audience Size
        </button>
        <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">
          Save Segment
        </button>
      </div>
      {count !== null && <SegmentPreview count={count} />}
    </>
  );
}
