import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Total = memo(({ name, currency, productsState }) => (
  <div className='col-total'>
    <span className='product-price'>
      {productsState[name].priceTotal}
    </span>
    <span className='product-currency currency'>{currency}</span>
  </div>
));

Total.propTypes = {
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  productsState: PropTypes.object.isRequired
};

export default Total;
