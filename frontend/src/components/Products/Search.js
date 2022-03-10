import React, { useState, Fragment } from "react";
import MetaData from "../Layout/Metadata";
import "./Search.css";
import { useHistory } from "react-router-dom";
const Search = () => {
  let history = useHistory();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };
  return (
    <Fragment>
      <MetaData title="Search-VASL-Brings Tradition Up" />
      <div className="search_holder">
        <div className="search_bar">
          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search a Product ..."
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
