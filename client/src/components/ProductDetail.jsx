import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsDetail, setDetail } from "../actions";
import { useEffect } from "react";
import { SpinnerCircular } from "spinners-react";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productsDetail);

  

  const { id } = useParams();

  useEffect(() => {
    
    dispatch(getAllProductsDetail(id));
    dispatch(console.log(productDetail) ) 
    // return () => {
    //   dispatch(setDetail());
    // };
  }, [dispatch, id]);
  
  
    

  
  return (
    
    <div>
         ProductDetail


     </div>
     )
};
