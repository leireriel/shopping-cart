import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalOpen } from 'components/Shop/components/Product/modules/actions';

const ProductDetails = memo(({ name, code, price, currency, description }) => { 
  const dispatch = useDispatch();
  
  const nameLower = name.toLowerCase();
  const image = require(`img/${nameLower}.png`);

  return (
    <div className='col-product'>
      <figure onClick={() => dispatch(modalOpen())} className='product-image'>
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
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProductDetails;
