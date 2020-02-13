import React, { memo } from 'react';
import Title from 'components/Title';
import OrderSummary from './components/OrderSummary';
import OrderDiscounts from './components/OrderDiscounts';
import OrderTotal from './components/OrderTotal';

const Order = memo(() => (
  <aside className='summary'>
    <Title text='Order Summary' />
    <OrderSummary />
    <OrderDiscounts />
    <OrderTotal />
  </aside>
));

export default Order;
