import React, { memo } from 'react';
import { ALL_PRODUCTS } from './data';
import Product from 'components/Shop/components/Product';

/*
This component imports an array with all products (that could be a response from an API).
Then it renders every product which will have its own reducer dinamically associated.
In order to implement the service, I would create a `service.js` file.
For this exercise, I have created a `data.js` with an array that contains 3 products.
The app is ready to receive an array with a lot of products, it is very easy to grow!
Just like the reducer associated is. You can grow the array an see it :)
*/

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
