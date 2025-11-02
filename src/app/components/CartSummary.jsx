'use client';
import React from "react";

export default function CartSummary({ cart = {}, products = [], onReset, onRemove }) {
  let itemCount = 0;
  let total = 0;

  for (let id in cart) {
    const qty = cart[id];
    itemCount += qty;
    const item = products.find((p) => p.id === id);
    if (item) total += item.price * qty;
  }

  return (
    <div className="p-4 border rounded mb-4 bg-gray-50">
      <h2 className="font-bold mb-2 text-lg">Cart Summary</h2>
      <p>Items: {itemCount}</p>
      <p>Total: ${total.toFixed(2)}</p>

      {itemCount > 0 && (
        <div className="mt-2 flex gap-2">
          <button
            onClick={onReset}
            className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

