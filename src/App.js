import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Shop from 'components/Shop';
import Order from 'components/Order';
import Modal from 'components/Modals';

const App = memo(() => {
  const modalState = useSelector(state => state.modal.open);

  return (
    <>
    {modalState ? (
      <Modal />
    ) : (
      <main className='App'>
        <Shop />
        <Order />
      </main>
    )}
  </>
  )
});

export default App;
