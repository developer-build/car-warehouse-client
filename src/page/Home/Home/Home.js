import React, { Fragment } from 'react';
import Banner from '../Banner/Banner';
import Dealership from '../Dealership/Dealership';
import Items from '../Items/Items';
import OperationTime from '../OperationTime/OperationTime';
import WhyForYou from '../WhyForYou/WhyForYou';

const Home = () => {
  return (
    <Fragment>
      <Banner/>
      <Items/>
      <Dealership/>
      <WhyForYou/>
      <OperationTime/>
    </Fragment>
  );
};

export default Home;