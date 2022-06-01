import React, { Fragment, useEffect, useState } from "react";
import './OurService.css'
import OurServiceCard from "./OurServiceCard";

const OurService = () => {
  const [services, setServices] = useState([])
  useEffect( () => {
    fetch('service.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <Fragment>
      <div className="text-center">
        <h3>OUR SERVICE </h3>
        <h1 className="fw-bold">The Most Advance Car Repair</h1>
      </div>

     <div className="container py-5" >
     <div className="g-4 row row-cols-md-3">
        {services.map((service) => <OurServiceCard service={service} />)}
      </div>
     </div>

    </Fragment>
  );
};

export default OurService;
