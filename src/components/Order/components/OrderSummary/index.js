import React, { memo } from 'react';

// TODO el € lo cogería de una variable de entorno de mercado (por país)

const OrderSummary = memo(({ numberOfItems, priceTotal }) => (
  <ul className='summary-items wrapper border'>
    <li>
      <span className='summary-items-number'>{numberOfItems} Items</span>
      <span className='summary-items-price'>
        {priceTotal}
        <span className='currency'>€</span>
      </span>
    </li>
  </ul>
));

export default OrderSummary;
