import React, { memo } from 'react';
//importar imágenes aquí

const Product = memo(({ item, code, price }) => (
  <li className='product row'>
    <div className='col-product'>
      <figure className='product-image'>
        <img src='img/shirt.png // img/mug.png // img/cap.png' alt={item} />
        <div className='product-description'>
          <h1>{item}</h1>
          <p className='product-code'>Product code {code}</p>
        </div>
      </figure>
    </div>
    <div className='col-quantity'>
      <button className='count'>-</button>
      <input type='text' className='product-quantity' defaultValue='0' />
      <button className='count'>+</button>
    </div>
    <div className='col-price'>
      <span className='product-price'>{price}</span>
      <span className='product-currency currency'>€ // poner currency='€' como prop por defecto en componente, y así no envío nada</span>
    </div>
    <div className='col-total'>
      <span className='product-price'>0 // esto creo que es el productPrice x productQuantity</span>
      <span className='product-currency currency'>€ // poner currency='€' como prop por defecto en componente, y así no envío nada</span>
    </div>
  </li>
));

//recibir objeto con destructuring y € por defecto

export default Product;