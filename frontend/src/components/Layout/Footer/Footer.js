// import React from "react";
// import "./Footer.css";
// import { Link } from "react-router-dom";

// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// import jazzcash from "../../../images/jazzcash.png";
// import cod from "../../../images/cod.png";

// import Collapsible from "react-collapsible";

// const ButtonMailto = ({ mailto, label }) => {
//   return (
//     <Link
//       to="#"
//       onClick={(e) => {
//         window.location = mailto;
//         e.preventDefault();
//       }}
//     >
//       {label}
//     </Link>
//   );
// };

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <Collapsible
//         trigger="Get in Touch"
//         className="accordian_footer hide_footer"
//       >
//         <div className="mf_box">
//           <address>
//             VASL Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
//             University of Engineering and Technology, Lahore.
//           </address>
//           {/* <Link to="/">
//             <span>vasllclothing@gmail.com</span>
//           </Link> */}
//           <div className="mail_link">
//             <MailOutlineIcon />
//             <ButtonMailto
//               label="vasllclothing@gmail.com"
//               mailto="mailto:vasllclothing@gmail.com"
//             />
//           </div>
//           <div className="mail_link">
//             <LocalPhoneIcon />
//             <span>+92(0)3 209-455-811</span>
//           </div>
//         </div>
//       </Collapsible>
//       <Collapsible
//         trigger="Customer Care"
//         className="accordian_footer hide_footer"
//       >
//         <div className="mf_box">
//           <ul className="unstyled services_list">
//             <li>
//               <Link to="/login">Exchange & Returns</Link>
//             </li>
//             <li>
//               <Link to="/login">FAQs</Link>
//             </li>
//             <li>
//               <Link to="/login">Contact Us</Link>
//             </li>
//             <li>
//               <Link to="/login">Payments</Link>
//             </li>
//             <li>
//               <Link to="/orders">Track your Orders</Link>
//             </li>
//           </ul>
//         </div>
//       </Collapsible>
//       <Collapsible
//         trigger="Information"
//         className="accordian_footer hide_footer"
//       >
//         <div className="mf_box">
//           <ul className="unstyled services_list">
//             <li>
//               <Link to="/login">About Us</Link>
//             </li>
//             <li>
//               <Link to="/login">Privacy Policy</Link>
//             </li>
//             <li>
//               <Link to="/login">Store Locator</Link>
//             </li>
//             <li>
//               <Link to="/login">Fabric Glossary</Link>
//             </li>
//             <li>
//               <Link to="/orders">Wholesale</Link>
//             </li>
//             <li>
//               <Link to="/orders">Blogs</Link>
//             </li>
//           </ul>
//         </div>
//       </Collapsible>
//       <Collapsible trigger="Join Us" className="accordian_footer hide_footer">
//         <div className="mf_box">
//           <div className="mail_link">
//             <MailOutlineIcon />
//             <ButtonMailto
//               label="vasllclothing@gmail.com"
//               mailto="mailto:vasllclothing@gmail.com"
//             />
//           </div>
//           <div className="mail_link">
//             <LocalPhoneIcon />
//             <span>+92(0)3 209-455-811</span>
//           </div>
//           <ul className="social_icons unstyled">
//             <li className="fb_icon">
//               <Link>
//                 <FacebookIcon />
//               </Link>
//             </li>
//             <li className="insta_icon">
//               <Link>
//                 <InstagramIcon />
//               </Link>
//             </li>
//             <li className="yt_icon">
//               <Link>
//                 <YouTubeIcon />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </Collapsible>
//       {/* <div className="top_footer">
//         <div className="tf_box">
//           <Link to="/orders" className="tf_con">
//             <AutorenewIcon />
//             <span>Track your order</span>
//           </Link>
//         </div>
//         <div className="tf_box">
//           <div className="tf_con">
//             <AccessTimeIcon />
//             <span>Contact us 24 hours a day, 7 days a week</span>
//           </div>
//         </div>
//         <div className="tf_box">
//           <div className="tf_con">
//             <ReplayIcon />
//             <span>Simply return it within 30 days for an exchange</span>
//           </div>
//         </div>
//         <div className="tf_box">
//           <div className="tf_con">
//             <DirectionsCarIcon />
//             <span>Free Shipping on all orders worth Rs. 2000 & above</span>
//           </div>
//         </div>
//       </div> */}
//       <div className="mid_footer">
//         <div className="mf_box">
//           <h3>Get in Touch</h3>
//           <address>
//             VASL Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
//             University of Engineering and Technology, Lahore.
//           </address>
//           {/* <Link to="/">
//             <span>vasllclothing@gmail.com</span>
//           </Link> */}
//           <div className="mail_link">
//             <MailOutlineIcon />
//             <ButtonMailto
//               label="vasllclothing@gmail.com"
//               mailto="mailto:vasllclothing@gmail.com"
//             />
//           </div>
//           <div className="mail_link">
//             <LocalPhoneIcon />
//             <span>+92(0)3 209-455-811</span>
//           </div>
//         </div>
//         <div className="mf_box">
//           <h3>Customer Care</h3>
//           <ul className="unstyled services_list">
//             <li>
//               <Link to="/login">Exchange & Returns</Link>
//             </li>
//             <li>
//               <Link to="/login">FAQs</Link>
//             </li>
//             <li>
//               <Link to="/login">Contact Us</Link>
//             </li>
//             <li>
//               <Link to="/login">Payments</Link>
//             </li>
//             <li>
//               <Link to="/orders">Track your Orders</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="mf_box">
//           <h3>Information</h3>
//           <ul className="unstyled services_list">
//             <li>
//               <Link to="/login">About Us</Link>
//             </li>
//             <li>
//               <Link to="/login">Privacy Policy</Link>
//             </li>
//             <li>
//               <Link to="/login">Store Locator</Link>
//             </li>
//             <li>
//               <Link to="/login">Fabric Glossary</Link>
//             </li>
//             <li>
//               <Link to="/orders">Wholesale</Link>
//             </li>
//             <li>
//               <Link to="/orders">Blogs</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="mf_box">
//           <h3>Join Us</h3>
//           <div className="mail_link">
//             <MailOutlineIcon />
//             <ButtonMailto
//               label="vasllclothing@gmail.com"
//               mailto="mailto:vasllclothing@gmail.com"
//             />
//           </div>
//           <div className="mail_link">
//             <LocalPhoneIcon />
//             <span>+92(0)3 209-455-811</span>
//           </div>
//           <ul className="social_icons unstyled">
//             <li className="fb_icon">
//               <Link>
//                 <FacebookIcon />
//               </Link>
//             </li>
//             <li className="insta_icon">
//               <Link>
//                 <InstagramIcon />
//               </Link>
//             </li>
//             <li className="yt_icon">
//               <Link>
//                 <YouTubeIcon />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="bottom_footer">
//         <span>Copyright © 2022 VASL all rights reserved.</span>
//         <img src={jazzcash} alt="jazzcash" />
//         <img src={cod} alt="cod" />
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import jazzcash from "../../../images/jazzcash.png";
import cod from "../../../images/cod.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

const Footer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <footer id="footer">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accordian_footer hide_footer"
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          GET IN TOUCH
        </AccordionSummary>
        <div className="mf_box">
          <address>
            VASL Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
            University of Engineering and Technology, Lahore.
          </address>
          {/* <Link to="/">
            <span>vasllclothing@gmail.com</span>
          </Link> */}
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="vasllclothing@gmail.com"
              mailto="mailto:vasllclothing@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span>+92(0)3 209-455-811</span>
          </div>
        </div>
      </Accordion>

      <Accordion
        trigger="Customer Care"
        className="accordian_footer hide_footer"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          CUSTOMER CARE
        </AccordionSummary>

        <div className="mf_box">
          <ul className="unstyled services_list">
            <li>
              <Link to="/login">Exchange & Returns</Link>
            </li>
            <li>
              <Link to="/login">FAQs</Link>
            </li>
            <li>
              <Link to="/login">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Payments</Link>
            </li>
            <li>
              <Link to="/orders">Track your Orders</Link>
            </li>
          </ul>
        </div>
      </Accordion>
      <Accordion trigger="Information" className="accordian_footer hide_footer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          INFORMATION
        </AccordionSummary>
        <div className="mf_box">
          <ul className="unstyled services_list">
            <li>
              <Link to="/login">About Us</Link>
            </li>
            <li>
              <Link to="/login">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/login">Store Locator</Link>
            </li>
            <li>
              <Link to="/login">Fabric Glossary</Link>
            </li>
            <li>
              <Link to="/orders">Wholesale</Link>
            </li>
            <li>
              <Link to="/orders">Blogs</Link>
            </li>
          </ul>
        </div>
      </Accordion>
      <Accordion trigger="Join Us" className="accordian_footer hide_footer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          ABOUT US
        </AccordionSummary>
        <div className="mf_box">
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="vasllclothing@gmail.com"
              mailto="mailto:vasllclothing@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span>+92(0)3 209-455-811</span>
          </div>
          <ul className="social_icons unstyled">
            <li className="fb_icon">
              <Link>
                <FacebookIcon />
              </Link>
            </li>
            <li className="insta_icon">
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li className="yt_icon">
              <Link>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </Accordion>
      {/* <div className="top_footer">
        <div className="tf_box">
          <Link to="/orders" className="tf_con">
            <AutorenewIcon />
            <span>Track your order</span>
          </Link>
        </div>
        <div className="tf_box">
          <div className="tf_con">
            <AccessTimeIcon />
            <span>Contact us 24 hours a day, 7 days a week</span>
          </div>
        </div>
        <div className="tf_box">
          <div className="tf_con">
            <ReplayIcon />
            <span>Simply return it within 30 days for an exchange</span>
          </div>
        </div>
        <div className="tf_box">
          <div className="tf_con">
            <DirectionsCarIcon />
            <span>Free Shipping on all orders worth Rs. 2000 & above</span>
          </div>
        </div>
      </div> */}
      <div className="mid_footer">
        <div className="mf_box">
          <h3>Get in Touch</h3>
          <address>
            VASL Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
            University of Engineering and Technology, Lahore.
          </address>
          {/* <Link to="/">
            <span>vasllclothing@gmail.com</span>
          </Link> */}
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="vasllclothing@gmail.com"
              mailto="mailto:vasllclothing@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span>+92(0)3 209-455-811</span>
          </div>
        </div>
        <div className="mf_box">
          <h3>Customer Care</h3>
          <ul className="unstyled services_list">
            <li>
              <Link to="/login">Exchange & Returns</Link>
            </li>
            <li>
              <Link to="/login">FAQs</Link>
            </li>
            <li>
              <Link to="/login">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Payments</Link>
            </li>
            <li>
              <Link to="/orders">Track your Orders</Link>
            </li>
          </ul>
        </div>
        <div className="mf_box">
          <h3>Information</h3>
          <ul className="unstyled services_list">
            <li>
              <Link to="/login">About Us</Link>
            </li>
            <li>
              <Link to="/login">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/login">Store Locator</Link>
            </li>
            <li>
              <Link to="/login">Fabric Glossary</Link>
            </li>
            <li>
              <Link to="/orders">Wholesale</Link>
            </li>
            <li>
              <Link to="/orders">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="mf_box">
          <h3>Join Us</h3>
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="vasllclothing@gmail.com"
              mailto="mailto:vasllclothing@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span>+92(0)3 209-455-811</span>
          </div>
          <ul className="social_icons unstyled">
            <li className="fb_icon">
              <Link>
                <FacebookIcon />
              </Link>
            </li>
            <li className="insta_icon">
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li className="yt_icon">
              <Link>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer">
        <span>Copyright © 2022 VASL all rights reserved.</span>
        <img src={jazzcash} alt="jazzcash" />
        <img src={cod} alt="cod" />
      </div>
    </footer>
  );
};

export default Footer;
