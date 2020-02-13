import React, { memo } from 'react';

const OrderSummary = memo(() => (
  <ul className='summary-items wrapper border'>
    <li>
      <span className='summary-items-number'>11 Items</span>
      <span className='summary-items-price'>120<span className='currency'>€</span></span>
    </li>
  </ul>
));

export default OrderSummary;
