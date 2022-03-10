import React from "react";
import "../../Home/Home.css";
import { Fragment } from "react";
// import { Audio } from "react-loader-spinner";
import "react-loading-skeleton/dist/skeleton.css";
import gf from "../../../images/prod.gif";

import "./Loader.css";
const ploader = () => {
  return (
    <Fragment>
      <div className="loaderCard">
        <div className="loader_logo_holder">
          <div className="loaderCard_Holder">
            <img width="20%" src={gf} alt="" />
          </div>
        </div>
      </div>
      {/* <SkeletonTheme>
        <section>
          <Skeleton height={300} width={193} className="productload" src={gf}>
            {" "}
            <img src={gf} alt="" />
          </Skeleton>
        </section>
      </SkeletonTheme> */}
    </Fragment>
  );
};

export default ploader;
