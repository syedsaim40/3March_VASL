import React, { Fragment, useEffect } from "react";
import "../Products/product.css";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
//import Loader from "../Layout/Loader/Loader";
import ProductCard from "../Products/ProductCard";
import { useAlert } from "react-alert";
import MetaData from "../Layout/Metadata";
import { useParams } from "react-router-dom";


const Products = () => {
  const cateogories = "Womens";


  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();


  const {
    products,
    //loading,
    error
  } = useSelector((state) => state.products);
  let r = products &&
    products.filter((product) => {
      return product.cateogery === cateogories;
    })
  // const setCurrentPageNo = (e) => {
  //   setCurrentPage(e);
  // };

  // const priceHandler = (event, newPrice) => {
  //   setPrice(newPrice);
  // };
  // let count = filterproductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword, alert, error]);

  return (
    <Fragment>
      <MetaData title="Womens-VASL" />
      <div className="section_heading">
        <div className="homeHeading">
          <h2>Womens</h2>
        </div>
      </div>

      <div className="products">
        {r &&
          r.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>


    </Fragment>
  );
};

export default Products;