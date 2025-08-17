import React from "react";
import { formatVND } from "../lib/currency.js";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-2 shadow-sm">
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{formatVND(product.price)}</p>
      <p className="text-sm text-yellow-500">⭐ {product.rating}</p>
    </div>
  );
}
