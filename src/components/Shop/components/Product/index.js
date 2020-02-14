import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ONE, REMOVE_ONE, SHIRT, MUG, CAP } from 'components/Shop/constants';
import { actionProduct } from 'actions';

const Product = memo(({ name, code, price, currency }) => {
  // poner descripción a funciones
  const counterShirt = useSelector(state => state.products.shirt);
  const counterMug = useSelector(state => state.products.mug);
  const counterCap = useSelector(state => state.products.cap);
  const dispatch = useDispatch();
  
  const renderImg = () => {
    const newName = name.toLowerCase();
    return (
      <img src={`img/${newName}.png`} alt={name} />
    );
  };

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
      {
        name === 'Shirt' ? (
          <>
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:REMOVE_ONE, price, type:SHIRT}))}
              className='count'
            >
              -
            </button>
            <input type='text' className='product-quantity' value={counterShirt.amount} />
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:ADD_ONE, price, type:SHIRT}))}
              className='count'
            >
              +
            </button>
          </>
        ) : name === 'Mug' ? (
          <>
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:REMOVE_ONE, price, type:MUG}))}
              className='count'
            >
              -
            </button>
            <input type='text' className='product-quantity' value={counterMug.amount} />
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:ADD_ONE, price, type:MUG}))}
              className='count'
            >
              +
            </button>
          </>
        ) : name === 'Cap' ? (
          <>
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:REMOVE_ONE, price, type:CAP}))}
              className='count'
            >
              -
            </button>
            <input type='text' className='product-quantity' value={counterCap.amount} />
            <button
              onClick={() => dispatch(actionProduct({actionToPerform:ADD_ONE, price, type:CAP}))}
              className='count'
            >
              +
            </button>
          </>
        ) : null
      }
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'></span>
    </div>
    <div className='col-total'>
      <span className='product-price'>{
          name === 'Shirt'
            ? counterShirt.priceTotal
            : name === 'Mug'
            ? counterMug.priceTotal
            : name === 'Cap'
            ? counterCap.priceTotal
            : null
        }
      </span>
      <span className='product-currency currency'>€</span>
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