'use client';
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState({});
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProducts((prevList) =>
        prevList.map((item) =>
          item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
        )
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  function getFiltered() {
    return products.filter((item) => {
      const matchCategory = category === "all" || item.category === category;
      const matchPrice = maxPrice === "" || item.price <= Number(maxPrice);
      return matchCategory && matchPrice;
    });
  }

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
    );
  }

  function removeFromCart(id) {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) updated[id]--;
      else delete updated[id];
      return updated;
    });
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );
  }

  function clearCart() {
    setProducts((prev) =>
      prev.map((p) =>
        cart[p.id] ? { ...p, stock: p.stock + cart[p.id] } : p
      )
    );
    setCart({});
  }

  const filteredProducts = getFiltered();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mini Storefront</h2>

      <div className="flex gap-4 mb-4">
        <CategoryFilter value={category} onChange={setCategory} />
        <PriceFilter value={maxPrice} onChange={setMaxPrice} />
      </div>

      <CartSummary
        products={products}
        cart={cart}
        onRemove={removeFromCart}
        onReset={clearCart}
      />

      {status === "loading" && <StatusMessage text="Loading products..." />}
      {status === "error" && <StatusMessage text={error} />}
      {status === "success" && filteredProducts.length === 0 && (
        <StatusMessage text="No products found for your filters." />
      )}

      {status === "success" && (
        <ProductList products={filteredProducts} onAdd={addToCart} />
      )}
    </div>
  );
}