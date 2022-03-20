// import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Layout/Loader/imageload.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors } from "../../redux/action/productAction";
// import Imageload from "../Layout/Loader/imageload";
import Loader1 from "../Layout/Loader/loader1";
import { FavouriteToCart } from "../../redux/action/cartAction";
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
        <Link className="productCard" to={`/oneproduct/${product._id}`}>
          <>
            <div className="productCard productCard_Holder">
              
            {/* <div className="wishList_btn"></div> */}
              <img alt={product.name} src={product.images[0].url} />
              <div className="shop_btn">
                <ShoppingBasketIcon />
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
            </div>
            {/* <div>
              <Rating {...options} />{" "}
              <span className="productCardSpan">
                ({product.numofreviews} Reviews)
              </span>
            </div> */}
          </>
        </Link>
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
