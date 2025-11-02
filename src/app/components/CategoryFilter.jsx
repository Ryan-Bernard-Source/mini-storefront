'use client';
import React from 'react';

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">Choose Category:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 bg-white hover:bg-gray-50"
      >
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Home">Home</option>
      </select>
      <p className="text-xs text-gray-500 mt-1">Filter products</p>
    </div>
  );
}
