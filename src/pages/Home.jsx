import React from "react";
import { products } from "../lib/products";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <ProductList products={products} />
    </div>
  );
}
