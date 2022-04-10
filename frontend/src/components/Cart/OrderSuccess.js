import React, { Fragment } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";

const OrderSuccess = (props) => {
  const { error, isAuthenticated } = useSelector((state) => state.user);

  console.log(props.newOrder);
  return (
    <Fragment>
      {/* {props.newOrder ? ( */}
      <div className="orderSuccess">
        <CheckCircleIcon />

        <Typography>Your Order has been Placed successfully </Typography>
        <h1> {props.newOrder && props.newOrder.order._id}</h1>
        <Link
          to={
            isAuthenticated
              ? "/orders"
              : props.newOrder
              ? `/check/order/`
              : "/check/order/email"
          }
          className="btn_primary"
        >
          View Orders
        </Link>
      </div>
      {/* ) : null} */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  newOrder: state.newOrder.order,
});
export default connect(mapStateToProps)(OrderSuccess);
