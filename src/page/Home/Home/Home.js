import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import Dealership from "../Dealership/Dealership";
import HoodSales from "../HoodSales/HoodSales";
import HoodSales1 from "../HoodSales1/HoodSales1";
import Items from "../Items/Items";
import MobileApp from "../MobileApp/MobileApp";
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
        <HoodSales1/>
        <Items />
        <HoodSales/>
        {/* <OurClient/> */}
        <OurService />
        <Dealership />
        <OurTeam />
        <MobileApp/>
        <WhyChooseUs/>
      </section>
    </Fragment>
  );
};

export default Home;
