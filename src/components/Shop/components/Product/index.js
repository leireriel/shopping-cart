import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ONE, REMOVE_ONE, SHIRT, MUG, CAP } from 'components/Shop/constants';
import { actionProduct } from 'actions';

const Product = memo(({ name, code, price, currency }) => {
  // poner descripción a funciones
  const counter = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const nameLower = name.toLowerCase();
  const nameUpper = name.toUpperCase();

  const renderPriceTotal = () => (
    <span className='product-price'>{counter[nameLower].priceTotal}</span>
  );
  
  const renderQuantity = () => (
    <>
      <button
        onClick={() => dispatch(actionProduct({actionToPerform:REMOVE_ONE, price, type:nameUpper}))}
        className='count'
      >
        -
      </button>
      <input type='text' className='product-quantity' value={counter[nameLower].amount} />
      <button
        onClick={() => dispatch(actionProduct({actionToPerform:ADD_ONE, price, type:nameUpper}))}
        className='count'
      >
        +
      </button>
    </>
  );

  const renderImg = () => (
    <img src={`img/${nameLower}.png`} alt={name} />
  );
  
  return (
    <li className='product row'>
    <div className='col-product'>
      <figure className='product-image'>
        {renderImg()}
        <div className='product-description'>
          <h1>{name}</h1>
          <p className='product-code'>Product code {code}</p>
        </div>
      </figure>
    </div>
    <div className='col-quantity'>
      {renderQuantity()}
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'></span>
    </div>
    <div className='col-total'>
      {renderPriceTotal()}
      <span className='product-currency currency'>{currency}</span>
    </div>
  </li>
  );
});

Product.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default Product;