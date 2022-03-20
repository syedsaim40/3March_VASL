// import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Layout/Loader/imageload.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors } from "../../redux/action/productAction";
// import Imageload from "../Layout/Loader/imageload";
import Loader1 from "../Layout/Loader/loader1";
import { addItemsToCart, FavouriteToCart } from "../../redux/action/cartAction";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useAlert } from "react-alert";

export const Product = ({ product }) => {
  const { error } = useSelector((state) => state.productDetails);
  const [loaded, setLoaded] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  const addToCartHandler = () => {
    if (product.stock === 0) {
      alert.error("Sorry !Out Of Stock");
      return;
    }
    dispatch(addItemsToCart(product._id, quantity));
    alert.success("Item Added To Cart");
  };
  const FavouriteCart = () => {
    dispatch(FavouriteToCart(product._id, quantity));
    alert.success(" Favourite Item Added");
  };
  setTimeout(() => {
    setLoaded(true);
  }, 1000);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors);
    }
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loaded ? (
        <>
          <div className="productCard productCard_Holder">
<<<<<<< HEAD
            {/* ye btn dil wala mene add ,kia h */}
=======
<<<<<<< HEAD
            {/* <div className="wishList_btn"></div> */}
=======
>>>>>>> f77f4a469d385f85b957e2da06d00d713964dd87
            <div className="wishList_btn">
              <FavoriteTwoToneIcon onClick={() => FavouriteCart()} />
            </div>
>>>>>>> 2dd63df020b0cf35084f5f3482b21d22f635bdfd
            <Link className="productCard" to={`/oneproduct/${product._id}`}>
              <img alt={product.name} src={product.images[0].url} />
            </Link>
            <div className="shop_btn">
<<<<<<< HEAD
              <ShoppingBasketIcon onClick={() => addToCartHandler()} />
              {/* <span>Shop Now</span> */}
              <FavoriteTwoToneIcon onClick={() => FavouriteCart()} />
              {/* <span>Favourite</span> */}
            </div>
            {/* <div className="shop_btn2">
              </div> */}
            <div className="product_desp">
              <p>{product.name}</p>
              <span>{`PKR ${product.price}`}</span>
            </div>
=======
              <ShoppingBasketIcon />
            </div>
            <div className="product_desp">
              <p>{product.name}</p>
              <span>{`PKR ${product.price}`}</span>
            </div>
>>>>>>> 2dd63df020b0cf35084f5f3482b21d22f635bdfd
          </div>
          {/* <div>
              <Rating {...options} />{" "}
              <span className="productCardSpan">
                ({product.numofreviews} Reviews)
              </span>
            </div> */}
        </>
      ) : (
        <>
          {/* <Imageload /> */}
          <Loader1 />
        </>
      )}
    </Fragment>
  );
};
export default Product;
