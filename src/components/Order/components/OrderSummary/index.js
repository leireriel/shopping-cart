import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  const [numberOfItems, setNumberOfItems] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);

  const getPropertiesOfState = () => {
    for (const product of arrOfProducts) {
      setNumberOfItems(numberOfItems + product[1].amount);
      setPriceTotal(priceTotal + product[1].priceTotal);
      setDiscountTotal(discountTotal + product[1].discount);
    }
  };

  useEffect(() => {
    getPropertiesOfState();
  });

  return (
    <ul className='summary-items wrapper border'>
      <li>
        <span className='summary-items-number'>{numberOfItems} Items</span>
        <span className='summary-items-price'>
          {priceTotal - discountTotal}
          <span className='currency'>€</span>
        </span>
      </li>
    </ul>
  );
});

export default OrderSummary;
