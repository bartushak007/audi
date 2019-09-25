import React, { memo } from 'react';

const Deposit = memo(
  ({ title, price, priceInfo, priceDescription, currency }) => (
    <div className="deposit">
      <div className="deposit__title">{title}</div>
      <div className="deposit__price">
        {currency}
        <span className="deposit__price-amount">{price}</span>
        {priceInfo}
      </div>
      <div className="deposit__additional">{priceDescription}</div>
    </div>
  )
);

export default Deposit;
