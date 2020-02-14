import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ONE, REMOVE_ONE } from 'components/Shop/constants';
import { actionProduct } from 'actions';

const Product = memo(({ name, code, price, currency }) => {
  // poner descripción a funciones
  const counter = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const nameLower = name.toLowerCase();
  const image = require(`img/${nameLower}.png`);
  
  const removeOne = () => dispatch(actionProduct({ type:name, actionToPerform:REMOVE_ONE, price }));
  const addOne= () => dispatch(actionProduct({ type:name, actionToPerform:ADD_ONE, price }));

  return (
    <li className='product row'>
    <div className='col-product'>
      <figure className='product-image'>
        <img src={image} alt={name} />
        <div className='product-description'>
          <h1>{name}</h1>
          <p className='product-code'>Product code {code}</p>
        </div>
      </figure>
    </div>
    <div className='col-quantity'>
      <button onClick={() => removeOne()} className='count'>
        -
      </button>
      <input type='text' className='product-quantity' value={counter[name].amount} readOnly />
      <button onClick={() => addOne()} className='count'>
        +
      </button>
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
    <div className='col-total'>
      <span className='product-price'>{counter[name].priceTotal}</span>
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
