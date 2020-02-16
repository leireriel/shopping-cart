import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = memo(() => {
  const products = useSelector(state => state.products);
  const entries = Object.entries(products);
  
  let numberOfItems = 0;
  let priceTotal = 0;
  
  const getNumberOfItems = () => {
    for (const entry of entries) {
      numberOfItems += entry[1].amount;
    }
  };
  
  const getPriceTotal = () => {
    for (const entry of entries) {
      priceTotal += entry[1].priceTotal;
    }
  };
  
  useEffect(() => {
    getNumberOfItems();
    getPriceTotal();
  });

  return (
    <ul className='summary-items wrapper border'>
      <li>
        <span className='summary-items-number'>{numberOfItems} Items</span>
        <span className='summary-items-price'>{priceTotal}<span className='currency'>€</span></span>
      </li>
    </ul>
  );
});

export default OrderSummary;
