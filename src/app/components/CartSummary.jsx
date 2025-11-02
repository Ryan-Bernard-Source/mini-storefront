'use client';
import React from "react";
export default function CartSummary(props) {
  var cart = props.cart;
  var products = props.products || [];

  // Count total items
  var itemCount = 0;
  var total = 0;
  for (var id in cart) {
    var qty = cart[id];
    itemCount += qty;
    var item = products.find(function (p) { return p.id === id; });
    if (item) total += item.price * qty;
  }
  return (
    <div className="p-4 border rounded mb-4 bg-gray-50">
      <h2 className="font-bold mb-2 text-lg">Cart Summary</h2>
      <p>Items: {itemCount}</p>
      <p>Total: ${total.toFixed(2)}</p>
      {itemCount > 0 ? (
        <button
          onClick={onReset}
          className="mt-2 px-3 py-1 bg-black text-white rounded hover:bg-gray-800">Clear Cart</button>
      ):(<p className="text-sm text-black-500 mt-2">Cart is Empty.</p>)}
    </div>
  );
}
