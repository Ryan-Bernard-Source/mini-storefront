'use client';
import React from "react";

export default function ProductCard(props) {
  var p = props.product;
  return (
    <div className="product-card">
      <h3 className="font-semibold">{p.name}</h3>
      <p className="text-sm text-gray-500">Price: ${p.price}</p>
      <p className="font-bold">Category: {p.category}</p>
      <p>Stock: {p.stock}</p>
      {p.stock > 0 ? (
        <button onClick={function () { props.onAdd(p.id); }}>
          Add to Cart</button>):(
        <p style={{ color: "red" }}>Out of Stock</p>
      )}
    </div>
  );
}
