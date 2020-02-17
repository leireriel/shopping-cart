import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrderDetails } from 'components/Order/utils';
import Title from 'components/Title';
import OrderSummary from './components/OrderSummary';
import OrderDiscounts from './components/OrderDiscounts';
import OrderTotal from './components/OrderTotal';

const Order = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  const [orderDetails, setOrderDetails] = useState({});

  useEffect(
    () => {
      setOrderDetails(getOrderDetails(arrOfProducts));
    },
    [arrOfProducts],
  );

  return (
    <aside className='summary'>
      <Title text='Order Summary' />
      <OrderSummary orderDetails={orderDetails} />
      <OrderDiscounts />
      <OrderTotal orderDetails={orderDetails} />
    </aside>
  );
});

export default Order;
