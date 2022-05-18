import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import "./WhyForYou.css";

const WhyForYou = () => {
  return (
    <Fragment>
      <section className="pb-5 p-5 container-style  pt-5">
        <div className="row mx-0 text-center">
          <div className="col-md-6 text-start">
            <h1>WHAT CAN WE DO FOR YOU?</h1>
            <p>
              All of the types of eCommerce businesses selling physical goods
              must rely on a comprehensive warehousing strategy to satisfy
              customers. The goal in business is to be profitable at scale. This
              means you’re able to increase your profits without excessive cost
              increases. This can be difficult with physical product businesses,
              as there’s always a cost tied to goods. If you sell any kind of
              physical item, you need a location to store increasing numbers of
              units.
            </p>

            <p>
              This is where warehouses come in. Product businesses need enough
              room to store, package, and ship their products. A warehouse makes
              this possible, so you don’t need to work out of your office or
              home.
            </p>
          </div>
          <div className="col-md-6 text-start">
            <h1>THINGS TO CONSIDER</h1>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p> Organize Floor Plan for Optimum Process Flow</p>
            </div>

            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>Stay Organized with Labels and Signage</p>
            </div>

            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>Compartmentalize Inventory with Totes, Bins and Dividers</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>Implement an Efficient Receiving Process</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>Document Your Returns Handling Procedures</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>
                Automate Storage for Maximum Capacity (Assess Storage Methods)
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>
                Soft skills are often the most important factor in getting
                hired.
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>Warehouses prefer to promote from within the company.</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCheckCircle} />
              <p>
                Warehouse associate is a stepping stone to many different roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyForYou;
