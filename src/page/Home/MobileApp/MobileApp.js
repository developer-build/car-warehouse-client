import React, { Fragment } from "react";
import mobileApp from "../../../image/banner/app.png";
import googleApp from '../../../image/logo/googleapp-removebg-preview.png'
import appleApp from '../../../image/logo/apple-removebg-preview.png'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <Fragment>
      <section className="row flex justify-content-center align-items-center quality-style mx-auto">
        <div className="col-md-6">
          <img src={mobileApp} alt="" />
        </div>
        <div className="col-md-6">
          <h5 className="text-secondary text-uppercase fw-bold">
            DOWNLOAD & ENJOY
          </h5>
          <h1 className="py-3">
          Get the Voiture Listings Search App
          </h1>
          <p>
            Here is some dummy text. Lorem ipsum dolor sit amet, This is an
            labeled text snippet!, sed diam nonumy eirmod tempor invidunt ut.
          </p>
          <div className="app-logo flex">
            <a target="_blank" href="https://play.google.com/store/apps"><img className=" w-25" src={googleApp} alt="" /></a>
            <a target="_blank" href="https://www.apple.com/store"><img className=" ms-3 w-25 apple" src={appleApp} alt="" /></a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MobileApp;
