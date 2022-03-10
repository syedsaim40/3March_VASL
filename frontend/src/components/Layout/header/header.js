import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./header.css";
import { useSelector } from "react-redux";
import UserOptions from "../../user/useroption";

import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SearchIcon from '@mui/icons-material/Search';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import SideNav, { NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



//creating the unique header component for all vasl pages
function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <div className="header_bar">
        <ul className="unstyled">
          <li>Call Us: +92(0)3 209-455-811</li>
          <li>Free Shipping on all orders worth RS:5000 & above</li>
        </ul>
      </div>
      <div className="top_header">
        {/* Here start vasl main menu for header (generic) */}
        <div id="vasl-menu">
          <SideNav
            onSelect={(selected) => {
              // Add your code here
            }} >
            <SideNav.Toggle />
            <SideNav.Nav>
              <NavItem>
                <NavText>
                  <Link to="/products">
                    <Inventory2OutlinedIcon />
                    <span className="item_text">Products</span>
                    {/* <form className="searchBox">
                    <input type="button" value="Product"></input>
                  </form> */}
                  </Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="categories">
                <NavText>
                  <CategoryOutlinedIcon />
                  <span className="item_text">Categories</span>
                </NavText>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    New Inn
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    Womens
                  </NavText>
                </NavItem><NavItem eventKey="categories/linechart">
                  <NavText>
                  Accessories
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    Replicas
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    Ready to wear
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    Unstiched
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    A+ Cloths
                  </NavText>
                </NavItem>
              </NavItem>
              <NavItem>
                <NavText>
                  <Link to="/login">
                    <AccountBoxOutlinedIcon />
                    <span className="item_text">Profile</span>
                  </Link>
                </NavText>
              </NavItem>
            </SideNav.Nav>
            <SideNav.Nav>
              <NavItem>
                <NavText>
                  <ul className="dp-box1 vasl-header-list mobile_menu">
                    <NavItem>
                      <NavText>
                        <li>
                          <Link to="/search">
                            <form className="search-icon">
                              {/* <input type="button" value=""></input> */}
                              <SearchIcon />
                            </form>
                          </Link>
                        </li>
                      </NavText>
                    </NavItem>
                    <NavItem>
                      <NavText>
                        <li>
                          <Link to="/login">
                            <AccountBoxOutlinedIcon />
                          </Link>
                        </li>
                      </NavText>
                    </NavItem>
                    <NavItem>
                      <NavText>
                        <li>
                          <Link to="/login">
                            <FavoriteBorderIcon />
                          </Link>
                        </li>
                      </NavText>
                    </NavItem>
                    <NavItem>
                      <NavText>
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
                      </NavText>
                    </NavItem>
                  </ul>
                </NavText>
              </NavItem>
            </SideNav.Nav>
            <SideNav.Nav>
              <NavItem>
                <NavText>
                  <li>
                    {isAuthenticated ? (
                      <UserOptions user={user} />
                    ) : (
                      <Link to="/login">
                        <HowToRegIcon />

                      </Link>
                    )}
                  </li>
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
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
                {/* Sign In */}
              </Link>
            )}
          </li>
          <li>
            <Link to="/search">
              <form className="search-icon">
                {/* <input type="button" value=""></input> */}
                <SearchIcon />
              </form>
            </Link>
          </li>
          <li>
            <Link to="/accounts">
              <AccountBoxOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FavoriteBorderIcon />
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
            <Link to="/Newinn">
              New In
            </Link>
          </li>
          <li>
            <Link to="/Womens">
              women
            </Link>
          </li>
          <li>
            <Link to="/Accessories">
              ACCESSORIES
            </Link>
            {/* <ul>
              <li>Shoes</li>
              <li>Bags</li>
              <li>Scarves</li>
              <li>Socks</li>
            </ul> */}
          </li>
          <li>
            <Link to="/Beauty">
              Beauty
            </Link>
            {/* <ul>
              <li>Fragrances</li>
              <li>Cosmetics</li>
              <li>Scarves</li>
              <li>Socks</li>
            </ul> */}
          </li>
          <li>
            <Link to="/Replicas">
              replicas
            </Link>
          </li>
          <li>
            <Link to="/ReadyToWear">
              ready to wear
            </Link>
          </li>
          <li>
            <Link to="/Unstiched">
              Unstiched
            </Link>
          </li>
          <li>
            <Link to="/AClothes">
              A+ Cloths
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
