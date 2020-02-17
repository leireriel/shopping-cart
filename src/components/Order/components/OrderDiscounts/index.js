import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const OrderDiscounts = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  let allDiscounts = [];

  for (const product of arrOfProducts) {
    const nameAndDiscount = [];

    if (product[1].discount > 0) {
      const name = product[0];
      const discount = product[1].discount;
  
      nameAndDiscount.push(name, discount);
      allDiscounts.push(nameAndDiscount);
    }
  };

  console.log(allDiscounts);

  let renderAllDiscounts = [];

  for (const discount of allDiscounts) {
    const name = discount[0];
    const amount = discount[1];
    const discountCopies = useSelector(state => state.products[name].discountCopies);
    
    renderAllDiscounts.push(
      <li key='vuelta'>
        <span>{discountCopies}</span>
        <span>-{amount}€</span>
      </li>
    );
  };
  
  
  
  return (
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        {renderAllDiscounts}
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>
  );
});

export default OrderDiscounts;
