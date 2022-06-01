import React, { Fragment } from "react";
import quality from "../../../image/banner/quality.jpg";
import "./Quality.css";

const Quality = () => {
  return (
    <Fragment>
      <section className="row flex justify-content-center align-items-center quality-style mx-auto">
        <div className="col-md-6">
          <h1 className="text-primary text-uppercase fw-bold">
            Quality <span className="guaranteed">Guaranteed</span>
          </h1>
          <h4 className="py-3">
            Here is an example with one single photo displayed on the right.
          </h4>
          <p>
            Here is some dummy text. Hover over me! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Unde, vero voluptas delectus explicabo
            maxime ad qui incidunt! Saepe.
          </p>
          <button className="btn_style">More Information</button>
        </div>
        <div className="col-md-6">
          <img className="w-full" src={quality} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Quality;
