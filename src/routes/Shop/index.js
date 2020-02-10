import React from 'react';
import Counter from 'components/Counter';

const Shop = () => {
  const hola = {
    uno: {
      dos: 'pintame'
    }
  }
  return (
    <>
      <header>
        hola header {hola.fdf?.dos}
      </header>
      <main>
        <Counter item='tshirt' />
      </main>
      <footer />
    </>
  )
};

export default Shop;
