import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./header.css";
import { useSelector } from "react-redux";
import UserOptions from "../../user/useroption";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SearchIcon from "@mui/icons-material/Search";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Collapsible from "react-collapsible";

//creating the unique header component for all vasl pages
function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.cart);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

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
        <div id="mobile_menu">
          <div>
            <div style={{}}>
              <button
                className="mn_open_btn"
                onClick={() => setState({ isPaneOpenLeft: true })}
              >
                <MenuOpenIcon />
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
                </ul>
                {/* <Collapsible trigger="child a" className="accordian_footer">
                  <p>child list</p>
                  <Link to="/products">
                    <span className="item_text">child Products</span>
                  </Link>
                </Collapsible> */}
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
                    <Link to="/bags">Bags</Link>
                  </li>
                  <li>
                    <Link to="/scarves">scarves</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Beauty" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/perfumes">perfumes</Link>
                  </li>
                  <li>
                    <Link to="/cosmetics">cosmetics</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="User Menu" className="accordian_footer">
                <ul className="mn_menu_list">
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
                    <Link to="/login">
                      <AccountBoxOutlinedIcon />
                      <span>Your Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <FavoriteBorderIcon />
                      <span>Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      style={{
                        color: cartItems.length > 0 ? "red" : "unset",
                      }}
                    >
                      <ShoppingCartIcon
                        style={{
                          color: cartItems.length > 0 ? "red" : "unset",
                        }}
                      />{" "}
                      <sup
                        style={{
                          color: cartItems.length > 0 ? "red" : "unset",
                        }}
                      >
                        {" "}
                        {cartItems.length > 0 ? cartItems.length : null}
                      </sup>
                      <span>Check Your Cart</span>
                    </Link>
                  </li>
                  <li>
                    {isAuthenticated ? (
                      <UserOptions user={user} />
                    ) : (
                      <Link to="/login">
                        <HowToRegIcon />
                        <span>Register Your Self</span>
                      </Link>
                    )}
                  </li>
                </ul>
              </Collapsible>
            </SlidingPane>
          </div>
        </div>
        <div id="vasl-menu">
          <SideNav
            onSelect={(selected) => {
              // Add your code here
            }}
          >
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
                    <Link to="/Newinn">New Inn</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/Womens">Womens</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/Accessories">Accessories</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/Replicas">Replicas</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/Unstiched">Unstiched</Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="categories/linechart">
                  <NavText>
                    <Link to="/AClothes">A+ Cloths</Link>
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
                            style={{
                              color: cartItems.length > 0 ? "red" : "unset",
                            }}
                          >
                            <ShoppingCartIcon
                              style={{
                                color: cartItems.length > 0 ? "red" : "unset",
                              }}
                            />{" "}
                            <sup
                              style={{
                                color: cartItems.length > 0 ? "red" : "unset",
                              }}
                            >
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
          {/* <li>
            <Link
              to="/FavouriteCart"
              style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
            >
              <FavoriteBorderIcon
                style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
              />{" "}
              <sup
                style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
              >
                {" "}
                {favouriteItems.length > 0 ? favouriteItems.length : null}
              </sup>
            </Link>
          </li> */}
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
            {/* <ul>
              <li>Shoes</li>
              <li>Bags</li>
              <li>Scarves</li>
              <li>Socks</li>
            </ul> */}
          </li>
          <li>
            <Link to="/Beauty">Beauty</Link>
            {/* <ul>
              <li>Fragrances</li>
              <li>Cosmetics</li>
              <li>Scarves</li>
              <li>Socks</li>
            </ul> */}
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
