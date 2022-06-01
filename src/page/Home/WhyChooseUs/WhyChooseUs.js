import { faMedal, faSackDollar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import './WhyChooseus.css'

const WhyChooseUs = () => {
  return (
    <Fragment>
      <section className="text-center pb-5">
      <h1 className="py-5 h1-size fw-bold" >Why choose us?</h1>

        <div className="row container_style mx-auto">
          <div className="col-md-4">
          <FontAwesomeIcon className="medal-icon" icon={faMedal} />
            <h2 className="py-4">Wide range of brands</h2>
            <p>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </p>
          </div>
          <div className="col-md-4">
          <FontAwesomeIcon className="users-icon" icon={faUsers} />
            <h2 className="py-4">Trusted by our clients</h2>
            <p>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </p>
          </div>
          <div className="col-md-4">
          <FontAwesomeIcon className="doller-icon" icon={faSackDollar} />
            <h2 className="py-4">Fast and easy financing</h2>
            <p>
              We can help with your financing plan, we can offer some tips and
              tricks. Drive off with this dream car of yours regardless of your
              credit history.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyChooseUs;
