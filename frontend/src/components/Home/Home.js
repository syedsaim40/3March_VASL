import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "../Products/ProductCard";
import MetaData from "../Layout/Metadata";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "./../Layout/Loader/Loader";
import { Link } from "react-router-dom";
import Loaderr from "../Layout/Loader/Loader";


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import bimg1 from '../../../src/images/bimg1.jpg';
import bimg2 from '../../../src/images/bimg2.jpg';
import bimg3 from '../../../src/images/bimg3.jpg';
import bimg4 from '../../../src/images/bimg4.jpg';


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_Errors);
    }
    dispatch(getProduct());
  }, [alert, dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loaderr />
      ) : (
        <Fragment>
          <MetaData title="VASL-Brings Tradition Up" />
          <div id="vasl_banner">
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <Link to="/products">
                <img src={bimg1} className="sliderimg" alt="vasl-banner" />
              </Link>
              <Link to="/products">
                <img src={bimg2} className="sliderimg" alt="vasl-banner" />
              </Link>
              <Link to="/products">
                <img src={bimg3} className="sliderimg" alt="vasl-banner" />
              </Link>
              <Link to="/products">
                <img src={bimg4} className="sliderimg" alt="vasl-banner" />
              </Link>
            </AliceCarousel>
          </div>
          {/* <div className="banner">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display" }}
              startDelay={100}
              cursorColor="white"
              text="WELLCOME TO VASL CLOTHINGS"
              typeSpeed={100}
            />
          </div> */}
          <div className="section_heading">
            <div className="homeHeading">
              <h2>Trending</h2>
            </div>
          </div>
          <div className="container" id="container">
            {products ? (
              products.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })
            ) : (
              <Loader />
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
