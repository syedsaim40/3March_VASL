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
const cateogories = "Accessories";
    
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState();
  const [price, setPrice] = useState([0, 25000]);

  const [ratings, setRatings] = useState(0);

  const {
    products,
    //loading,
    error,
    productsCount,
    resultperpage,
    //filterproductCount,
  } = useSelector((state) => state.products);
let r=products &&
    products.filter((product) => {
      return  product.cateogery===cateogories;
    })
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  //let count = filterproductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    dispatch(getProduct(keyword, currentPage, price,  ratings));
  }, [dispatch, keyword, currentPage, price,  ratings, alert, error]);

  return (
    <Fragment>
      <MetaData title="PRODUCTS-VASL-Brings Tradition Up" />
      <Search />
      <h2 className="productsHeading">Products</h2>

      <div className="products">
        {r&&
          r.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      <div className="filterBox">
        <Typography>Price</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={25000}
          className="slider"
        />

        <Typography>Categories</Typography>
        

        <fieldset>
          <Typography component="legend">Ratings Above</Typography>
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

      
    </Fragment>
  );
};

export default Products;
