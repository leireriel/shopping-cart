export const getOrderDetails = arrOfProducts => {
  let order = {
    numberOfItems: 0,
    priceTotal: 0,
    discountTotal: 0
  };

  for (const product of arrOfProducts) {
    order.numberOfItems += product[1].amount;
    order.priceTotal += product[1].priceTotal;
    order.discountTotal += product[1].discount;
  }

  console.log(order);
  return order;
};
