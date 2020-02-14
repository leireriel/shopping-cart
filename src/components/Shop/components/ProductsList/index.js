import React, { memo } from 'react';
import { SHIRT_DETAILS, MUG_DETAILS, CAP_DETAILS } from 'components/Shop/constants';
import Product from '../Product';

const ProductsList = memo(() => (
  <ul className='products-list'>
    <Product {...SHIRT_DETAILS} />
    <Product {...MUG_DETAILS} />
    <Product {...CAP_DETAILS} />
  </ul>
));

// crear array of products que haga esto automático?

export default ProductsList;
