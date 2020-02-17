import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const OrderDiscounts = memo(() => {
  // const products = useSelector(state => state.products);
  // const arrOfProducts = Object.entries(products);

  // let allDiscounts = [];

  // for (const product of arrOfProducts) {
  //   const nameAndDiscount = [];

  //   if (product[1].discount > 0) {
  //     const name = product[0];
  //     const discount = product[1].discount;
  
  //     nameAndDiscount.push(name, discount);
  //     allDiscounts.push(nameAndDiscount);
  //   }
  // };

  // console.log(allDiscounts);

  // let renderAllDiscounts = [];

  // for (const discount of allDiscounts) {
  //   const name = discount[0];
  //   const amount = discount[1];
  //   const discountCopies = useSelector(state => state.products[name].discountCopies);
    
  //   renderAllDiscounts.push(
  //     <li key='vuelta'>
  //       <span>{discountCopies}</span>
  //       <span>-{amount}€</span>
  //     </li>
  //   );
  // };
  
  const discountCopiesShirt = useSelector(state => state.products.Shirt?.discountCopies);
  const discountCopiesMug = useSelector(state => state.products.Mug?.discountCopies);
  const discountShirt = useSelector(state => state.products.Shirt.discount);
  const discountMug = useSelector(state => state.products.Mug.discount);
  
  return (
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        {discountCopiesShirt && (
          <li key='0'>
            <span>{discountCopiesShirt}</span>
            <span>-{discountShirt}€</span>
          </li>
        )}
        {discountCopiesMug && (
          <li key='0'>
            <span>{discountCopiesMug}</span>
            <span>-{discountMug}€</span>
          </li>
        )}
        {/* {renderAllDiscounts} */}
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>
  );
});

export default OrderDiscounts;
