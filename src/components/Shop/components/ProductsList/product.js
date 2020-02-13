import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { 
  actionShirt,
  actionMug,
  actionCap
} from 'actions';
import imgShirt from 'img/shirt.png';
import imgMug from 'img/mug.png';
import imgCap from 'img/cap.png';

const Product = memo(({ name, code, price, currency='€' }) => {
  // poner descripción a funciones
  const counterShirt = useSelector(state => state.products.shirt);
  const counterMug = useSelector(state => state.products.mug);
  const counterCap = useSelector(state => state.products.cap);
  const dispatch = useDispatch();
  
  return (
  <li className='product row'>
    <div className='col-product'>
      <figure className='product-image'>
        {
          name === 'Shirt' ? (
            <img src={imgShirt} alt={name} />
          ) : name === 'Mug' ? (
            <img src={imgMug} alt={name} />
          ) : name === 'Cap' ? (
            <img src={imgCap} alt={name} />
          ) : null
        }
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
            <button onClick={() => dispatch(actionShirt('REMOVE_ONE', price))} className='count'>
              -
            </button>
            <input type='text' className='product-quantity' value={counterShirt.amount} />
            <button onClick={() => dispatch(actionShirt('ADD_ONE', price))} className='count'>
              +
            </button>
          </>
        ) : name === 'Mug' ? (
          <>
            <button onClick={() => dispatch(actionMug('REMOVE_ONE', price))} className='count'>
              -
            </button>
            <input type='text' className='product-quantity' value={counterMug.amount} />
            <button onClick={() => dispatch(actionMug('ADD_ONE', price))} className='count'>
              +
            </button>
          </>
        ) : name === 'Cap' ? (
          <>
            <button onClick={() => dispatch(actionCap('REMOVE_ONE', price))} className='count'>
              -
            </button>
            <input type='text' className='product-quantity' value={counterCap.amount} />
            <button onClick={() => dispatch(actionCap('ADD_ONE', price))} className='count'>
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

//recibir objeto con destructuring y € por defecto

Product.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string
}

export default Product;