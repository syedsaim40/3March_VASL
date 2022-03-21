import React, { Fragment, useEffect, useState } from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
// import ploader from "../Layout/Loader/loader1";
import ProductCard from "./ProductCard";
// import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import MetaData from "../Layout/Metadata";
import { useParams } from "react-router-dom";
// import Search from "./Search";

const cateogories = [
  "Womens",
  "Newinn",
  "Accessories",
  "Unstiched",
  "AClothes",
  "Replicas",
  "ReadyToWear",
];
const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage] = useState();
  const [price, setPrice] = useState([0, 25000]);
  const [cateogery, setcateogery] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    //loading,
    error,
  } = useSelector((state) => state.products);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  //let count = filterproductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    dispatch(getProduct(keyword, currentPage, price, cateogery, ratings));
  }, [dispatch, keyword, currentPage, price, cateogery, ratings, alert, error]);

  return (
    <Fragment>
      <MetaData title="Products-VASL" />
      <div className="section_heading">
        <div className="homeHeading">
          <h2>vasl Products</h2>
        </div>
      </div>
      <div className="filterBox">
        <div className="fl_box price_fil">
          <h2>Price</h2>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
            className="slider"
          />
        </div>
        <div className="fl_box cate_list">
          <h2 className="deco">Categories</h2>
          <ul className="categoryBox unstyled">
            {cateogories.map((cato) => (
              <li
                className="category-link"
                key={cato}
                onClick={() => setcateogery(cato)}
              >
                {cato}
              </li>
            ))}
          </ul>
        </div>
        <div className="fl_box rate_fld">
          <fieldset>
            <h2>Ratings Above</h2>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5}
              className="slider"
            />
          </fieldset>
        </div>
      </div>

      <div className="products">
        {products ? (
          products
            .slice(0, 10)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
        ) : (
          <ploader />
        )}
      </div>

      {/* 
      {resultperpage < productsCount && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultperpage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )} */}
    </Fragment>
  );
};

export default Products;
