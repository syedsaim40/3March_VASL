// // import { Rating } from "@material-ui/lab";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../Layout/Loader/imageload.css";
// import { Fragment } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { CLEAR_Errors } from "../../redux/action/productAction";
// // import Imageload from "../Layout/Loader/imageload";
// import Loader1 from "../Layout/Loader/loader1";
// import { addItemsToCart, FavouriteToCart } from "../../redux/action/cartAction";
// // import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// // import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { useAlert } from "react-alert";

// export const Product = ({ order }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <Fragment>
//       {loaded ? (
//         <>
//           <div className="productCard">
//             <div className="productCard productCard_Holder">
//               {/* ye btn dil wala mene add ,kia h */}

//               {/* <div className="prc_after"></div> */}
//               <Link className="prd_img" to={`/oneproduct/${product._id}`}>
//                 <img alt={order.name} src={order.images[0].url} />
//               </Link>
//               <div className="shop_btn">
//                 <span className="sb_bag">
//                   <ShoppingBagOutlinedIcon onClick={() => addToCartHandler()} />
//                 </span>
//                 <span className="sbtn_txt">Add to Bag</span>
//               </div>
//               <div className="product_desp">
//                 <p>{product.name}</p>
//                 <span>{`PKR ${product.price}`}</span>
//               </div>
//             </div>
//             {/* <div>
//               <Rating {...options} />{" "}
//               <span className="productCardSpan">
//                 ({product.numofreviews} Reviews)
//               </span>
//             </div> */}
//           </div>
//         </>
//       ) : (
//         <>
//           {/* <Imageload /> */}
//           <Loader1 />
//         </>
//       )}
//     </Fragment>
//   );
// };
// export default Product;
