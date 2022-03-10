import React, { Fragment, useEffect, useState } from "react";
import "../Products/product.css";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
//import Loader from "../Layout/Loader/Loader";
import ProductCard from "../Products/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../Layout/Metadata";
import { useParams } from "react-router-dom";
import Search from "../Products/Search";


const Products = () => {
  const cateogories = "Womens";


  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState();
  const [price, setPrice] = useState([0, 25000]);
  const [cateogery, setcateogery] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    //loading,
    error,
    productsCount,
    resultperpage,
    filterproductCount,
  } = useSelector((state) => state.products);
  let r = products &&
    products.filter((product) => {
      return product.cateogery === cateogories;
    })
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filterproductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    dispatch(getProduct(keyword, currentPage, price, ratings));
  }, [dispatch, keyword, currentPage, price, ratings, alert, error]);

  return (
    <Fragment>
      <MetaData title="PRODUCTS-VASL-Brings Tradition Up" />
      <Search />
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