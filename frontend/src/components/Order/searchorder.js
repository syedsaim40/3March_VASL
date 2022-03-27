import React, { useState, Fragment } from "react";
import MetaData from "../Layout/Metadata";
import "../Products/Search.css";
import { useHistory } from "react-router-dom";
import "./orderDetails.css";

const Search = () => {
  let history = useHistory();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/check/order/`);
    } else {
      history.push("/check/orders/");
    }
  };
  return (
    <Fragment>
      <MetaData title="Search-VASL" />
      <div className="search_holder">
        <div className="search_bar">
          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Enter a Order ID..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input className="btn_primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
