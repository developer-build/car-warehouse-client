import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Fragment>
      <div className="not-found p-5 text-center">
        <h1>404</h1>
        <h6>Not Fount</h6>
        <p>
          This Page you are looking for doesn't exist or an other error
          occurred. <br />
          Go Back, or head over to windsorcarwarehouse.com to choose a new
          direction
        </p>
        <Link to="/">
          <button className="btn_style">Go Back Home</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
