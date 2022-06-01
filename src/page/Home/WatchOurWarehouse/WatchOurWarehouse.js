import React, { Fragment } from "react";
import './WatchOurWarehouse.css'

const WatchOurWarehouse = () => {
  return (
    <Fragment>
      <section className="row flex justify-content-center align-items-center quality-style mx-auto">
        <div className="col-md-6">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/hYWJb3406As"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary text-uppercase fw-bold">
            Watch our <span className="warehouse"> Warehouse </span> tour
          </h2>
          <h4 className="py-3">
            You can also show youtube videos in this section!
          </h4>
          <p>
            Here is some dummy text. Lorem ipsum dolor sit amet, This is an
            labeled text snippet!, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default WatchOurWarehouse;
