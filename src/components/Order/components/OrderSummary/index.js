import React, { memo } from 'react';
import PropTypes from 'prop-types';

/*
In a production development, I would take the currency (in this case, '€')
from a market environment variable set by country
*/

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

OrderSummary.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  priceTotal: PropTypes.number.isRequired
};

export default OrderSummary;
