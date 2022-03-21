import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "../Products/ProductCard";
import MetaData from "../Layout/Metadata";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
// import Loader from "./../Layout/Loader/Loader";
import { Link } from "react-router-dom";
// import Loaderr from "../Layout/Loader/Loader";
import Topfooter from "../Layout/Footer/Topfooter";
import Loader1 from "../Layout/Loader/loader1";


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// IMAGES FOR MAIN SLIDER OF HOME
import bimg1 from '../../../src/images/bimg1.jpg';
import bimg2 from '../../../src/images/bimg2.jpg';
import bimg3 from '../../../src/images/bimg3.jpg';
import bimg4 from '../../../src/images/bimg4.jpg';
import bimg5 from '../../../src/images/bimg5.jpg';
import bimg6 from '../../../src/images/bimg6.jpg';

// IMAGES FOR CATEGORIES SECTION @ HOME 
import cimg1 from '../../../src/images/cimg1.jpg';
import cimg2 from '../../../src/images/cimg2.jpg';
import cimg3 from '../../../src/images/cimg3.jpg';
import cimg4 from '../../../src/images/cimg4.jpg';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_Errors);
    }
    dispatch(getProduct());
  }, [alert, dispatch, error]);


  return (
    <Fragment>
      {/* {loading ? (
        <Loaderr />
      ) : ( */}
      <Fragment>
        <MetaData title="VASL-Brings Tradition Up" />
        <div id="vasl_banner">
          <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
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
            <Link to="/products">
              <img src={bimg5} className="sliderimg" alt="vasl-banner" />
            </Link>
            <Link to="/products">
              <img src={bimg6} className="sliderimg" alt="vasl-banner" />
            </Link>
          </AliceCarousel>
        </div>
        <div className="product_showcase">
          <div className="section_heading">
            <div className="homeHeading">
              <h2>Trending</h2>
            </div>
          </div>
          <div className="product_slider">
          <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={2000}
              centerMode
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {products ?
                products.slice(0, 10).map((product) => (

                  <ProductCard key={product._id} product={product} />
                )
                ) : (
                  <Loader1 />
                )}

            </Carousel>
          </div>
        </div>
        <div className="product_showcase">
          {/* <div className="showcase_desp">
              <div className="desp_holder"><h2>Shop by category</h2></div>
            </div> */}
          {/* <Carousel responsive={responsive} > */}

          <div className="section_heading">
            <div className="homeHeading">
              <h2>DISCOVER MORE</h2>
            </div>
          </div>

          <div className="product_slider">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={2000}
              centerMode
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {products ?
                products.slice(0, 10).map((product) => (

                  <ProductCard key={product._id} product={product} />
                )
                ) : (
                  <Loader1 />
                )}

            </Carousel>
          </div>
        </div>
        <div className="product_showcase">
          {/* <div className="showcase_desp">
              <div className="desp_holder"><h2>Shop by category</h2></div>
            </div> */}
          {/* <Carousel responsive={responsive} > */}

          <div className="section_heading">
            <div className="homeHeading">
              <h2>sHOP BY category</h2>
            </div>
          </div>
          <div className="categorized_products">
            <div className="cp_item">
              <Link to="/Newinn">
                <img src={cimg1} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>new Inn</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/products">
                <img src={cimg2} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>day to day</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/products">
                <img src={cimg3} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>the edit</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/products">
                <img src={cimg4} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>vasl featured</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="masonary_section">
          <div className="ms_desp">
            <div className="ms_holder">
              <h2>#Vasl Featured</h2>
              <Link to="/products">shop now</Link>
            </div>
          </div>
          <div id="mosaic_wrapper">
            <div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
            <div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
            <div className="bt_panel">
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
          </div>
        </div>
      </Fragment>

      {/* )} */}

      <Topfooter />
    </Fragment>

  );
};

export default Home;
