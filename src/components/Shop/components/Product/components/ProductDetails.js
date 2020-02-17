import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalOpen } from 'components/Shop/components/Product/modules/actions';

const ProductDetails = memo(({ name, code, price, currency, description }) => { 
  const dispatch = useDispatch();
  
  const nameLower = name.toLowerCase();
  const image = require(`img/${nameLower}.png`);
  const productCode = `Product code ${code}`;

  const handleModalOpen = () => (
    dispatch(
      modalOpen({
        modalType: 'product',
        name,
        price,
        currency,
        description,
        code: productCode,
        buttonText: 'Add to cart',
        imgSrc: image,
        imgAlt: name
      })
    )
  );

  return (
    <div className='col-product'>
      <figure onClick={handleModalOpen} className='product-image'>
        <img src={image} alt={name} />
        <div className='product-description'>
          <h1>{name}</h1>
          <p className='product-code'>{productCode}</p>
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
