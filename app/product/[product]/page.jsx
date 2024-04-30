import React from "react";

const Product = ({ params }) => {
  const { product } = params;
  
  return <div>{product}</div>;
};

export default Product;
