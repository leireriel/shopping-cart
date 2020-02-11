import React, { memo } from 'react';
import Product from './product.js';

const ProductsList = memo(() => (
  <ul className='products-list'>
    <Product item='Shirt' code='X7R2OPX' price={20} />
    <Product item='Mug' code='X2G2OPZ' price={5} />
    <Product item='Cap' code='X3W2OPY' price={10} />
  </ul>
));

//enviar objeto

export default ProductsList;
