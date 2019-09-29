import React from 'react';

import DescribeCar from '../../components/sections/describeCar';
import ToRecommendContent from '../../components/sections/toRecommendContent';

const Home = ({ data }) => {
  return (
    <div className="home ">
      <DescribeCar {...data.describeCar} />
      <div>
        {
          <ToRecommendContent
            contactUs={data.contactUs}
            letFindIt={data.letFindIt}
          />
        }
      </div>
    </div>
  );
};

export default Home;
