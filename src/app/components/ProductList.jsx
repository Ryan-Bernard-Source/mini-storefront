'use client';
import React from React;
import ProductCard from "./ProductCard";

export default function ProductList(props){
    return(
        <div className="product-list">
        {props.products.map(function (p) {
        return (
          <ProductCard key={p.id} product={p} onAdd={props.onAdd} />
        );
      })}
        </div>
    );
}