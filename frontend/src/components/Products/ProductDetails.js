import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
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

import Loader from "../Layout/Loader/Loader";
import "react-lazy-load-image-component/src/effects/blur.css";
import Metadata from "./../Layout/Metadata";
// import Imageload from "../Layout/Loader/imageload";
import "../Layout/Loader/imageload.css";
import { addItemsToCart } from "../../redux/action/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

import { NEW_REVIEW_RESET } from "../../redux/constant/productConstants";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import BasicTabs from "./ProductsDetailsTabs";

const ProductDetails = ({ match }) => {
  // const [loaded, setLoaded] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
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
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${product.name} ----ECOMMERECE`} />
          <div className="ProductDetails">
            <Carousel 
              
              next={ () => {<ArrowBackIosNewIcon />} }
              prev={ () => {<ArrowForwardIosIcon />} } 
              indicators={false} 
              interval={3000}
            >
              {/* {!loaded && <Loader />} */}

              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    src={item.url}
                    alt={`${i} Slide`}
                    // onLoad={stuffLoaded}
                  />
                ))}
            </Carousel>

            <div className="product_details_holder">
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                {/* <p>Product # {product._id}</p> */}
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
                  <button className="btn_primary"
                    disabled={product.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Bag
                  </button>
                  <button className="btn_primary" onClick={submitReviewToggle}>
                    Submit Review
                  </button>
                </div>
                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? " OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
               <div className="desp_holder"> Description : <p>{product.description}</p></div>
                {/* <BasicTabs /> */}
              </div>
              
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
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
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {/* <h1>{product.reviews} </h1> */}
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
