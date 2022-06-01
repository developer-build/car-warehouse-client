import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay'
import { Card } from "react-bootstrap";
import './OurClinet.css'

const OurClient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("client.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <Fragment>
      <h3>hello our client {clients.length} </h3>

      <div className="client-container mx-auto container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {clients.map((client) => (
            <SwiperSlide key={client._id}>
              <div  className="swiper-style" >
                <Card>
                  <Card.Img
                    className="swiper-img rounded-pill mx-auto"
                    variant="top"
                    src={client.img}
                    alt="img"
                  />
                  <Card.Body>
                    <Card.Text>{client.review}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default OurClient;
