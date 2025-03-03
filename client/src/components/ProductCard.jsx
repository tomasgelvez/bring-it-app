import React, { useEffect, useState } from "react";
// import styles from "../styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/ProductCard.module.css";
import AddFavourites from "./AddFavourites";
import { useSelector, useDispatch } from "react-redux";
import { getAllFavourites } from "../actions";
import { PinInputDescendantsProvider } from "@chakra-ui/react";

export default function ProductCard({
  name,
  description,
  image,
  price,
  business,
  categories,
  id,
}) {
  const dispatch = useDispatch();
  const allFavourites = useSelector((state) => state.allFavourites);

  useEffect(() => {
    dispatch(getAllFavourites());
  }, [dispatch]);

  if ( allFavourites && allFavourites.hasOwnProperty(`${id}`) ) {
     var fav = allFavourites[id]
  } else {
   var fav = 0
  }


  return (
    <div
      className="card"
      id={styles.card}
      style={{ padding: "0", margin: "10px", width: "14%", height: "420px" }}
    >
      <img
        className="card-img-top"
        style={{ objectFit: "cover", height: "40%" }}
        src={image}
        alt="no pudo cargarse la imagen"
      />
      <div className="card-body">
        <h5 className="card-title" id={styles.name}>
          {name}
        </h5>
        <h5 className="card-title" id={styles.price}>
          ${price}.00
        </h5>
        <p className="card-text" id={styles.description}>
          {description}
        </p>
        {/* <p>
          <span className={styles.bold}>Categorias:{"   "}</span>
          {Array.isArray(categories)
            ? categories.map((e) => e.name + "  ")
            : "No tiene categoria"}
        </p> */}
      </div>

      <a
        href={`/persona/product/${id}`}
        className="btn btn-primary stretched-link"
        id={styles.boton}
      >
        Ver Producto
      </a>

      <span>💜{fav}</span>
      <div className="card-footer" id={styles.empresa}>
        {/* <small style={{fontSize: '5px'}}> Empresa:{" "}</small> */}
        <small className="text-muted" id={styles.bold}>
          {business.businessBranchName
            ? business.businessBranchName.split(" - ")[0]
            : "No esta asociado a una empresa"}
        </small>
      </div>
    </div>
  );
}
