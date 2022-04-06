import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./header.css";
import { useSelector } from "react-redux";
import UserOptions from "../../user/useroption";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SearchIcon from "@mui/icons-material/Search";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Logout } from "../../../redux/action/useraction";
import { useDispatch } from "react-redux";

// import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Collapsible from "react-collapsible";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

//creating the unique header component for all vasl pages
function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.cart);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  //for logout the user through mobile menu
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(Logout());
    alert.success("Logout Successfully");
  }

  //for dropdown
  // const theme = createTheme({});
  // const MyMenu = () => {
  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const [open, setOpen] = useState(false);

  //   const handleOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //     setOpen(true);
  //   };

  //   const handleClose = (e) => {
  //     if (e.currentTarget.localName !== "ul") {
  //       const menu = document.getElementById("simple-menu").children[2];
  //       const menuBoundary = {
  //         left: menu.offsetLeft,
  //         top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
  //         right: menu.offsetLeft + menu.offsetHeight,
  //         bottom: menu.offsetTop + menu.offsetHeight
  //       };
  //       if (
  //         e.clientX >= menuBoundary.left &&
  //         e.clientX <= menuBoundary.right &&
  //         e.clientY <= menuBoundary.bottom &&
  //         e.clientY >= menuBoundary.top
  //       ) {
  //         return;
  //       }
  //     }

  //     setOpen(false);
  //   };

  //   theme.props = {
  //     MuiList: {
  //       onMouseLeave: (e) => {
  //         handleClose(e);
  //       }
  //     }
  //   };
  // }


  return (
    <header>
      <div className="header_bar">
        <ul className="unstyled">
          <li>Call Us: +92(0)3 209-455-811</li>
          <li>Free Shipping on all orders worth RS:5000 & above</li>
        </ul>
      </div>
      <div className="top_header">
        <div id="mobile_menu">
          <div>
            <div style={{}}>
              <button
                className="mn_open_btn"
                onClick={() => setState({ isPaneOpenLeft: true })}
              >
                <MenuIcon />
              </button>
            </div>
            <SlidingPane
              closeIcon={
                <div>
                  <CloseRoundedIcon />
                </div>
              }
              isOpen={state.isPaneOpenLeft}
              title="VASL"
              from="left"
              width="300px"
              onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
              <Collapsible trigger="Categories" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Newinn">New Inn</Link>
                  </li>
                  <li>
                    <Link to="/Womens">Womens</Link>
                  </li>
                  <li>
                    <Link to="/Accessories">Accessories</Link>
                  </li>
                  <li>
                    <Link to="/Replicas">Replicas</Link>
                  </li>
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                  <li>
                    <Link to="/AClothes">A+ Cloths</Link>
                  </li>
                  <li>
                    <Link to="/VaslFeatured">A+ Cloths</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="New Inn" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Woman" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Replicas" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Accesories" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Bags">Bags</Link>
                  </li>
                  <li>
                    <Link to="/Scarves">scarves</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Beauty" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Perfumes">perfumes</Link>
                  </li>
                  <li>
                    <Link to="/Cosmetics">cosmetics</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="User Menu" className="accordian_footer">
                <ul className="non_coll mn_menu_list">
                  <li>
                    {isAuthenticated ? (
                      <ul>
                        <li>
                          <Link to="/orders">
                            <ListAltIcon />
                            <span>Orders</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/accounts">
                            <AccountBoxOutlinedIcon />
                            <span>Profile</span>
                          </Link>
                        </li>

                        {user.role === "admin" ? (
                          <li>
                            <Link to="/admin/dashboard">
                              <DashboardIcon />
                              <span>Dashboard</span>
                            </Link>
                          </li>
                        ) : null}
                        <li>
                          <li>
                            <Link to="/login">
                              <LogoutIcon />
                              <span onClick={logoutUser}>Logout</span>
                            </Link>
                          </li>
                        </li>
                      </ul>
                    ) : (
                      <Link to="/login">
                        <HowToRegIcon />
                        <span>Login/Register</span>
                      </Link>
                    )}
                  </li>
                </ul>
              </Collapsible>

              <ul className="non_coll mn_menu_list">
                <li>
                  <Link to="/search">
                    <form className="search-icon">
                      {/* <input type="button" value=""></input> */}
                      <SearchIcon />
                      <span>Search your choice</span>
                    </form>
                  </Link>
                </li>

                <li>
                  <Link to="/check/order">
                    <ListAltIcon />
                    <span>Check Order ID</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FavouriteCart"
                    style={{
                      color: favouriteItems.length > 0 ? "red" : "unset",
                    }}
                  >
                    {favouriteItems.length === 0 ? (
                      <FavoriteBorderIcon
                        style={{
                          color: favouriteItems.length > 0 ? "red" : "unset",
                        }}
                      />
                    ) : (
                      <FavoriteIcon
                        style={{
                          color: favouriteItems.length > 0 ? "red" : "unset",
                        }}
                      />
                    )}
                    <span>Whishlist</span>
                  </Link>
                </li>

                <li>
                  <Link to="/check/order/email">
                    <ContentPasteSearchIcon />
                    <span>Search order Gmail</span>
                  </Link>
                </li>
              </ul>
            </SlidingPane>
          </div>
        </div>

        <div className="logo">
          <h1>
            <Link to="/">
              <img className="main_logo" src={logo} alt="logo" />
            </Link>
          </h1>
        </div>
        <ul className="dp-box1 vasl-header-list">
          <li>
            {isAuthenticated ? (
              <UserOptions user={user} />
            ) : (
              <Link to="/login">
                <HowToRegIcon />
              </Link>
            )}
          </li>
          <li>
            <Link to="/search">
              <form className="search-icon">
                <SearchIcon />
              </form>
            </Link>
          </li>
          <li>
            <Link to="/check/order">
              <ListAltIcon />
            </Link>
          </li>
          <li>
            <Link to="/check/order/email">
              <ContentPasteSearchIcon />
            </Link>
          </li>
          <li>
            <Link
              to="/FavouriteCart"
              style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
            >
              {favouriteItems.length === 0 ? (
                <FavoriteBorderIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              ) : (
                <FavoriteIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              style={{ color: cartItems.length > 0 ? "red" : "unset" }}
            >
              <ShoppingCartIcon
                style={{ color: cartItems.length > 0 ? "red" : "unset" }}
              />{" "}
              <sup style={{ color: cartItems.length > 0 ? "red" : "unset" }}>
                {" "}
                {cartItems.length > 0 ? cartItems.length : null}
              </sup>
            </Link>
          </li>
        </ul>
        <ul className="dp-box1 mobile_header_list vasl-header-list">
          <li>
            <Link
              to="/FavouriteCart"
              style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
            >
              {favouriteItems.length === 0 ? (
                <FavoriteBorderIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              ) : (
                <FavoriteIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{ color: cartItems.length > 0 ? "red" : "unset" }}
            >
              <ShoppingCartIcon
                style={{ color: cartItems.length > 0 ? "red" : "unset" }}
              />{" "}
              <sup style={{ color: cartItems.length > 0 ? "red" : "unset" }}>
                {" "}
                {cartItems.length > 0 ? cartItems.length : null}
              </sup>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom_header">
        <ul className="unstyled bottom_nav">
          <li>
                <Link to="/Newinn">New In</Link>
          </li>
          <li>
            <Link to="/Womens">women</Link>
          </li>
          <li>
            <Link to="/Accessories">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="/Beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/Replicas">replicas</Link>
          </li>
          <li>
            <Link to="/ReadyToWear">ready to wear</Link>
          </li>
          <li>
            <Link to="/Unstiched">Unstiched</Link>
          </li>
          <li>
            <Link to="/AClothes">A+ Cloths</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;