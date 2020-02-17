import React, { memo } from 'react';
import PropTypes from 'prop-types';

/*
In a production development, I would take the currency (in this case, "€")
from a market environment variable set by country
*/

const OrderTotal = memo(({ priceTotal, discountTotal }) => (
  <div className='summary-total wrapper'>
    <ul>
      <li>
        <span className='summary-total-cost'>Total cost</span>
        <span className='summary-total-price'>{priceTotal - discountTotal}€</span>
      </li>
    </ul>
    <button type='submit'>Checkout</button>
  </div>
));

OrderTotal.propTypes = {
  priceTotal: PropTypes.number.isRequired,
  discountTotal: PropTypes.number.isRequired
};

export default OrderTotal;
