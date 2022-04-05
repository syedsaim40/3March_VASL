import React, { Fragment, useEffect } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import MetaData from "../Layout/Metadata";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { createOrder, clearErrors } from "../../redux/action/orderaction";
import { RESETCart } from "../../redux/action/cartAction";
import Collapsible from "react-collapsible";

import "./payment.css";
const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    paymentInfo: {
      id: "sample paymentinfo",
      status: "succeeded",
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createOrder(order));

    dispatch(RESETCart());
    history.push("/success");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <div className="order_info">
          <div className="section_heading">
            <div className="homeHeading">
              <h2>PAyment Info</h2>
            </div>
          </div>
          <div className="payment_info">
            <h2>product</h2>
            <h2>subtotal</h2>
          </div>
          <div className="product_info">
            <p className="product_name">Yaha Product name aye ga</p>
            <span className="product_price">Yaha product price any hai</span>
          </div>
          <div className="total_prc">
            <span>SUBTOTAL</span>
            <span>Yaha Sub-Total Price any hai</span>
          </div>
          <div className="shipping_fee">
            <h2>Shipping</h2>
            <p>shipping fee:</p>
            <span>200</span>
          </div>
          <div className="ftotal_prc">
            <span>TOTAL</span>
            <span>Yaha Total Price any hai</span>
          </div>
          <div className="payment_accordian">
            <form action="submit">
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">Bank Transfer Payment</label>
                  <input type="radio" id="demo" name="pa_value" value="Bank Transfer Payment" />
                  <label for="demo">
                    <p>
                      <span>Payment Details:</span>
                      <span>Bank Title : Azeem Mehmood</span>
                      <span>Bank Name : Meezan Bank</span>
                      <span>Bank Account #: 09050104237471</span>
                      <span>IBAN #: PK27 MEZN 0009 05014237471</span>
                    </p>
                    <p>
                      Please Send transaction number or screenshot of receipt to email: admin@smarteshop.pk or whatsapp number: 0331-5865152</p>
                  </label>
                </div>
              </div>
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">Easy Paisa and JazzCash Transfer</label>
                  <input type="radio" id="demo" name="pa_value" value="Bank Transfer Payment" />
                  <label for="demo">
                    <p>
                      <span>Payment Details:</span>
                      <span>EasyPaisa Account : 03455865152</span>
                      <span>Jazzcash Account : 03135865152</span>
                      <span>Acounts Holder Name : Azeem Mehmood</span>
                    </p>
                    <p>
                      Please Send transaction number or screenshot of receipt to email: admin@smarteshop.pk or whatsapp number: 0331-5865152</p>
                  </label>
                </div>
              </div>
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">Cash on delivery</label>
                  <input type="radio" id="demo" name="pa_value" value="Bank Transfer Payment" />
                  <label for="demo">
                    <p>
                      <span>Pay with cash upon delivery.</span>
                    </p>
                  </label>
                </div>
              </div>
            </form>

            {/* <Collapsible
              trigger="Get in Touch"
              className="accordian_footer hide_footer"
            >
              <div className="mf_box">
                <address>
                  VASL Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
                  University of Engineering and Technology, Lahore.
                </address>
                <div className="mail_link">
                </div>
                <div className="mail_link">
                  <span>+92(0)3 209-455-811</span>
                </div>
              </div>
            </Collapsible> */}
          </div>
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <input type="submit" className="paymentFormBtn btn_primary" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Payment;
