'use client';
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [ maxPrice, setMaxPrice] = useState('');
    const [cart, setCart] = useState({});
    const [loading, setStatus] = useState('loading');
    const [error, setError] = useState('');
// Fetch Product Data
 useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
        setError("Failed to load products");
      });
  }, []);
// Stock Change & Cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setProducts((prevList) =>
        prevList.map((item) => {
          if (item.stock > 0) {
            return { ...item, stock: item.stock - 1 };
          }
          return item;
        })
      );
    }, 5000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);
// Filter Products
  function getFiltered() {
    return products.filter(function (item) {
      var categoryMatch = category === "all" || item.category === category;
      var priceMatch = maxPrice === "" || item.price <= Number(maxPrice);
      return categoryMatch && priceMatch;
    });
  }
// Add to Cart
 function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
    );
  }
// Remove from Cart
  function removeFromCart(id) {
    setCart(prev => {
      const copy = {...prev};
      if (copy[id] > 1) copy[id]--;
      else delete copy[id];
      return copy;
    });
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );
  }
// Clear Cart
function clearCart(){
    var RestoredProducts = products.map(function (p) {
        if (cart[p.id]) {
            p.stock=p.stock+cart[p.id];
        }
        return p;
    });
    setProducts(RestoredProducts);
    setCart({});
}
var filteredProducts = getFiltered();

// Display
return(
    <div>
      <h2>Mini Storefront</h2>

      <CategoryFilter value={category} onChange={setCategory} />
      <PriceFilter value={maxPrice} onChange={setMaxPrice} />

      <CartSummary
        products={products}
        cart={cart}
        onRemove={removeFromCart}
        onReset={clearCart}
      />

      <StatusMessage
        loading={loading}
        error={error}
        isEmpty={filteredProducts.length === 0 && !loading}
      />

      {!loading && !error && (
        <ProductList products={filteredProducts} onAdd={addToCart} />
      )}
</div>
);
}



