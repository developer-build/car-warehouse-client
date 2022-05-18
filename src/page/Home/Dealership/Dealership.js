import {
  faCar,
  faDollarSign,
  faOilWell,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";  
import CountUp from "react-countup";
import "./Dealership.css";

const Dealership = () => {
  return (
    <Fragment>
      <section className="pb-5 pt-5 bg-car-image dealer-container  ">
        <h1 className="text-center mb-5 mt-5 header-style">
          Dealership Statistics
        </h1>

        <div className="row text-center mx-0">
          <div className="col-md-3">
            <FontAwesomeIcon className="icon-style" icon={faCar} />

            <h1>
              <CountUp end={45000} delay={5} duration={2} />
            </h1>
            <p>Cars Sold</p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon className="icon-style" icon={faDollarSign} />
            <h1>
              $<CountUp end={85000} delay={5} duration={2} />
            </h1>
            <p>Amount Solid</p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon className="icon-style" icon={faUsers} />
            <h1>
              <CountUp end={100} delay={5} duration={2} />%
            </h1>
            <p>Customer Satisfaction</p>
          </div>
          <div className="col-md-3">
            <FontAwesomeIcon className="icon-style" icon={faOilWell} />
            <h1>
              <CountUp end={9700} delay={5} duration={2} />
            </h1>
            <p>Oil Changes</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Dealership;
