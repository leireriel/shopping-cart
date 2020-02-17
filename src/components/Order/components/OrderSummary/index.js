import React, { memo } from 'react';

// TODO el € lo cogería de una variable de entorno de mercado (por país)

const OrderSummary = memo(({ orderDetails }) => {
  console.log(orderDetails);

  return (
  <ul className='summary-items wrapper border'>
    <li>
      <span className='summary-items-number'>{orderDetails?.numberOfItems} Items</span>
      <span className='summary-items-price'>
        {orderDetails?.priceTotal}
        <span className='currency'>€</span>
      </span>
    </li>
  </ul>
  );
});

export default OrderSummary;
