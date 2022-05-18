import React, { Fragment, useState } from "react";
import Slider from "react-slick/lib/slider";
import banner1 from "../../../image/banner/banner1.png";
import banner2 from "../../../image/banner/banner2.png";
import banner3 from "../../../image/banner/banner3.png";
import banner4 from "../../../image/banner/banner4.png";
import banner5 from "../../../image/banner/banner5.png";
import "./Banner.css";

const images = [banner1, banner2, banner3, banner4, banner5];

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Fragment>
      <div className="row text-white m-0  p-5 bg-color-img justify-content-center align-items-center  d-flex">
        <div className="col-md-6 blog-style">
          <h1 className=" mb-4">
            <span className="welcome" >WELCOME TO</span> <br />{" "}
            <span className="warehouse">WINDSOR CAR WAREHOUSE</span>
          </h1>
          <p>
            Our mission at Windsor is to make buying and owning a car simple,
            fun and affordable for you. As a leading approved dealer for Nissan,
            Opel, Peugeot, Renault, Dacia, Citroën and Mazda in Ireland.
          </p>

          <p>
            {" "}
            Our state-of-the-art showrooms are conveniently located in Dublin,
            Galway, Meath, Louth and Wicklow, and are open six days a week so
            you can call in at a time to suit you
          </p>
        </div>
        <div className="col-md-6">
        <div className="img">
          <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={img} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
          </div> 
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
