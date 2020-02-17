import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductDetails from './components/ProductDetails';
import Quantity from './components/Quantity';
import Price from './components/Price';
import Total from './components/Total';

const Product = memo(({ name, code, price, currency, description }) => {
  // TODO poner descripción a funciones
  const productsState = useSelector(state => state.products);

  return (
    <li className='product row'>
      <ProductDetails {...{name, code, price, currency, description}} />
      <Quantity name={name} price={price} productsState={productsState} />
      <Price price={price} currency={currency} />
      <Total name={name} currency={currency} productsState={productsState} />
    </li>
  );
});

Product.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Product;
