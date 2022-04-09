const Order = require("../models/ordermodel");
const Product = require("../models/productmodel");
const Errorhandler = require("../utils/errorhandler");
const catchasyncerror = require("../middleware/asyncerror.js");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
// Create new Order
exports.neworder = catchasyncerror(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const message = `Thank You! For shop at VASL`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve(__dirname, ".././views"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, ".././views"),
    extName: ".handlebars",
  };

  transporter.use("compile", hbs(handlebarOptions));
  const mailoption = {
    from: process.env.SMPT_MAIL,
    to: shippingInfo.email,
    subject: "VASL CLOTHES SHOPPING",
    text: message,
    template: "email",
    // context: {
    //   name: "Muhammad Hamza",
    //   company: "Vasal Clothing",
    // },
    // html: '<strong style="color:red;">Thank You! For shop at VASL</strong>',
    // html: '<div style="width:600px; text-align:center; padding:30px 20px; margin:0 auto; background:#fff; border:1px solid #444;"><strong style="text-align:center; color:#444; display:block; margin-bottom:30px;">Thank You! For shop at VASL</strong><img width="200" height="100" style="margin: 0 auto;" alt="vasl-logo" src="https://res.cloudinary.com/vaslcloth/image/upload/v1649262973/avatars/logo_geoqbu.png" /><strong style="text-align:center; color:#444; display:block; margin-bottom:30px;">You can check your Order Status by putting your email at VASL</strong><p style="color:#444; display:block; margin-bottom:30px;">VASL’s top priority is your privacy protection when dealing with us. To safeguard your trust, we have a policy that recognizes the importance of protecting your personal information; explaining what personal information constitutes, how we use the information, who has access to your data, and what are your rights regarding your personal information.; This Privacy Policy does not apply to websites maintained by other companies or organizations to which we link and VASL is not responsible for any personal information you submit to third parties via our website. Please ensure that you read the Privacy Policy of such other companies or organizations before submitting your details. Your access and use of www.vasl.pk constitute your acceptance of our Privacy Policy and Terms of Use.</p><a href="www.vasl.pk" style="display:block; padding:10px 20px; background:#444; text-decoration:none; font-size:14px; color:#fff;">View Order</a></div>',
  };
  transporter.sendMail(mailoption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: shippingInfo.email,
  });

  res.status(201).json({
    success: true,
    order,
  });
});
// get Single Order
exports.getsingleorder = catchasyncerror(async (req, res, next) => {
  const user = req.user._id;
  const query = { user: user };
  const order = await Order.findById(req.params.id).populate({
    path: "user._id",
    select: " user name email",
  });

  if (!order) {
    return next(new Errorhandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});
//ye nechy wala email wala ha
exports.getrandomemailorder = catchasyncerror(async (req, res, next) => {
  var user = req.params.user;
  const order = await Order.find({ user: user });

  if (!order) {
    return next(new Errorhandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});
//order id
exports.getrandomcheckorder = catchasyncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new Errorhandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});
// get logged in user  Orders
exports.getmyorder = catchasyncerror(async (req, res, next) => {
  // const orders = await Order.find({ user: req.user.name }).populate([
  //   { path: "user", model: "User", select: "name" },
  // ]);
  const user = req.user.email;
  const query = { user: user };
  const orders = await Order.find(query);

  res.status(200).json({
    success: true,
    orders,
  });
});

// get All Orders and total price --Admin
exports.getallorder = catchasyncerror(async (req, res, next) => {
  const orders = await Order.find();
  let totalamount = 0;
  orders.forEach((order) => {
    totalamount += order.totalPrice; //ye sarey total kr liye order kitny pesy bnty
  });
  res.status(200).json({
    success: true,
    totalamount,
    orders,
  });
});
// update order status --Admin
exports.updateorder = catchasyncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new Errorhandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new Errorhandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

// exports.updateorder = catchasyncerror(async (req, res, next) => {
//   const order = await Order.findById(req.params.id); //ye id do order ki jo update krna status
//   if (!order) {
//     return next(new Errorhandler("Order not found with this Id", 404));
//   }
//   if (order.orderStatus === "Delivered") {
//     //ye delivered k liye lgya agr already ha
//     return next(new Errorhandler("You have already delivered this order", 400));
//   }
//   order.orderItems.forEach(async (order) => {
//     //ye stock minus kiya ha function bnya nechy
//     await updateStock(order.product, order.quantity);
//   });
//   order.orderStatus = req.body.status; //ye hum delivered dy gy
//   if (req.body.status === "Delivered") {
//     order.deliveredAt = Date.now();
//   }
//   await order.save({ validateBeforeSave: false });
//   res.status(200).json({
//     success: true,
//     order,
//   });
// });
// async function updateStock(id, quantity) {
//   //ye update ka bntya ha function stcok wala
//   const product = await Product.findById(id);
//   product.stock -= quantity; //ye minu kr diya hum ny stock qunatity sy utna
//   await product.save({ validateBeforeSave: false });
// }

// Delete Order --Admin
exports.deleteorder = catchasyncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id); //ye id dhondi delete ki
  if (!order) {
    return next(new Errorhandler("Order not found with this Id", 404));
  }
  await order.remove();
  res.status(200).json({
    success: true,
    order,
  });
});
