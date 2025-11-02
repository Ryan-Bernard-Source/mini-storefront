'use client';
import React from "react";

export default function StatusMessage({ text }) {
  return (
    <div className="border rounded p-3 text-center bg-gray-100 mb-3">
      {text}
    </div>
  );
}
