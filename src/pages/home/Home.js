import React from 'react';

import DescribeCar from '../../components/sections/describeCar';
import ContactInfo from '../../components/blocks/contactInfo';

const Home = ({ data }) => {
  return (
    <div className="home ">
      <DescribeCar {...data.describeCar} />
      <div>
        <ContactInfo {...data.contactInfo} />
      </div>
    </div>
  );
};

export default Home;
