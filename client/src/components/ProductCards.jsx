import React from "react";
import ProductCard from './ProductCard'
import styles from "../styles/ProductCards.module.css";

export default function ProductCards({ currentProducts }) {
   
  return (
    // <div className={styles.grid}>
    <div className="card-deck" style={{display: "flex", justifyContent: "space-around", marginTop: "20px"}}>
      <div className="row" style={{justifyContent: "space-around"}}>
      {currentProducts.map((el) => (
        <ProductCard
          key={el.id}
          name={el.name}
          price={el.price}
          weight={el.weight}
          description={el.description}
          image={el.image}
          id={el.id}
          businessName={el.businessName}

        />
      ))}
    </div>
    </div>
  );
}