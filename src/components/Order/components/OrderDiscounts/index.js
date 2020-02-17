import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const OrderDiscounts = memo(() => {
  const discountCopiesShirt = useSelector(state => state.products.Shirt?.discountCopies);
  const discountCopiesMug = useSelector(state => state.products.Mug?.discountCopies);
  const discountShirt = useSelector(state => state.products.Shirt.discount);
  const discountMug = useSelector(state => state.products.Mug.discount);
  
  const renderDiscount = (copies, amount) => (
    <li key='0'>
      <span>{copies}</span>
      <span>-{amount}€</span>
    </li>
  );

  return (
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        {discountCopiesShirt && renderDiscount(discountCopiesShirt, discountShirt)}
        {discountCopiesMug && renderDiscount(discountCopiesMug, discountMug)}
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>
  );
});

export default OrderDiscounts;
