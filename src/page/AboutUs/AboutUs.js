import React, { Fragment } from 'react';
import aboutUs from '../../image/banner/aboutUs.jpg'
import './AboutUs.css'

const AboutUs = () => {
  return (
   <Fragment>
        <section className="row flex justify-content-center align-items-center aboutUs-style mx-auto">
        <div className="col-md-6">
          <img src={aboutUs} alt="" />
        </div>
        <div className="col-md-6">
          <h5>INNOVATIVE BUSINESS</h5>
          <h1 className="text-uppercase fw-bold">
            About US
          </h1>
          <h4 className="py-3">
            You can also show youtube videos in this section!
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet alias odit quisquam earum. Quaerat enim possimus veniam? Autem inventore debitis porro veritatis modi voluptatibus nostrum delectus optio dolor mollitia accusamus aspernatur, laboriosam, vitae fugit possimus, eligendi voluptas officiis atque. Ipsum dicta facilis, et fugit impedit maiores doloremque doloribus, alias vero aperiam temporibus dolorem, illum cupiditate nam recusandae ullam aut voluptas adipisci nulla nemo molestiae suscipit. Consequuntur asperiores labore iure dolorem fugiat autem dolores esse quasi consequatur at cumque, nobis ducimus natus accusantium pariatur explicabo sequi itaque iste eaque. Fugit cupiditate deleniti commodi ipsam, quos asperiores voluptatum odio sequi sed minus.
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

export default AboutUs;