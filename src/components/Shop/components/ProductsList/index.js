import React, { memo } from 'react';
import { ALL_PRODUCTS } from './data';
import Product from 'components/Shop/components/Product';

// We receibe an array with all products (that could be a response from API)
// It is very easy to grow, and also the reducer associated

const ProductsList = memo(() => {
  let renderAllProducts = [];

  for (const product of ALL_PRODUCTS) {
    renderAllProducts.push(<Product {...product} key={product.code} />);
  }

  return (
    <ul className='products-list'>
      {renderAllProducts}
    </ul>
  );
});

export default ProductsList;
