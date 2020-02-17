import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrderDetails } from 'components/Order/utils';

const OrderSummary = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    setOrderDetails(getOrderDetails(arrOfProducts));
  });

  return (
    <ul className='summary-items wrapper border'>
      <li>
        <span className='summary-items-number'>{orderDetails?.numberOfItems} Items</span>
        <span className='summary-items-price'>
          {orderDetails?.priceTotal}
          <span className='currency'>€</span>
        </span>
      </li>
    </ul>
  );
});

export default OrderSummary;
