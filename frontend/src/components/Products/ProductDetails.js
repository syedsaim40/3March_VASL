import React, { Fragment, useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetails,
  newReview,
  CLEAR_Errors,
} from "../../redux/action/productAction";
import { useParams } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import ReviewCard from "./ReviewCard";
import { useAlert } from "react-alert";

// import Loader from "../Layout/Loader/Loader";
import "react-lazy-load-image-component/src/effects/blur.css";
import Metadata from "./../Layout/Metadata";
// import Imageload from "../Layout/Loader/imageload";
import "../Layout/Loader/imageload.css";
import { addItemsToCart, FavouriteToCart } from "../../redux/action/cartAction";

import Speech from 'react-speech';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

import { NEW_REVIEW_RESET } from "../../redux/constant/productConstants";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import BasicTabs from "./ProductsDetailsTabs";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ProductDetails = ({ match }) => {
  // const [loaded, setLoaded] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, error } = useSelector((state) => state.productDetails);
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) {
      alert.error("FINISH");
      return;
    }
    if (product.stock === 0) {
      alert.error("FINISH");
      return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.stock === 0) {
      alert.error("Sorry !Out Of Stock");
      return;
    }
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };
  const FavouriteCart = () => {
    dispatch(FavouriteToCart(id, quantity));
    alert.success(" Favourite Item Added");
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("ratings", ratings);
    myForm.set("comment", comment);
    myForm.set("productid", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  // const stuffLoaded = () => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 2000);
  // };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors);
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(CLEAR_Errors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);


  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 102 },
      items: 4,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0
    }
  };

  return (
    <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Fragment>
        <Metadata title={`${product.name} ----ECOMMERECE`} />
        <div className="ProductDetails">
          {/* <Carousel
              next={() => {
                <ArrowBackIosNewIcon />;
              }}
              prev={() => {
                <ArrowForwardIosIcon />;
              }}
              indicators={false}
              interval={3000}
            >
              {!loaded && <Loader />}

              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    src={item.url}
                    alt={`${i} Slide`}
                    // onLoad={stuffLoaded}
                  />
                ))}
            </Carousel> */}
          <AliceCarousel autoPlay autoPlayInterval="3000">
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  src={item.url}
                  alt={`${i} Slide`}
                // onLoad={stuffLoaded}
                />
              ))}
          </AliceCarousel>

          <div className="product_details_holder">
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>SKU # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
              <span>({product.numofreviews} Reviews)</span>
              <Rating {...options} />{" "}
            </div>
            <div className="detailsBlock-3">
              <h1>{`PKR ${product.price}`}</h1>

              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button
                  className="btn_primary"
                  disabled={product.stock < 1 ? true : false}
                  onClick={addToCartHandler}
                >
                  Add to Bag
                </button>
                <button className="btn_primary" onClick={submitReviewToggle}>
                  Submit Review
                </button>
                <button className="btn_p" onClick={FavouriteCart}>
                  <FavoriteBorderIcon />
                </button>
              </div>
              <p>
                Availability:
                <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                  {product.stock < 1 ? " OutOfStock" : "InStock"}
                </b>
              </p>
            </div>

            <div className="detailsBlock-4">
              <div className="desp_holder">
                {" "}
                Description : <p>{product.description}</p>
              </div>

              {/* THIS IS OUR NEW FEATURE As Speech text button */}
              <Speech
                stop={true}
                pause={true}
                resume={true}
                text={product.description} />


              <div className="product_tabs">
                <BasicTabs />
              </div>
            </div>
          </div>
        </div>     
          <div className="section_heading">
            <div className="homeHeading">
              <h2>REVIEWS</h2>
            </div>
          </div>
        <Dialog
          aria-labelledby="simple-dialog-title"
          open={open}
          onClose={submitReviewToggle}
        >
          <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="submitDialog">
            <Rating
              onChange={(e) => setRatings(e.target.value)}
              value={ratings}
              size="large"
            />

            <textarea
              className="submitDialogTextArea"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <div className="submit_holder">
              <Button
                className="btn_primary"
                onClick={submitReviewToggle}
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                className="btn_primary"
                onClick={reviewSubmitHandler}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </DialogActions>
        </Dialog>

        {/* <h1>{product.reviews} </h1> */}
        {product.reviews && product.reviews[0] ? (
          <div className="reviews">
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              dotListClass=""
              draggable
              focusOnSelect={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              autoPlay={false}
              autoPlaySpeed={1000000000}
              /*
              swipeable={false}
              draggable={false}
              */
              responsive={responsive}
              ssr
              containerClass=" container"
              slidesToSlide={4}
              infinite={false}
            >
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </Carousel>
          </div>
        ) : (          
          <div className="section_heading">
            <div className="homeHeading">
              <h2>No Reviews</h2>
            </div>
          </div>
        )}
      </Fragment>
      {/* )} */}
    </Fragment>
  );
};

export default ProductDetails;
