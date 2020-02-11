import React, { memo } from 'react';
import Title from 'components/Title';
import ProductsTitleRow from './components/ProductsTitleRow';
import ProductsList from './components/ProductsList';

const Shop = memo(() => (
  <section className='products'>
    <Title text='Shopping cart' />
    <ProductsTitleRow />
    <ProductsList />
  </section>
));

export default Shop;
