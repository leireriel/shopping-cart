import React, { memo } from 'react';
import { SHIRT_DETAILS, MUG_DETAILS, CAP_DETAILS } from 'constants/index';
import Product from './product.js';

const ProductsList = memo(() => (
  <ul className='products-list'>
    <Product {...SHIRT_DETAILS} />
    <Product {...MUG_DETAILS} />
    <Product {...CAP_DETAILS} />
  </ul>
));

export default ProductsList;
