import MasonryGridLayout from "@/components/MasonryGridLayout";
import { products } from "@/store/popularProductions";
import React from "react";

const Product = ({ params }) => {
  const { categories } = params;

  return (
    <div>
      <MasonryGridLayout data={products} title={categories.toUpperCase()} />
    </div>
  );
};

export default Product;
