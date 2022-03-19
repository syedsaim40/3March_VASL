import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <Link to={`/oneproduct/${item.product}`}>
        <img src={item.image} alt="ssa" />
      </Link>
      <div>
        <Link to={`/oneproduct/${item.product}`}>{item.name}</Link>
        <span>{`Price: PKR${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>
          <DeleteForeverRoundedIcon />
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
