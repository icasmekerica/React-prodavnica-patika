import React from "react";
import OneProduct from "./oneProduct";

const Products = ({ products, onAdd, onRemove  })  => {
    
  const name = "New Product Name";
  const description =
    "New product description that we got from Product component using props.";

    return (
        <div className="all-products">
          {products === null ? "No products" : products.map((p) => (
            <OneProduct
              key={p.id}
              product={p}
              onAdd={onAdd}
              onRemove={onRemove}  
            />
          ))}
        </div>
      );
    };

export default Products;

/*
 {products.map((product) => (
        <OneProduct
        key={product.id}
        product={product}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      ))}
*/