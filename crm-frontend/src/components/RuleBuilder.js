import React from 'react';
export default function RuleBuilder({ rules, setRules }) {
  const update = (i, key, val) => {
    const copy = [...rules];
    copy[i][key] = val;
    setRules(copy);
  };
  const addCondition = () => setRules([...rules, { field: 'spent', operator: '>=', value: 0 }]);

  return (
    <div className="space-y-2">
      {rules.map((cond, i) => (
        <div key={i} className="flex gap-2 items-center">
          <select value={cond.field} onChange={e => update(i, 'field', e.target.value)}>
            <option value="spent">Spent</option>
            <option value="lastOrderDays">Inactive Days</option>
          </select>
          <select value={cond.operator} onChange={e => update(i, 'operator', e.target.value)}>
            <option value=">=">≥</option>
            <option value=">">›</option>
          </select>
          <input
            type="number"
            value={cond.value}
            onChange={e => update(i, 'value', +e.target.value)}
            className="w-20 border p-1"
          />
          <button onClick={addCondition} className="px-2 py-1 bg-primary text-white rounded">+</button>
        </div>
      ))}
    </div>
  );
}