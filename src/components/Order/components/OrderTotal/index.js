import React, { memo } from 'react';

// TODO el € lo cogería de una variable de entorno de mercado (por país)

const OrderTotal = memo(({ orderDetails }) => (
  <div className='summary-total wrapper'>
    <ul>
      <li>
        <span className='summary-total-cost'>Total cost</span>
        <span className='summary-total-price'>{orderDetails?.priceTotal - orderDetails?.discountTotal}€</span>
      </li>
    </ul>
    <button type='submit'>Checkout</button>
  </div>
));

export default OrderTotal;
