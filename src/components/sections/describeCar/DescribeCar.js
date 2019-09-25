import React from 'react';

import Image from '../../shared/image';

import Deposit from '../../blocks/deposit';

const DescribeCar = ({ img, title, spec, deposits, additional }) => {
  const renderDeposits = deposit => (
    <Deposit key={deposit.title} {...deposit} />
  );

  return (
    <div className="describe">
      <div className="describe__content">
        <div className="describe__picture">
          <Image src={img} />
        </div>
        <div className="describe__details">
          <div className="describe__head">
            <h2 className="describe__title">{title}</h2>
            <span className="describe__spec">{spec}</span>
          </div>
          <div className="describe__deposits">
            {deposits.map(renderDeposits)}
          </div>
          <div className="describe__additional">{additional}</div>
        </div>
      </div>
      <div className="describe__border" />
    </div>
  );
};

export default DescribeCar;
