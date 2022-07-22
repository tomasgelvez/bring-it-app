import React from "react";
import ProductCard from './ProductCard'
import styles from "../styles/ProductCards.module.css";

export default function ProductCards({ products }) {
   
  return (
    <div className={styles.grid}>
      {products.map((el) => (
        <ProductCard
          key={el.productId}
          name={el.name}
          price={el.price}
          weight={el.weight}
          description={el.description}
          image={el.image}
          id={el.productId}
        />
      ))}
    </div>
  );
}