import React, { Fragment, useEffect } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import MetaData from "../Layout/Metadata";
import { useSelector, useDispatch, connect } from "react-redux";
import { useAlert } from "react-alert";
import { createOrder, clearErrors } from "../../redux/action/orderaction";
import { RESETCart } from "../../redux/action/cartAction";

import "./payment.css";
const Payment = ({ history }, props) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const alert = useAlert();
  const [selectedval, setselectedval] = React.useState("");
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
      id: selectedval,
      status: "succeede",
    },
  };
  const handlechange = (e) => {
    setselectedval(e.target.value);
  };
  // if (!selectedval) {
  //   alert("Select 1 " + selectedval + " Input");
  // }
  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(createOrder(order)).then(function (result) {
      console.log(result);
    });

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
              <h2>
                <b>PAyment Info</b>
              </h2>
            </div>
          </div>
          <div className="shipping_fee">
            <h2>Subtotal:</h2>
            <p>Subtotal</p>
            <span>{orderInfo.subtotal}</span>
          </div>
          <div className="shipping_fee">
            <h2>Shipping</h2>
            <p>shipping fee:</p>
            <span>{orderInfo.shippingCharges}</span>
          </div>
          <div className="ftotal_prc">
            <span>
              <b>TOTAL</b>
            </span>
            <span>
              <b>{orderInfo.totalPrice}</b>
            </span>
          </div>
          <div className="payment_accordian">
            <form action="submit">
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">BANK TRANSFER PAYMENT</label>
                  <input
                    type="radio"
                    id="demo"
                    name="pa_value"
                    checked={selectedval === "BANK  PAYMENT"}
                    onChange={handlechange}
                    value="BANK  PAYMENT"
                  />
                  <label for="demo" className="pa_lbl">
                    <p>
                      <span>Payment Details:</span>
                      <span>Bank Title : Azeem Mehmood</span>
                      <span>Bank Name : Meezan Bank</span>
                      <span>Bank Account #: 09050104237471</span>
                      <span>IBAN #: PK27 MEZN 0009 05014237471</span>
                    </p>
                    <p>
                      Please Send transaction number or screenshot of receipt to
                      email: admin@smarteshop.pk or whatsapp number:
                      0331-5865152
                    </p>
                  </label>
                </div>
              </div>
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">
                    EASY PAISA & JAZZCASH TRANSFER
                  </label>
                  <input
                    type="radio"
                    id="demo"
                    name="pa_value"
                    checked={selectedval === "EASY PAISA & JAZZCASH"}
                    value="EASY PAISA & JAZZCASH"
                    onChange={handlechange}
                  />
                  <label for="demo" className="pa_lbl">
                    <p>
                      <span>Payment Details:</span>
                      <span>EasyPaisa Account : 03455865152</span>
                      <span>Jazzcash Account : 03135865152</span>
                      <span>Acounts Holder Name : Azeem Mehmood</span>
                    </p>
                    <p>
                      Please Send transaction number or screenshot of receipt to
                      email: admin@smarteshop.pk or whatsapp number:
                      0331-5865152
                    </p>
                  </label>
                </div>
              </div>
              <div className="pa_box">
                <div className="pa_text">
                  <label className="lShow">CASH ON DELIVERY</label>
                  <input
                    type="radio"
                    id="demo"
                    name="pa_value"
                    checked={selectedval === "CASH ON DELIVERY"}
                    value="CASH ON DELIVERY"
                    onChange={handlechange}
                  />
                  <label for="demo" className="pa_lbl">
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
            <input
              type="submit"
              className="paymentFormBtn btn_primary"
              disabled={!selectedval}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  newOrder: state,
});
export default connect(mapStateToProps)(Payment);
