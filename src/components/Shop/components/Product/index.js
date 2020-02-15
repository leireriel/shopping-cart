import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addOne, removeOne } from 'components/Shop/modules/actions';

const Product = memo(({ name, code, price, currency }) => {
  // poner descripción a funciones
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const nameLower = name.toLowerCase();
  const image = require(`img/${nameLower}.png`);

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
      <button onClick={() => dispatch(removeOne({ product:name, price }))} className='count'>
        -
      </button>
      <input type='text' className='product-quantity' value={products[name].amount} readOnly />
      <button onClick={() => dispatch(addOne({ product:name, price }))} className='count'>
        +
      </button>
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
    <div className='col-total'>
      <span className='product-price'>{products[name].priceTotal}</span>
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
