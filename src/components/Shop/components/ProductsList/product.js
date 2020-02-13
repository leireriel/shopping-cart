import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addOne, removeOne } from 'actions';
import imgShirt from 'img/shirt.png';
import imgMug from 'img/mug.png';
import imgCap from 'img/cap.png';

const Product = memo(({ name, code, price, currency='€' }) => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  const totalPrice = price * counter;

  return (
  <li className='product row'>
    <div className='col-product'>
      <figure className='product-image'>
        {
          name === "Shirt" ? (
            <img src={imgShirt} alt={name} />
          ) : name === "Mug" ? (
            <img src={imgMug} alt={name} />
          ) : name === "Cap" ? (
            <img src={imgCap} alt={name} />
          ) : null
        }
        {/* hacer imagenes con styled components? */}
        <div className='product-description'>
          <h1>{name}</h1>
          <p className='product-code'>Product code {code}</p>
        </div>
      </figure>
    </div>
    <div className="col-quantity">
      <button onClick={() => dispatch(removeOne())} className="count">
        -
      </button>
      <input type="text" className="product-quantity" value={counter} />
      <button onClick={() => dispatch(addOne())} className="count">
        +
      </button>
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'></span>
    </div>
    <div className='col-total'>
      <span className='product-price'>{totalPrice}</span>
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