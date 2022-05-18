import {
  faLocationDot,
  faScrewdriverWrench,
  faTag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import "./OperationTime.css";

const OperationTime = () => {
  return (
    <Fragment>
      <section className="pb-5 p-5 bg-car-img ">
        <h4 className="text-center heading mt-5 mb-4">
          What are our Hours of Operation?
        </h4>

        <div className="row text-center mx-0">
          <div className="col-md-2">
            <h2>Financing</h2>
            <FontAwesomeIcon className="icon-style" icon={faTag} />
          </div>
          <div className="col-md-2">
            <h2>Warranty</h2>
            <FontAwesomeIcon
              className="icon-style"
              icon={faScrewdriverWrench}
            />
          </div>

          <div className="col-md-2 p-style">
            <h5 className="text-start">Sales Department</h5>
            <p>Mon: 8:00am - 5:00pm</p>
            <p>Tue: 8:00am - 9:00pm</p>
            <p>Wed: 8:00am - 5:00pm</p>
            <p>Thu: 8:00am - 9:00pm</p>
            <p>Fri: 8:00am - 6:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: Closed</p>
          </div>
          <div className="col-md-2 p-style">
            <h5 className="text-start">Service Department</h5>
            <p>Mon: 8:00am - 5:00pm</p>
            <p>Tue: 8:00am - 9:00pm</p>
            <p>Wed: 8:00am - 5:00pm</p>
            <p>Thu: 8:00am - 9:00pm</p>
            <p>Fri: 8:00am - 6:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: Closed</p>
          </div>
          <div className="col-md-2">
            <h2>About Us</h2>
            <FontAwesomeIcon className="icon-style" icon={faUsers} />
          </div>
          <div className="col-md-2">
            <h2>Find Us</h2>
            <FontAwesomeIcon className="icon-style" icon={faLocationDot} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OperationTime;
