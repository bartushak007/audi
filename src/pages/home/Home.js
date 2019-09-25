import React from 'react';

import DescribeCar from '../../components/sections/describeCar';

const Home = ({ data }) => {
  return (
    <div className="home ">
      <DescribeCar {...data.describeCar} />
    </div>
  );
};

export default Home;
