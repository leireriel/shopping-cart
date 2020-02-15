import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ProductDetails = memo(({ name, code }) => {
  const nameLower = name.toLowerCase();
  const image = require(`img/${nameLower}.png`);

  return (
    <div className='col-product'>
      <figure className='product-image'>
        <img src={image} alt={name} />
        <div className='product-description'>
          <h1>{name}</h1>
          <p className='product-code'>Product code {code}</p>
        </div>
      </figure>
    </div>
  );
});

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}

export default ProductDetails;
