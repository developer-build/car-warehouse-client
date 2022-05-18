import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
      <ScrollToTop smooth />
      <div className="footer-style">
        <div className="row mx-0 ">
          <div className="col-md-4 ">
            <h3>About Us</h3>
            <p>
              Sed ut perspiciatis unde om nis iste natus error sit volup atem
              accusantium dolor que laudantium. Totam reillo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo en im
              ipsam voluptatem quia voluptas sit asper natur aut odit aut fugit.
            </p>

            <Link to="/">
              <img src={logo} alt="" />
              <h4>Windsor Car Warehouse</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <h3>Newsletter</h3>
            <p>
              By subscribing to our company newsletter you will always be
              up-to-date on our latest promotions, deals and vehicle inventory!
            </p>
            <input type="email" placeholder="Email Address" />
            <button className="ms-1">Subscribe</button>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} /> <strong>Address:</strong>{" "}
              3242 USA, Florida, AB 34234{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong>{" "}
              1-800-145-4856{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
              windsorwarehouse@gmail.com{" "}
            </p>
          </div>
        </div>
        <div className="text-center cop-right mt-5">
          <p>
            <small> Copyright © {year} Theme Suite. All rights reserved.</small>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
