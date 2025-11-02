'use client';
export default function PriceFilter({ value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">
        Max Price:
      </label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2"/>
    </div>
  );
}
