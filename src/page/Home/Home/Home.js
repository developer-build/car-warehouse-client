import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import Dealership from "../Dealership/Dealership";
import HoodSales from "../HoodSales/HoodSales";
import Items from "../Items/Items";
import OurClient from "../OurClient/OurClient";
import OurService from "../OurService/OurService";
import OurTeam from "../OurTeam/OurTeam";
import Quality from "../Quality/Quality";
import WatchOurWarehouse from "../WatchOurWarehouse/WatchOurWarehouse";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <section className="home-bg-color">
        <Banner />
        <Quality />
        <WatchOurWarehouse/>
        <Items />
        <HoodSales/>
        {/* <OurClient/> */}
        <OurService />
        <Dealership />
        <OurTeam />
        <WhyChooseUs/>
      </section>
    </Fragment>
  );
};

export default Home;
