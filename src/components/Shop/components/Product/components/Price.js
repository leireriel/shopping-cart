import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Price = memo(({ price, currency }) => (
  <div className='col-price'>
    <span className='product-price'>{price}</span>
    <span className='product-currency currency'>{currency}</span>
  </div>
));

Price.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};

export default Price;
