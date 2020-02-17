import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Title from 'components/Title';
import OrderSummary from './components/OrderSummary';
import OrderDiscounts from './components/OrderDiscounts';
import OrderTotal from './components/OrderTotal';

const Order = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  let orderDetails = {
    numberOfItems: 0,
    priceTotal: 0,
    discountTotal: 0
  };

  for (const product of arrOfProducts) {
    orderDetails.numberOfItems += product[1].amount;
    orderDetails.priceTotal += product[1].priceTotal;
    orderDetails.discountTotal += product[1].discount;
  }

  return (
    <aside className='summary'>
      <Title text='Order Summary' />
      <OrderSummary {...orderDetails} />
      <OrderDiscounts />
      <OrderTotal {...orderDetails} />
    </aside>
  );
});

export default Order;
