import React, { memo } from 'react';
// import { SHIRT, MUG, CAP } from 'constants';
import Product from './product.js';

const ProductsList = memo(() => (
  <ul className='products-list'>
    <Product name='Shirt' code='X7R2OPX' price={20} />
    <Product name='Mug' code='X2G2OPZ' price={5} />
    <Product name='Cap' code='X3W2OPY' price={10} />
  </ul>
));

//enviar objeto

export default ProductsList;
