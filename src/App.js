import React, { memo } from 'react';

const App = memo(() => (
  <main className="App">
    <section className="products">
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list">
        <li className="product row">
          <div className="col-product">
            <figure className="product-image">
              <img src="img/shirt.png" alt="Shirt" />
              <div className="product-description">
                <h1>Shirt</h1>
                <p className="product-code">Product code X7R2OPX</p>
              </div>
            </figure>
          </div>
          <div className="col-quantity">
            <button className="count">-</button>
            <input type="text" className="product-quantity" defaultValue="3" />
            <button className="count">+</button>
          </div>
          <div className="col-price">
            <span className="product-price">20</span>
            <span className="product-currency currency">€</span>
          </div>
          <div className="col-total">
            <span className="product-price">60</span>
            <span className="product-currency currency">€</span>
          </div>
        </li>
        <li className="product row">
          <div className="col-product">
            <figure className="product-image">
              <img src="img/mug.png" alt="Mug" />
              <div className="product-description">
                <h1>Mug</h1>
                <p className="product-code">Product code X2G2OPZ</p>
              </div>
            </figure>
          </div>
          <div className="col-quantity">
            <button className="count">-</button>
            <input type="text" className="product-quantity" defaultValue="4" />
            <button className="count">+</button>
          </div>
          <div className="col-price">
            <span className="product-price">5</span>
            <span className="product-currency currency">€</span>
          </div>
          <div className="col-total">
            <span className="product-price">20</span>
            <span className="product-currency currency">€</span>
          </div>
        </li>
        <li className="product row">
          <div className="col-product">
            <figure className="product-image">
              <img src="img/cap.png" alt="Cap" />
              <div className="product-description">
                <h1>Cap</h1>
                <p className="product-code">Product code X3W2OPY</p>
              </div>
            </figure>
          </div>
          <div className="col-quantity">
            <button className="count">-</button>
            <input type="text" className="product-quantity" defaultValue="4" />
            <button className="count">+</button>
          </div>
          <div className="col-price">
            <span className="product-price">10</span>
            <span className="product-currency currency">€</span>
          </div>
          <div className="col-total">
            <span className="product-price">40</span>
            <span className="product-currency currency">€</span>
          </div>
        </li>
      </ul>
    </section>
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">11 Items</span>
          <span className="summary-items-price">120<span className="currency">€</span></span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          <li><span>2x1 Mug offer</span><span>-10€</span></li>
          <li><span>x3 Shirt offer</span><span>-3€</span></li>
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">107€</span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
  </main>
));

export default App;
